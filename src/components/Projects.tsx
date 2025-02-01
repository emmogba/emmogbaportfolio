import React from 'react';
import { projects } from '../data';
import { ExternalLink } from 'lucide-react';

const projectColors = [
  'from-cyan-500 to-blue-500',
  'from-fuchsia-500 to-pink-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-amber-500',
  'from-violet-500 to-purple-500',
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${projectColors[index % projectColors.length]} opacity-20 group-hover:opacity-30 transition-opacity`} />
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${projectColors[index % projectColors.length]}`}>
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.type === 'government' 
                      ? 'bg-blue-900/50 text-blue-300 border border-blue-700' 
                      : 'bg-purple-900/50 text-purple-300 border border-purple-700'
                  }`}>
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 rounded-md text-sm border ${
                          index % projectColors.length === 0 ? 'bg-cyan-900/30 border-cyan-700/50 text-cyan-300' :
                          index % projectColors.length === 1 ? 'bg-fuchsia-900/30 border-fuchsia-700/50 text-fuchsia-300' :
                          index % projectColors.length === 2 ? 'bg-green-900/30 border-green-700/50 text-green-300' :
                          index % projectColors.length === 3 ? 'bg-orange-900/30 border-orange-700/50 text-orange-300' :
                          'bg-violet-900/30 border-violet-700/50 text-violet-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center ${
                    index % projectColors.length === 0 ? 'text-cyan-400 hover:text-cyan-300' :
                    index % projectColors.length === 1 ? 'text-fuchsia-400 hover:text-fuchsia-300' :
                    index % projectColors.length === 2 ? 'text-green-400 hover:text-green-300' :
                    index % projectColors.length === 3 ? 'text-orange-400 hover:text-orange-300' :
                    'text-violet-400 hover:text-violet-300'
                  } transition-colors`}
                >
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};