import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/sections/ProjectCard';
import projects from '../data/projects';

/**
 * Projects page component
 * Displays all projects with filtering and categorization options
 */
const Projects: React.FC = () => {
  // State for category filter
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Extract unique technology categories from projects
  const categories = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech));
    });
    return ['all', ...Array.from(techs)].sort();
  }, []);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter((project) => project.technologies.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Here are some of the projects I've worked on. Each project represents my passion for
          creating intuitive and effective digital solutions.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.id === 1} // Mark first project as featured
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <p>No projects found with the selected filter.</p>
        </div>
      )}

      {/* Project Details Sections for Anchor Links */}
      <div className="mt-24 space-y-24">
        {projects.map((project) => (
          <section
            key={project.id}
            id={`project-${project.id}`}
            className="scroll-mt-24 max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {project.title}
              </h2>

              <div className="aspect-video bg-gray-200 dark:bg-gray-700 mb-8 rounded overflow-hidden">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-medium">
                    Project Preview
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.699-2.782.603-3.369-1.338-3.369-1.338-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.891 1.528 2.341 1.087 2.91.831.091-.647.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub Repository
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Projects;
