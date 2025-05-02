export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with product listing, cart functionality, user authentication, and payment processing.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    imageUrl: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality, labels, due dates, and team collaboration features.",
    technologies: ["React", "TypeScript", "Redux", "Firebase"],
    imageUrl: "/projects/taskmanager.jpg",
    githubUrl: "https://github.com/yourusername/taskmanager",
    liveUrl: "https://taskmanager-demo.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current conditions and forecasts based on location, with interactive charts and maps.",
    technologies: ["JavaScript", "Chart.js", "OpenWeatherMap API", "Mapbox"],
    imageUrl: "/projects/weather.jpg",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.com"
  }
];

export default projects; 