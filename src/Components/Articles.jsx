/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { wrap } from "popmotion";

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
    y: 30,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.1,
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
      delay: 0.8 + delay,
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

// Heading animation variants with scroll trigger
const headingVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    scale: 0.8,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// Underline animation variants
const underlineVariants = {
  hidden: {
    width: 0,
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    width: "100px",
    opacity: 1,
    scaleX: 1,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Articles = ({ tech, category }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const articleIndex = wrap(0, tech.length, page);

  // Refs for scroll detection
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  // Use InView hooks for scroll-triggered animations
  const isHeadingInView = useInView(headingRef, {
    once: true,
    threshold: 0.3,
    margin: "-100px 0px -100px 0px",
  });

  const isContainerInView = useInView(containerRef, {
    once: true,
    threshold: 0.1,
    margin: "-50px 0px -50px 0px",
  });

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleReadClick = (url) => {
    window.open(url, "_blank");
  };

  const getCategoryTitle = () => {
    switch (category) {
      case "tech":
        return "Technical Articles";
      case "general":
        return "General Knowledge";
      case "figma":
        return "Figma Designing";
      default:
        return "Web Design";
    }
  };

  const categoryComponent = (article, nextIndex, i) => {
    return (
      <motion.div
        key={nextIndex}
        custom={i}
        initial="hidden"
        animate={isContainerInView ? "visible" : "hidden"}
        variants={articleCardVariants}
        className="flex flex-col h-full bg-white/5 rounded-xl overflow-hidden border border-white/10 p-4 backdrop-blur-sm"
      >
        <div className="w-full overflow-hidden rounded-lg">
          <motion.img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 min-h-[18rem]"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={
              isContainerInView
                ? { scale: 1, opacity: 1 }
                : { scale: 1.1, opacity: 0 }
            }
            transition={{
              delay: 0.3 + i * 0.1,
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        </div>

        <div className="flex flex-col justify-between flex-grow mt-4 space-y-3">
          <div className="space-y-2 bg-transparent">
            <motion.h2
              custom={0}
              initial="hidden"
              animate={isContainerInView ? "visible" : "hidden"}
              variants={contentVariants}
              className="text-base md:text-lg font-semibold text-white line-clamp-2 bg-transparent"
            >
              {article.title}
            </motion.h2>

            <motion.p
              custom={1}
              initial="hidden"
              animate={isContainerInView ? "visible" : "hidden"}
              variants={contentVariants}
              className="text-gray-300 text-xs md:text-sm line-clamp-4 bg-transparent"
            >
              {article.description}
            </motion.p>
          </div>

          <motion.button
            custom={i * 0.1}
            initial="hidden"
            animate={isContainerInView ? "visible" : "hidden"}
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            onClick={() => handleReadClick(article.url)}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md self-start w-full"
          >
            Read Article
          </motion.button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div className="relative">
          <div
            ref={headingRef}
            style={
              getCategoryTitle() === "Technical Articles"
                ? { marginTop: "5rem" }
                : undefined
            }
          >
            <motion.p
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              variants={headingVariants}
              className="text-4xl md:text-4xl lg:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent mb-4 tracking-tight leading-tight uppercase text-center"
            >
              {getCategoryTitle()}
            </motion.p>

            <motion.div
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              variants={underlineVariants}
              className="h-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 mx-auto rounded-full shadow-lg shadow-purple-500/30"
            />
          </div>

          <div className="flex justify-center items-center" ref={containerRef}>
            <motion.div
              className="relative w-full max-w-6xl overflow-hidden rounded-2xl mt-6"
              initial={{ opacity: 0, y: 50 }}
              animate={
                isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
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
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-full backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-4"
                >
                  {[0, 1, 2].map((offset, i) => {
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

              {/* Navigation buttons with improved animations */}
              <motion.button
                onClick={() => paginate(-3)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-xl font-bold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl z-10 flex items-center justify-center rotate-180 cursor-none"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255,255,255,0.4)",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isContainerInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                ‣
              </motion.button>
              <motion.button
                onClick={() => paginate(3)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-xl font-bold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl z-10 flex items-center justify-center cursor-none"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255,255,255,0.4)",
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isContainerInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: 20 }
                }
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                ‣
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
