import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="https://www.fairintech.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/fairintellect-logo.png"
                alt="FairIntellect Technologies"
                className="h-20 w-auto"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="https://www.fairintech.com/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="https://www.fairintech.com/solutions" className="text-gray-300 hover:text-white transition-colors">
              Solutions
            </a>
            <a href="https://www.fairintech.com/#services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="https://www.fairintech.com/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="https://www.fairintech.com/#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
            <a href="https://www.fairintech.com/faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;