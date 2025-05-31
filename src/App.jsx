import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Skills from "./pages/Skills";
import Articles from "./pages/Articles";
import Designs from "./pages/Designs";
import Projects from "./pages/Projects";
import { motion, useScroll } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          transformOrigin: "left",
          backgroundColor: "#aa49ff",
          zIndex: 50,
        }}
      />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/design" element={<Designs />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
