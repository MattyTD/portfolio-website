import React from 'react';
import Button from '../components/ui/Button';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section id="hero" className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Hello, I'm [Your Name]</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          I'm a passionate web developer specializing in building modern and responsive web applications.
        </p>
        <div className="flex justify-center gap-4">
          <Button as="a" href="/projects" size="lg">View Projects</Button>
          <Button as="a" href="/contact" size="lg" variant="outline">Contact Me</Button>
        </div>
      </section>
      
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample project cards */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Brief description of this amazing project and the technologies used.
                </p>
                <Button as="a" href={`/projects#project-${item}`} size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button as="a" href="/projects" variant="outline">
            View All Projects
          </Button>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900 -mx-4 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="text-center mt-6">
            <Button as="a" href="/about">Learn More About Me</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 