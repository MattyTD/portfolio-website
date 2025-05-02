import React from 'react';
import { Project } from '../../data/projects';
import Button from '../ui/Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, technologies, imageUrl, githubUrl, liveUrl } = project;
  
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
      {imageUrl ? (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      ) : (
        <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {githubUrl && (
            <Button 
              as="a" 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              variant="outline" 
              size="sm"
            >
              GitHub
            </Button>
          )}
          {liveUrl && (
            <Button 
              as="a" 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              size="sm"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 