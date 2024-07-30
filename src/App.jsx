import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";

const App = () => (
  <div id="top" className="font-sans bg-[azure]">
    <a href="#top">
      <img
        src="https://cdn-icons-png.freepik.com/256/15992/15992789.png?ga=GA1.1.224769648.1717002388&semt=ais_hybrid"
        className="fixed w-16 bottom-5 right-5 z-50"
        alt="Scroll to top"
      />
    </a>
    <Header />
    <Main />
    <Experience />
    <Projects />
    <Articles />
    <Footer />
  </div>
);

export default App;
