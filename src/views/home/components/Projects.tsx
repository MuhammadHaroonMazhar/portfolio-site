import Carousel from "components/carousel/Carousel";
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    description:
      "A modern web application that showcases real-time data visualization and interactive user interfaces. Features include dynamic charting, user authentication, and responsive design.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
    ],
    image: "./project1.gif",
    projectUrl: "https://project-alpha.demo",
  },
  {
    id: 2,
    title: "Digital Hub",
    description:
      "A comprehensive digital platform for content management and collaboration. Enables teams to work together efficiently with features like real-time editing, version control, and automated workflows.",
    technologies: ["GraphQL", "PostgreSQL", "Redis", "AWS", "Docker"],
    image: "./project2.gif",
    projectUrl: "https://digital-hub.demo",
  },
  {
    id: 3,
    title: "Smart Analytics",
    description:
      "An analytics dashboard that provides insights and visualizations for business metrics. Features include customizable widgets, data export, and automated reporting.",
    technologies: ["Vue.js", "Python", "FastAPI", "TensorFlow", "D3.js"],
    image: "./project3.gif",
    projectUrl: "https://analytics.demo",
  },
  {
    id: 4,
    title: "EcoTrack",
    description:
      "An environmental monitoring platform that helps organizations track and reduce their carbon footprint through data-driven insights.",
    technologies: ["React", "Node.js", "MongoDB", "Material UI"],
    image: "./project4.gif",
    projectUrl: "https://eco-track.demo",
  },
  {
    id: 5,
    title: "CloudSync",
    description:
      "A cloud storage solution with advanced file management capabilities, sharing features, and automated backup systems.",
    technologies: ["React", "TypeScript", "Node.js", "AWS S3", "Redis"],
    image: "./project5.gif",
    projectUrl: "https://cloudsync.demo",
  },
  {
    id: 6,
    title: "TaskMaster",
    description:
      "A project management tool that helps teams organize tasks, track progress, and collaborate effectively.",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
    image: "./project6.gif",
    projectUrl: "https://taskmaster.demo",
  },
  {
    id: 7,
    title: "ConnectHub",
    description:
      "A real-time communication platform with video conferencing and chat features",
    technologies: ["React", "WebRTC", "Socket.io", "Node.js"],
    image: "./project7.gif",
    projectUrl: "https://connecthub.demo",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  const handleSlideChange = (index: number) => {
    setActiveProject(projects[index]);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-heading-2 text-center mb-12">
            Portfolio Projects
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="aspect-[16/9] w-full max-h-[400px] bg-black/20 rounded-lg overflow-hidden">
            <Carousel onSlideChange={handleSlideChange}>
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="relative group w-full h-full flex-shrink-0 flex items-center justify-center bg-black/20"
                >
                  <div className="relative w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain [animation-play-state:paused] group-hover:[animation-play-state:running]"
                      style={{
                        WebkitUserSelect: "none",
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            key={activeProject.id}
            className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>
            <p className="text-gray-300 mb-4">{activeProject.description}</p>
            <div className="flex flex-wrap gap-2">
              {activeProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
