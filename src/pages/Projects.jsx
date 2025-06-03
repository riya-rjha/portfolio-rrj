// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import HorizontalScroll from "../components/HorizontalScroll";
import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/Projects.js";

const Projects = () => {
  const [index, setIndex] = useState(0);
  const projectsRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      console.log(
        "Scroll detected:",
        e.deltaY,
        "Current index:",
        index,
        "Is scrolling:",
        isScrolling
      );

      if (isScrolling) {
        console.log("Blocked - already scrolling");
        return;
      }

      // Scrolling down
      if (e.deltaY > 0) {
        if (index < projects.length - 1) {
          console.log("Going to next project");
          e.preventDefault();
          setIsScrolling(true);
          setIndex((prev) => prev + 1);
        } else {
          console.log("At last project - allowing normal scroll");
          // Don't prevent default - allow normal page scroll
        }
      }
      // Scrolling up
      else if (e.deltaY < 0) {
        if (index > 0) {
          console.log("Going to previous project");
          e.preventDefault();
          setIsScrolling(true);
          setIndex((prev) => prev - 1);
        } else {
          console.log("At first project - allowing normal scroll");
          // Don't prevent default - allow normal page scroll
        }
      }
    };

    const projectsElement = projectsRef.current;

    if (projectsElement) {
      projectsElement.addEventListener("wheel", handleScroll, {
        passive: false,
      });
      console.log("Event listener added");
    }

    return () => {
      if (projectsElement) {
        projectsElement.removeEventListener("wheel", handleScroll);
        console.log("Event listener removed");
      }
    };
  }, [index, isScrolling]);

  // Reset scrolling flag after animation
  useEffect(() => {
    if (isScrolling) {
      const timer = setTimeout(() => {
        setIsScrolling(false);
        console.log("Scroll flag reset");
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isScrolling]);

  console.log(
    "Component rendered - Current index:",
    index,
    "Total projects:",
    projects.length
  );

  return (
    <div
      ref={projectsRef}
      className="min-h-screen bg-black overflow-hidden relative"
      style={{ scrollBehavior: "auto" }}
    >
      <div className="flex items-center justify-center pt-32 pb-16">
        <AnimatePresence mode="wait">
          <ProjectCard key={index} project={projects[index]}></ProjectCard>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center pb-8">
        <div className="flex space-x-2">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-purple-500 scale-125" : "bg-purple-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <HorizontalScroll></HorizontalScroll>
      </div>
    </div>
  );
};

export default Projects;
