import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

/**
 * Home page component
 * Features an animated introduction, featured projects, and skills
 *
 * Animation techniques adapted from:
 * https://www.framer.com/motion/examples/
 */
const Home: React.FC = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.section
        id="hero"
        className="py-16 md:py-24 text-center flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          variants={itemVariants}
        >
          Hello, I'm Matthew
        </motion.h1>

        <motion.div
          className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-8"
          variants={itemVariants}
        ></motion.div>

        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300"
          variants={itemVariants}
        >
          I'm a passionate full-stack developer specializing in building modern, responsive, and
          user-friendly web applications that solve real-world problems.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4" variants={itemVariants}>
          <Button as={Link} to="/projects" size="lg">
            View Projects
          </Button>
          <Button as={Link} to="/contact" size="lg" variant="outline">
            Contact Me
          </Button>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 rounded-xl mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">My Toolkit</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-4">
          {[
            'JavaScript',
            'TypeScript',
            'React',
            'Node.js',
            'Express',
            'MongoDB',
            'GraphQL',
            'Docker',
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300"
            >
              <span className="font-medium text-gray-800 dark:text-gray-200">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center mb-10">
          Here are some of my recent works. Each project represents my dedication to creating clean,
          efficient, and user-focused applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample project cards */}
          {[
            {
              id: 1,
              title: 'E-commerce Platform',
              description:
                'A full-stack e-commerce solution with product catalog, cart, and payment processing.',
              tags: ['React', 'Node.js', 'MongoDB'],
            },
            {
              id: 2,
              title: 'Portfolio Website',
              description: 'A responsive portfolio website built with React and Tailwind CSS.',
              tags: ['React', 'Tailwind CSS', 'Framer Motion'],
            },
            {
              id: 3,
              title: 'Task Management App',
              description: 'A collaborative task management app with real-time updates.',
              tags: ['React', 'Firebase', 'Material UI'],
            },
          ].map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg font-medium">
                Project Preview
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/projects#project-${project.id}`}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center"
                >
                  View Details
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
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button as={Link} to="/projects" variant="outline">
            View All Projects
          </Button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 rounded-xl">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            I'm a full-stack developer with a passion for creating clean, efficient, and
            user-friendly web applications. With experience in both front-end and back-end
            development, I enjoy building complete solutions from concept to deployment.
          </p>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            My journey in web development started with a curiosity about how websites work, which
            led me to dive deep into the world of programming. I'm constantly learning new
            technologies and techniques to improve my craft.
          </p>
          <div className="text-center">
            <Button as={Link} to="/about">
              Learn More About Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
