import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JobApplicationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        coverLetter: '',
    });
    const [resume, setResume] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResume(e.target.files[0]);
            setError(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!resume) {
            setError('Please upload your resume.');
            return;
        }
        setIsLoading(true);
        setError(null);

        const formPayload = new FormData();
        formPayload.append('name', formData.name);
        formPayload.append('email', formData.email);
        formPayload.append('phone', formData.phone);
        formPayload.append('coverLetter', formData.coverLetter);
        formPayload.append('resume', resume);

        try {
            // This endpoint should point to your backend/serverless function
            const response = await fetch('/api/submit', {
                method: 'POST',
                body: formPayload,
            });

            if (response.ok) {
                navigate('/application-success');
            } else {
                const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred.' }));
                setError(errorData.message || 'Submission failed. Please try again.');
                navigate('/application-error');
            }
        } catch (err) {
            setError('A network error occurred. Please check your connection and try again.');
            navigate('/application-error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-brand-dark font-serif mb-6">Apply Now</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                        />
                    </div>
                     <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                        />
                    </div>
                    <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume/CV</label>
                        <input
                            type="file"
                            name="resume"
                            id="resume"
                            required
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-bg-alt file:text-brand-dark hover:file:bg-brand-gold/20"
                        />
                    </div>
                    <div className="md:col-span-2">
                         <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                         <textarea
                            name="coverLetter"
                            id="coverLetter"
                            rows={6}
                            value={formData.coverLetter}
                            onChange={handleInputChange}
                            placeholder="Tell us why you're a great fit for this role..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                         />
                    </div>
                </div>

                {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}

                <div className="mt-8 text-center">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-brand-gold text-white font-bold py-3 px-12 rounded-full hover:bg-brand-gold-darker transition-all duration-300 text-lg transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Submitting...' : 'Submit Application'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobApplicationForm;
