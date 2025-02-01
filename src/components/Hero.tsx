
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
            Ogbaje Emmanuel Adoyi
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Senior Software Developer specializing in TypeScript, React, Node.js, and Laravel
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all"
            >
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-300 bg-gray-800/50 hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};