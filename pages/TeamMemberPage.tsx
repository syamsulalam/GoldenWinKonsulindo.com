import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { TEAM_MEMBERS } from '../constants';
import type { ConsultingProject, Education, Experience } from '../types';

const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-bold text-brand-gold font-serif mb-4">{title}</h3>
        {children}
    </div>
);

const TeamMemberPage: React.FC = () => {
    const { memberId } = useParams<{ memberId: string }>();
    const navigate = useNavigate();
    const member = TEAM_MEMBERS.find(m => m.id === memberId);

    if (!member) {
        return (
            <div className="bg-brand-bg-alt py-40">
              <div className="container mx-auto px-6 text-center">
                  <h1 className="text-3xl font-bold text-brand-dark mb-4">Team Member Not Found</h1>
                  <p className="text-gray-600 mb-6">The profile you are looking for does not exist.</p>
                  <Link to="/" className="bg-brand-gold text-white font-bold py-3 px-8 rounded-full hover:bg-brand-gold-darker transition-colors duration-300">
                      Return to Home
                  </Link>
              </div>
            </div>
        );
    }

    return (
        <div className="bg-brand-bg-alt py-20 pt-32">
            <div className="container mx-auto px-6">
                <button onClick={() => navigate(-1)} className="text-brand-gold hover:text-brand-dark font-semibold mb-8 inline-flex items-center group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back
                </button>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-md sticky top-28">
                            <img src={member.imageUrl} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-brand-gold" />
                            <h1 className="text-3xl font-bold text-center text-brand-dark">{member.name}</h1>
                            <p className="text-center text-brand-gold font-semibold text-lg mt-1">{member.title}</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-2">
                        <SectionCard title="About">
                            <p className="text-gray-700 leading-relaxed">{member.fullBio}</p>
                        </SectionCard>

                        <SectionCard title="Education">
                            <ul className="space-y-4">
                                {member.education.map((edu, index) => (
                                    <li key={index} className="border-l-4 border-brand-gold pl-4">
                                        <p className="font-bold text-brand-dark">{edu.degree}</p>
                                        <p className="text-gray-600">{edu.institution}</p>
                                        <p className="text-sm text-gray-500">{edu.period}</p>
                                        {edu.details && <p className="text-sm text-gray-500 italic mt-1">"{edu.details}"</p>}
                                    </li>
                                ))}
                            </ul>
                        </SectionCard>

                        <SectionCard title="Experience">
                            <ul className="space-y-4">
                                {member.experience.map((exp, index) => (
                                    <li key={index} className="border-l-4 border-brand-gold pl-4">
                                        <p className="font-bold text-brand-dark">{exp.title}</p>
                                        <p className="text-gray-600">{exp.company}</p>
                                        <p className="text-sm text-gray-500">{exp.period}</p>
                                        {exp.details && <p className="text-sm text-gray-600 mt-1">{exp.details}</p>}
                                    </li>
                                ))}
                            </ul>
                        </SectionCard>

                        {member.skills && member.skills.length > 0 && (
                            <SectionCard title="Skills Highlights">
                                <div className="flex flex-wrap gap-2">
                                    {member.skills.map((skill, index) => (
                                        <span key={index} className="bg-brand-bg-alt text-brand-dark font-medium px-3 py-1 rounded-full text-sm border border-gray-200">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </SectionCard>
                        )}

                        {member.consultingProjects.length > 0 && (
                            <SectionCard title="Key Consulting Projects">
                               <div className="overflow-x-auto -mx-6">
                                    <table className="w-full text-left">
                                        <tbody>
                                            {member.consultingProjects.map((project, index) => (
                                                <tr key={index} className="border-b border-gray-200 last:border-b-0">
                                                    <td className="p-4 align-top text-brand-gold font-medium w-20">{project.year}</td>
                                                    <td className="p-4 align-top text-gray-800">{project.name}<br/><span className="text-sm text-gray-500">{project.client}</span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                               </div>
                            </SectionCard>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberPage;