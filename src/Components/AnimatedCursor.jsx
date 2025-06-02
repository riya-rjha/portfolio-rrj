/* eslint-disable no-unused-vars */
// CustomCursor.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-purple-500 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePos.x - 8,
          y: mousePos.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
        }}
      />
    </>
  );
};

export default CustomCursor;
