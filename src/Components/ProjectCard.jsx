/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="flex w-[90%] max-w-6xl gap-12 items-center justify-between bg-gray-900 p-8 rounded-2xl border border-purple-900 shadow-2xl"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex-1 space-y-6 bg-transparent">
        <h2 className="text-4xl font-bold text-white leading-tight bg-transparent">
          {project.title}
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed bg-transparent">
          {project.description}
        </p>
        <div className="flex items-center space-x-6 bg-transparent">
          <a
            href={project.github}
            target="_blank"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            className="bg-white  text-purple-800 border-2 border-purple-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Live Demo
          </a>
        </div>
        <div className="inline-block bg-purple-900 bg-opacity-50 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
          {project.tech}
        </div>
      </div>

      <div className="flex-1">
        <div className="relative overflow-hidden rounded-xl border-2 border-purple-800 shadow-2xl">
          <img
            src={project.img}
            className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
            alt={project.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
