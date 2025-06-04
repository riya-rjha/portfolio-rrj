import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projects from "../data/Projects.js";
import HorizontalScroll from "../components/HorizontalScroll.jsx";

const Projects = () => {
  return (
    <div className="mt-10 px-6 py-24">
      <motion.div
        className="max-w-7xl mx-auto space-y-24"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <motion.div
              className={`flex items-center gap-12 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              } lg:flex-row flex-col `}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Project Info */}
              <motion.div
                className="flex-1 space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -50,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <motion.h2 className="text-2xl underline font-bold text-white">
                  {project.title}
                </motion.h2>

                <motion.p
                  className="text-purple-100 text-md leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {project.tech.split(" + ").map((tag, tagIndex) => (
                    <React.Fragment key={tagIndex}>
                      <motion.span
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full"
                        custom={tagIndex}
                        whileTap={{ scale: 0.9 }}
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 100,
                            scale: 0.8,
                          },
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                              duration: 0.8,
                              ease: "easeOut",
                            },
                          },
                        }}
                      >
                        {tag.trim()}
                      </motion.span>
                    </React.Fragment>
                  ))}
                </motion.div>

                <motion.div
                  className="flex gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#475569",
                      transition: { duration: 0.2 },
                    }}
                    whileTap="tap"
                  >
                    <ExternalLink size={18} className="bg-transparent" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm gap-2 bg-slate-700 text-purple-300 px-6 py-3 rounded-full font-semibold hover:bg-slate-600 transition-colors"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#475569",
                      transition: { duration: 0.2 },
                    }}
                    whileTap="tap"
                  >
                    <Github size={18} className="bg-transparent" />
                    Source Code
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex-1 max-w-lg"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 50,
                    scale: 0.8,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.2,
                    },
                  },
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-2xl"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div className="bg-slate-700 rounded-xl aspect-video flex items-center justify-center overflow-hidden">
                    <img src={project.img} className="bg-cover" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </React.Fragment>
        ))}
        <HorizontalScroll />
      </motion.div>
    </div>
  );
};

export default Projects;
