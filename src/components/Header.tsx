import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-white">Fair</span>
              <span className="text-cyan-400">Intellect</span>
            </div>
            <div className="ml-2 text-xs text-cyan-400 font-medium">
              TECHNOLOGIES
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;