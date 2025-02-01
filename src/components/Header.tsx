import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-400">
            Ogbaje Emmanuel Adoyi
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/emmogba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-ogbaje-8857382"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="emmanuelogbaje22@gmail.com"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
