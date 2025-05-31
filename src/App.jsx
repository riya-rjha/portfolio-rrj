import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import { motion, useScroll } from "motion/react";
import Skills from "./pages/Skills";
import Articles from "./pages/Articles";
import Designs from "./pages/Designs"
import Projects from "./pages/Projects"

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Routes>
        {/* <motion.div
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            originX: 0,
            backgroundColor: "#aa49ff",
          }}
        /> */}
        <Route path="/" element={<Hero />}></Route>
        <Route path="/skill" element={<Skills />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/design" element={<Designs />}></Route>
        <Route path="/projects" element={<Projects />}></Route>

      </Routes>
    </>
  );
};

export default App;
