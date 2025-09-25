import React, { useState } from 'react';

const InputField: React.FC<{ label: string; type: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean; placeholder?: string }> = ({ label, type, name, value, onChange, required = false, placeholder = '' }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}{required && <span className="text-red-500">*</span>}</label>
        <input type={type} id={name} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
    </div>
);

const FileInputField: React.FC<{ label: string; name: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean; multiple?: boolean; helpText: string }> = ({ label, name, onChange, required = false, multiple = false, helpText }) => {
    const [fileNames, setFileNames] = useState<string[]>([]);
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
        if (e.target.files) {
            setFileNames(Array.from(e.target.files).map(file => file.name));
        }
    };

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}{required && <span className="text-red-500">*</span>}</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                        <label htmlFor={name} className="relative cursor-pointer bg-white rounded-md font-medium text-brand-gold hover:text-brand-gold-darker focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-gold">
                            <span>Upload files</span>
                            <input id={name} name={name} type="file" className="sr-only" onChange={handleFileChange} required={required} multiple={multiple} />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">{helpText}</p>
                </div>
            </div>
            {fileNames.length > 0 && (
                 <div className="mt-2 text-sm text-gray-500">
                    <strong>Selected files:</strong> {fileNames.join(', ')}
                </div>
            )}
        </div>
    );
}

const JobApplicationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        whatsapp: '',
        email: '',
        appliedPosition: '',
        howDidYouFindOut: '',
    });
    const [files, setFiles] = useState<FileList | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFiles(e.target.files);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would handle the form submission, e.g., send to an API.
        console.log({ ...formData, files });
        alert('Thank you for your application! We will get back to you shortly.');
        // Reset form
        setFormData({
            fullName: '',
            whatsapp: '',
            email: '',
            appliedPosition: '',
            howDidYouFindOut: '',
        });
        setFiles(null);
        // This is tricky with file inputs, often requires a form reset or key change
    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-2">Job Application</h2>
            <p className="text-center text-gray-600 mb-8">We're excited to learn more about you.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <InputField label="Full Name" type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="e.g., John Doe"/>
                <InputField label="WhatsApp Number" type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required placeholder="e.g., 081234567890"/>
                <InputField label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="e.g., john.doe@example.com"/>
                <InputField label="Applied Position" type="text" name="appliedPosition" value={formData.appliedPosition} onChange={handleChange} required placeholder="e.g., Management Consultant"/>
                
                <div>
                    <label htmlFor="howDidYouFindOut" className="block text-sm font-medium text-gray-700 mb-1">How did you find out about this opening?</label>
                    <textarea id="howDidYouFindOut" name="howDidYouFindOut" value={formData.howDidYouFindOut} onChange={handleChange} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold" placeholder="e.g., LinkedIn, company website, referral, etc."></textarea>
                </div>
                
                <FileInputField 
                    label="Documents" 
                    name="documents" 
                    onChange={handleFileChange}
                    required 
                    multiple 
                    helpText="Upload your CV/Resume, Portfolio, and other relevant files. Max 5MB per file."
                />

                <div className="text-center pt-4">
                    <button type="submit" className="bg-brand-gold text-white font-bold py-3 px-12 rounded-full hover:bg-brand-gold-darker transition-all duration-300 text-lg transform hover:scale-105">
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobApplicationForm;
