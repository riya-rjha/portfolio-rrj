/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
// import { tech } from "../data/Articles.js";

// Animation variants
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

// Enhanced article card variants
const articleCardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
    rotateX: -15,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Button animation variants
const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.6 + delay,
      duration: 0.5,
      ease: "easeOut",
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  }),
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

const Articles = ({ tech, category }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const articleIndex = wrap(0, tech.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleReadClick = (url) => {
    window.open(url, "_blank");
  };

  const categoryComponent = (article, nextIndex, i) => {
    return (
      <motion.div
        key={nextIndex}
        custom={i}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={articleCardVariants}
        className="flex flex-col h-full bg-white/5 rounded-xl overflow-hidden border border-white/10 p-4"
      >
        <div className="w-full h-[40rem] overflow-hidden">
          <motion.img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.3 + i * 0.1,
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        </div>

        <div className="flex flex-col justify-between mt-4 h-full">
          <div>
            <motion.h2
              custom={i}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="text-base md:text-lg font-semibold text-white mb-2 line-clamp-2"
            >
              {article.title}
            </motion.h2>

            <motion.p
              custom={i}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="text-gray-300 text-xs md:text-sm line-clamp-4 mb-3"
            >
              {article.description}
            </motion.p>
          </div>
          <motion.button
            custom={i * 0.1}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            onClick={() => handleReadClick(article.url)}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl self-start cursor-none"
          >
            Read Article
          </motion.button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto ">
        <motion.div className="relative">
          {category == "tech" ? (
            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -30, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
              className="text-4xl md:text-4xl lg:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent mb-4 tracking-tight leading-tight uppercase text-center"
            >
              Technical Articles
            </motion.p>
          ) : category == "general" ? (
            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -30, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
              className="text-4xl md:text-4xl lg:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent mb-4 tracking-tight leading-tight uppercase text-center"
            >
              General Knowledge
            </motion.p>
          ) : category == "figma" ? (
            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -30, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
              className="text-4xl md:text-4xl lg:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent mb-4 tracking-tight leading-tight uppercase text-center"
            >
              Figma Designing
            </motion.p>
          ) : (
            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -30, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
              className="text-4xl md:text-4xl lg:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent mb-4 tracking-tight leading-tight uppercase text-center"
            >
              Web Design
            </motion.p>
          )}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: {
                width: "100px",
                opacity: 1,
                transition: { delay: 0.5, duration: 0.6, ease: "easeOut" },
              },
            }}
            className="h-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 mx-auto rounded-full shadow-lg shadow-purple-500/30"
          />

          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-6xl h-[400px] overflow-hidden rounded-2xl mt-6">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-4"
                >
                  {[0, 1].map((offset, i) => {
                    const nextIndex = wrap(
                      0,
                      tech.length,
                      articleIndex + offset
                    );
                    const article = tech[nextIndex];
                    return categoryComponent(article, nextIndex, i);
                  })}
                </motion.div>
              </AnimatePresence>

              <button
                onClick={() => paginate(-1)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-xl font-bold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl z-10 flex items-center justify-center rotate-180 cursor-none"
              >
                ‣
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-xl font-bold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl z-10 flex items-center justify-center cursor-none"
              >
                ‣
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
