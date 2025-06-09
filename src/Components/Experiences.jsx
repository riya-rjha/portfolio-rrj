/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, Award, Building2 } from "lucide-react";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      title: "CodeChef ABESEC Chapter",
      position: "Development Lead",
      duration: "Jul 2024 - Present · 1 yr",
      skills: "Web Development",
      company: "CODECHEF",
      type: "Leadership Role",
    },
    {
      id: 2,
      title: "CodeChef ABESEC Chapter",
      position: "Development Coordinator",
      duration: "Oct 2023 - Jul 2024 · 10 mos",
      skills: "Public Speaking and Development",
      company: "CODECHEF",
      type: "Coordination",
    },
    {
      id: 3,
      title: "GeeksforGeeks",
      position: "Freelance Technical Writer",
      duration: "May 2024 - Oct 2024 · 6 mos",
      skills: "Web Design, UI/UX",
      company: "GFG",
      type: "Freelance",
    },
    {
      id: 4,
      title: "GeeksforGeeks",
      position: "Technical Content Writing Intern",
      duration: "Nov 2023 - Apr 2024 · 6 mos",
      skills: "Web Design, Front-End Development",
      company: "GFG",
      type: "Internship",
    },
  ];

  // Refs for scroll-triggered animations
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Individual card animation component
  const ExperienceCard = ({ experience, index }) => {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, {
      once: true,
      margin: "-50px",
      amount: 0.3,
    });

    return (
      <motion.div
        ref={cardRef}
        initial="hidden"
        animate={isCardInView ? "visible" : "hidden"}
        variants={itemVariants}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
        className="relative"
      >
        {index !== experiences.length - 1 && (
          <div className="absolute left-4 sm:left-6 top-20 w-full h-12 sm:h-16  z-0"></div>
        )}

        <div className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 min-h-58">
          <div className="absolute -left-0 sm:-left-6 top-4 sm:top-6 w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full border-2 sm:border-4 border-gray-900 group-hover:bg-purple-400 transition-colors duration-300"></div>

          <div className="flex bg-transparent flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-3">
            <div className="flex-1 bg-transparent min-w-0">
              <div className="flex bg-transparent items-start mb-2">
                <h3 className="text-lg bg-transparent relative left-5 sm:text-xl font-bold text-white leading-tight">
                  {experience.title}
                </h3>
              </div>
              <h4 className="text-base sm:text-lg bg-transparent text-purple-300 font-semibold mb-2 pl-6">
                {experience.position}
              </h4>
            </div>

            <div className="lg:ml-4 bg-transparent flex-shrink-0">
              <span
                className={`inline-flex bg-transparent items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium border ${getTypeColor(
                  experience.type
                )}`}
              >
                <Award className="w-3 h-3 bg-transparent sm:w-4 sm:h-4 mr-1" />
                <span className="truncate bg-transparent">
                  {experience.type}
                </span>
              </span>
            </div>
          </div>

          <div className="flex bg-transparent items-center text-gray-300 -mt-3 mb-3 pl-6">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
            <span className="text-xs bg-transparent sm:text-sm">
              {experience.duration}
            </span>
          </div>

          <div className="flex bg-transparent  flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pl-6">
            <div className="flex  bg-transparent items-start sm:items-center flex-wrap">
              <span className="text-xs bg-transparent sm:text-sm font-medium text-gray-400 mr-2 flex-shrink-0">
                Skills:
              </span>
              <span className="text-xs sm:text-sm text-purple-300 bg-purple-500/10 px-2 py-1 sm:px-3 sm:py-1 rounded-full border border-purple-500/20 break-words">
                {experience.skills}
              </span>
            </div>

            <div className="text-left p-2 sm:text-right rounded-full text-white font-semibold">
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                {experience.company}
              </span>
            </div>
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-violet-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </motion.div>
    );
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Leadership Role":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Coordination":
        return "bg-violet-500/20 text-violet-300 border-violet-500/30";
      case "Freelance":
        return "bg-indigo-500/20 text-indigo-300 border-indigo-500/30";
      case "Internship":
        return "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30";
      default:
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
    }
  };

  return (
    <div className=" py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 underline uppercase via-violet-400 to-purple-300 bg-clip-text -mt-4 text-transparent">
              Experiences
            </h1>
          </div>
          <p className="text-gray-300 text-base sm:text-lg lg:text-lg max-w-2xl mx-auto px-4">
            My professional journey and contributions across various
            organizations
          </p>
        </motion.div>

        <div className="-mt-6 grid grid-cols-2 gap-8 items-center">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
