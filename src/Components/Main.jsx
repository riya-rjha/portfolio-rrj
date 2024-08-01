import React from "react";
import bgImage from "../Images/bg.png";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 100,
  easing: "ease-out",
  once: true,
});

const Main = () => (
  <main className="text-center bg-[url('https://img.freepik.com/free-vector/monochromatic-hand-painted-background-with-drawn-nature-elements_52683-63007.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid')] dark:bg-[url('https://img.freepik.com/premium-photo/dark-background-with-silver-blue-pattern-with-words-blue-moon-it_1290686-20842.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid')] bg-no-repeat bg-cover bg-center  flex flex-col justify-center">
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 md:px-8 lg:px-16 py-8">
      <div
        className="flex flex-col items-center lg:items-start p-4 lg:p-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-4 text-purple-800 dark:text-purple-600 flex flex-col items-center lg:items-start">
          <span className="mt-2">I'm Riya Ranjan Jha,</span>
          <br />
          <span className="text-black -mt-2 mb-6 dark:text-white">
            <ReactTyped
              strings={[
                "Frontend Web Developer",
                "Backend Web Developer",
                "Technical Content Writer",
                "Prompt Engineer",
                "UI Designer",
                "UX Designer",
              ]}
              typeSpeed={100}
              loop
            />
          </span>
        </h1>
        <p className="text-black dark:text-white sm:text-lg text-center lg:text-left">
          A Java programmer with a passion for learning and a positive attitude,
          I have experience in design and development & am currently expanding
          my skillset by exploring UI/UX design and Next.js. Programming ignites
          the innovation in me & my Technical Content Writing skill lights the
          way. With countless errors in my codes, I am always ready to embrace
          the challenges my programming journey brings for me!
        </p>
      </div>
      <img
        src={bgImage}
        data-aos="zoom-out-up"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-[350px] lg:h-[350px] rounded-full border-4 lg:border-8 border-purple-800 mt-8 lg:mt-0"
      />
    </div>
  </main>
);

export default Main;
