import React from 'react';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            {/* Replace with your profile image */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
              Profile Image
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Hello, I'm [Your Name]</h2>
            <p className="mb-4">
              I'm a passionate web developer with expertise in building modern, responsive, and user-friendly
              web applications. My journey in web development started [your background story].
            </p>
            <p>
              I enjoy working with the latest technologies to create efficient, scalable, and maintainable
              solutions that solve real-world problems.
            </p>
          </div>
        </div>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'React', 'TypeScript', 'JavaScript', 'HTML/CSS',
              'Node.js', 'Express', 'MongoDB', 'SQL',
              'Git', 'Docker', 'AWS', 'Tailwind CSS'
            ].map((skill) => (
              <div 
                key={skill} 
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-8">
            {[
              {
                role: 'Senior Frontend Developer',
                company: 'Example Company',
                period: '2020 - Present',
                description: 'Led development of key product features and mentored junior developers.'
              },
              {
                role: 'Frontend Developer',
                company: 'Another Corp',
                period: '2018 - 2020',
                description: 'Developed responsive web applications using React and TypeScript.'
              },
              {
                role: 'Web Developer Intern',
                company: 'Startup Inc',
                period: '2017 - 2018',
                description: 'Assisted in developing and maintaining client websites and web applications.'
              }
            ].map((job, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-1">
                <h3 className="text-xl font-bold">{job.role}</h3>
                <p className="text-gray-600 dark:text-gray-300">{job.company} | {job.period}</p>
                <p className="mt-2">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            {[
              {
                degree: 'Bachelor of Science in Computer Science',
                school: 'University Example',
                year: '2014 - 2018'
              },
              {
                degree: 'Full Stack Web Development Bootcamp',
                school: 'Coding Academy',
                year: '2017'
              }
            ].map((edu, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-4 py-1">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p>{edu.school} | {edu.year}</p>
              </div>
            ))}
          </div>
        </section>
        
        <div className="text-center">
          <Button as="a" href="/contact" size="lg">Get In Touch</Button>
        </div>
      </div>
    </div>
  );
};

export default About; 