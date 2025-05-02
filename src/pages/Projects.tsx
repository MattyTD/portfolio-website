import React from 'react';
import ProjectsSection from '../components/sections/ProjectsSection';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Here are some of the projects I've worked on. Each project represents my passion for creating
          intuitive and effective digital solutions.
        </p>
      </div>
      
      <ProjectsSection />
    </div>
  );
};

export default Projects; 