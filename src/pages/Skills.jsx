// eslint-disable-next-line no-unused-vars
import React from "react";
import * as motion from "motion/react-client";
import { useRef } from "react";
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import skills from "../data/Skills.js";
import Experiences from "../Components/Experiences.jsx";

const Skills = () => {
  function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div className="parallax">
        <motion.div className="scroller" style={{ x }}>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-24 bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-purple-300 bg-clip-text underline -mt-4 uppercase mb-10 text-transparent">
        Skills
      </h1>
      <p className="-mt-8 mb-4 text-lg">
        My key skills & areas of expertise developed through various projects
      </p>

      <div className="grid grid-cols-2 mt-6 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="relative flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            whileHover={{
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="mb-3 p-2 rounded-lg bg-white/10 backdrop-blur-sm"
              whileHover={{
                rotateY: 180,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={skill.icon}
                alt={`${skill.name} Icon`}
                className="w-18 h-16 object-contain bg-transparent"
                onError={(e) => {
                  e.target.src =
                    "https://cdn-icons-png.freepik.com/256/919/919854.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid";
                }}
              />
            </motion.div>

            <span className="text-sm font-medium text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Floating background elements */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 0,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="w-full absolute bottom-0 z-10 mt-16 mb-16">
          <ParallaxText baseVelocity={-5}>SKILLS</ParallaxText>
          <ParallaxText baseVelocity={5}>EXPERIENCES</ParallaxText>
        </div>
      </div>
      <Experiences />
    </div>
  );
};

export default Skills;
