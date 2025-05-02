import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-300 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-300 transition">About</a></li>
            <li><a href="#projects" className="hover:text-blue-300 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-300 transition">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 