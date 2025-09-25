import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM_MEMBERS } from '../constants';
import type { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <Link to={`/team/${member.id}`} className="block h-full group">
    <div className="bg-white p-6 rounded-lg shadow-lg text-center transform group-hover:-translate-y-2 transition-transform duration-300 border border-gray-200 h-full flex flex-col group-hover:shadow-xl group-hover:border-brand-gold">
      <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-brand-bg-alt" />
      <h3 className="text-xl font-bold text-brand-dark mb-1">{member.name}</h3>
      <p className="text-brand-gold font-semibold mb-3">{member.title}</p>
      <p className="text-gray-600 text-sm flex-grow">{member.bio}</p>
    </div>
  </Link>
);

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-brand-bg-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gold font-serif">Our Expert Team</h2>
          <p className="text-lg text-gray-600 mt-2">Meet the professionals driving our success.</p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;