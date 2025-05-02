import React from 'react';
import ContactForm from '../components/sections/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Get In Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-6">
              Feel free to reach out to me using the contact form or through my social media profiles.
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-blue-600 dark:text-blue-400">
                  <a href="mailto:your.email@example.com">your.email@example.com</a>
                </p>
              </div>
              
              <div>
                <h3 className="font-bold">Location</h3>
                <p>City, Country</p>
              </div>
              
              <div>
                <h3 className="font-bold">Social Profiles</h3>
                <div className="flex space-x-4 mt-2">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Send Me a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 