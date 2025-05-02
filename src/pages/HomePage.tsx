import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactForm from '../components/sections/ContactForm';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <section id="hero" className="py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Hello, I'm [Your Name]</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm a passionate web developer specializing in building modern and responsive web applications.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">View Projects</Button>
            <Button size="lg" variant="outline">Contact Me</Button>
          </div>
        </section>
        
        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
        
        <ProjectsSection />
        
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage; 