import React, { useState, useMemo } from 'react';
import { CONSULTING_PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const years = useMemo(() => {
    const uniqueYears = [...new Set(CONSULTING_PROJECTS.map(p => p.year))];
    return uniqueYears.sort((a, b) => b - a);
  }, []);

  const filteredProjects = useMemo(() => {
    if (!selectedYear) {
      return CONSULTING_PROJECTS;
    }
    return CONSULTING_PROJECTS.filter(p => p.year === selectedYear);
  }, [selectedYear]);

  return (
    <section id="projects" className="py-20 bg-brand-bg-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gold font-serif">Project Portfolio</h2>
          <p className="text-lg text-gray-600 mt-2">A selection of impactful consulting engagements.</p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedYear(null)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${!selectedYear ? 'bg-brand-gold text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-brand-gold hover:text-white'}`}
          >
            All Years
          </button>
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${selectedYear === year ? 'bg-brand-gold text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-brand-gold hover:text-white'}`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-brand-bg-alt">
                <tr>
                  <th className="p-4 font-semibold text-brand-dark tracking-wider w-20">Year</th>
                  <th className="p-4 font-semibold text-brand-dark tracking-wider">Project</th>
                  <th className="p-4 font-semibold text-brand-dark tracking-wider">Client/Institution</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-brand-bg-alt transition-colors duration-200">
                    <td className="p-4 text-brand-gold font-medium">{project.year}</td>
                    <td className="p-4 text-gray-800">{project.name}</td>
                    <td className="p-4 text-gray-600">{project.client}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;