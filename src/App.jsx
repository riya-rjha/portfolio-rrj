import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Articles from "./Components/Articles";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AboutUs from "./Components/About";

const App = () => (
  <div className="font-sans bg-gray-100">
    <Header />
    <Main />
    <AboutUs />
    <Projects />
    <Experience />
    <Articles />
    <Contact />
    <Footer />
  </div>
);

export default App;
