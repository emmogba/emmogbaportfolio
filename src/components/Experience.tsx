import React from 'react';
import { experiences } from '../data';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-100">{experience.title}</h3>
                  <p className="text-gray-400 mt-1">{experience.duration}</p>
                  <p className="text-gray-300 mt-2">{experience.description}</p>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-sm border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};