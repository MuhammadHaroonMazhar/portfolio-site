import { motion } from "framer-motion";

const WorkExperience = () => {
  interface WorkExperience {
    company: string;
    logo: string;
    role: string;
    duration: string;
    description: string[];
  }

  const workExperiences: WorkExperience[] = [
    {
      company: "AveroX",
      logo: "../../../../public/company1-logo.png",
      role: "Front end Developer || DevOps",
      duration: "Jul 2024 - Present",
      description: [
        "Develop and maintain both client-side and server-side applications, ensuring seamless integration and optimal performance. ",
        "Work with a wide range of technologies including React,Node.js etc. to create scalable and efficient solutions.",
        "Design and implement responsive user interfaces that provide an exceptional user experience across various devices and platforms.",
      ],
    },
    {
      company: "Sofit Consultancy Pvt Ltd",
      logo: "../../../../public/company2-logo.png",
      role: "Front end Developer",
      duration: "Mar 2023 - Jun 2024",
      description: [
        "Specialize in crafting innovative and interactive elements that captivate users and enhance their digital experience.",
        "everage cutting-edge technologies to design and develop seamless, fast, and efficient business solutions that drive success. ",
        "Commit to continuous learning and staying ahead of industry trends, adopting the latest advancements in technology.",
      ],
    },
    {
      company: "National Telecom Corporation",
      logo: "../../../../public/company3-logo.png",
      role: "Software Engineer",
      duration: "May 2022 - Feb 2023",
      description: [
        "Developed and maintained a b2b ecommerce",
        "Implemented responsive designs and REST APIs",
        "Worked with agile methodologies in fast-paced environment",
      ],
    },
    {
      company: "Online Projects",
      logo: "./freelance-logo.png",
      role: "Web Developer",
      duration: "2019 - 2020",
      description: [
        "Developed custom websites and web applications for various clients",
        "Managed project timelines and client communications effectively",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-heading-2 text-center mb-12">Work Experience</h2>

      <div className="relative">
        <div className="hidden lg:block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-0.5 lg:h-full lg:bg-slate-700" />

        {workExperiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative md:grid md:grid-cols-2 gap-8 mb-16"
          >
            <div className="hidden lg:block absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 bg-slate-700 rounded-full border-4 border-slate-900 z-10" />

            {index % 2 === 0 ? (
              <>
                <div className="md:pr-12">
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-xl font-semibold text-slate-200">
                        {experience.company}
                      </h3>
                      <img
                        src={experience.logo}
                        alt={experience.company}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-slate-300">{experience.role}</p>
                      <p className="text-slate-400 text-sm">
                        {experience.duration}
                      </p>
                      <ul className="text-slate-400 text-sm space-y-1 list-disc pl-4">
                        {experience.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div></div>
              </>
            ) : (
              <>
                <div></div>
                <div className="md:pl-12">
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-xl font-semibold text-slate-200">
                        {experience.company}
                      </h3>
                      {/* <img
                        src={experience.logo}
                        alt={experience.company}
                        className="w-13 h-20 object-contain"
                      /> */}
                    </div>
                    <div className="space-y-2">
                      <p className="text-slate-300">{experience.role}</p>
                      <p className="text-slate-400 text-sm">
                        {experience.duration}
                      </p>
                      <ul className="text-slate-400 text-sm space-y-1 list-disc pl-4">
                        {experience.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
