import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDownload,
  FaBriefcase,
  FaImage,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Profile from "../../assets/profile-placeholder.jpg";
import resume from "../../assets/resume-placeholder.pdf";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const workExpRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = Profile;
  //   img.onload = () => setImageLoaded(true);
  // }, []);

  const handleWorkExpInView = () => {
    workExpRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectsInView = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactMeInView = () => {
    contactMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <section className="container-padding max-w-7xl mx-auto py-20 min-h-[90vh] flex items-center">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex justify-center relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"
              />
              <div className="relative rounded-2xl overflow-hidden bg-gray-900">
                <LazyLoadImage
                  src={Profile}
                  alt="John Doe - Front end Developer"
                  effect="blur"
                  className={`w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition duration-700 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  afterLoad={() => setImageLoaded(true)}
                  width={320}
                  height={320}
                  threshold={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="absolute -z-10 w-full h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg max-h-lg"
              >
                <div className="w-full h-full rounded-full bg-blue-500 blur-3xl" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                Hi, I'm Haroon
              </h1>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-heading-3 text-slate-300 text-2xl md:text-3xl"
            >
              Front end Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-slate-400 text-lg leading-relaxed"
            >
              A front-end developer with several years of industry experience in
              building modern web solutions. I specialize in creating
              responsive, user-friendly interfaces, seamless user experiences,
              and efficient integration with backend services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex items-center gap-4 pt-4"
            >
              <a
                href="https://calendly.com/johndoe/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Book a Call
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="text-slate-400 pt-6"
            >
              Actively using latest technologies like:
            </motion.p>

            <div className="flex flex-wrap gap-4 items-center">
              <FaReact
                className="w-8 h-8 text-blue-400 hover:text-blue-300 transition-colors animate-float"
                title="React"
              />
              {/* <SiTypescript
                className="w-8 h-8 text-blue-500 hover:text-blue-400 transition-colors animate-float [animation-delay:200ms]"
                title="TypeScript"
              /> */}
              <SiTailwindcss
                className="w-8 h-8 text-cyan-400 hover:text-cyan-300 transition-colors animate-float [animation-delay:400ms]"
                title="Tailwind CSS"
              />
              <FaNodeJs
                className="w-8 h-8 text-green-500 hover:text-green-400 transition-colors animate-float [animation-delay:600ms]"
                title="Node.js"
              />
              {/* <FaPython
                className="w-8 h-8 text-yellow-300 hover:text-yellow-200 transition-colors animate-float [animation-delay:800ms]"
                title="Python"
              /> */}
              <SiMongodb
                className="w-8 h-8 text-green-500 hover:text-green-400 transition-colors animate-float [animation-delay:1000ms]"
                title="MongoDB"
              />
              <SiMysql
                className="w-8 h-10 text-slate-400 hover:text-slate-300 transition-colors animate-float [animation-delay:1200ms]"
                title="MySQL"
              />
              {/* <SiNextdotjs
                className="w-8 h-8 text-white hover:text-gray-200 transition-colors animate-float [animation-delay:1400ms]"
                title="Next.js"
              /> */}
              <FaDocker
                className="w-8 h-8 text-blue-400 hover:text-blue-300 transition-colors animate-float [animation-delay:1600ms]"
                title="Docker"
              />
              <FaAws
                className="w-8 h-8 text-yellow-500 hover:text-yellow-400 transition-colors animate-float [animation-delay:1800ms]"
                title="AWS"
              />
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-2 pt-4">
              <button
                onClick={handleWorkExpInView}
                className="relative px-4 py-3 bg-transparent border border-slate-700 rounded-lg font-medium overflow-hidden group"
              >
                <span className="relative z-10 text-slate-200 group-hover:text-white duration-500 inline-flex items-center gap-2">
                  <FaBriefcase className="w-4 h-4" />
                  Work Experience
                </span>
                <div className="absolute inset-0 bg-slate-700 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
              </button>
              <button
                onClick={handleProjectsInView}
                className="relative px-4 py-3 bg-transparent border border-slate-700 rounded-lg font-medium overflow-hidden group"
              >
                <span className="relative z-10 text-slate-200 group-hover:text-white duration-500 inline-flex items-center gap-2">
                  <FaImage className="w-4 h-6" />
                  Projects
                </span>
                <div className="absolute inset-0 bg-slate-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
              </button>
              <button
                onClick={handleContactMeInView}
                className="relative px-4 py-3 bg-transparent border border-slate-700 rounded-lg font-medium overflow-hidden group"
              >
                <span className="relative z-10 text-slate-200 group-hover:text-white duration-500 inline-flex items-center gap-1">
                  <MdEmail className="w-4 h-4" />
                  Contact Me
                </span>
                <div className="absolute inset-0 bg-slate-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </button>
              <button
                className="relative px-4 py-3 bg-transparent border border-slate-700 rounded-lg font-medium overflow-hidden group"
                onClick={() => window.open(resume)}
              >
                <span className="relative z-10 text-slate-200 group-hover:text-white duration-500 inline-flex items-center gap-2">
                  <FaDownload className="w-4 h-4" />
                  Resume
                </span>
                <div className="absolute inset-0 bg-slate-700 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="container-padding max-w-7xl mx-auto py-20"
        ref={workExpRef}
      >
        <WorkExperience />
      </section>

      <section
        className="container-padding max-w-7xl mx-auto py-20"
        ref={projectsRef}
      >
        <Projects />
      </section>

      <section
        className="container-padding max-w-7xl mx-auto py-20"
        ref={contactMeRef}
      >
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
