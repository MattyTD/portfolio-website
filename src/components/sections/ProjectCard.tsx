import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../data/projects';

/**
 * Project card component for displaying project information
 * Features responsive design and dark mode support
 *
 * Card design inspired by:
 * https://tailwindui.com/components/application-ui/cards/card-headings
 *
 * @param {Object} props - Component props
 * @param {Project} props.project - Project data to display
 * @param {boolean} props.featured - Whether this is a featured project
 */
interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const { id, title, description, technologies, imageUrl, githubUrl, liveUrl } = project;

  return (
    <div
      className={`
      bg-white dark:bg-gray-800 
      shadow-md rounded-lg overflow-hidden 
      border border-gray-200 dark:border-gray-700 
      transition-all duration-300
      ${featured ? 'transform hover:-translate-y-2' : 'hover:shadow-lg'}
    `}
    >
      {/* Project Image */}
      <div className="relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-56 object-cover transition-transform hover:scale-105 duration-500"
          />
        ) : (
          <div className="w-full h-56 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
            <span className="text-lg font-medium">Project Preview</span>
          </div>
        )}

        {/* Featured Tag */}
        {featured && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            to={`/projects#project-${id}`}
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center"
          >
            Details
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>

          <div className="flex space-x-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="GitHub Repository"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.699-2.782.603-3.369-1.338-3.369-1.338-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.891 1.528 2.341 1.087 2.91.831.091-.647.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Live Demo"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
