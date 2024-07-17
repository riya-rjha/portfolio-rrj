import React from "react";
import bgImage from "../Images/bg.png";

const Main = () => (
  <main className="text-center p-4 md:p-8 ">
    <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold my-2 md:my-4 text-orange-500 flex items-center justify-center flex-col">
      <span className="mt-2">I'm Riya Ranjan Jha,</span>
      <br /> <span className="text-black -mt-8 mb-6 dark:text-white">Front End Developer</span>
    </h1>
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="text-4xl head-ing">"</h1>
        <div className="bg-gray-200 text-black p-4 rounded-md text-center lg:text-left">
          Explore my{" "}
          <a
            href="https://www.linkedin.com/in/riya-ranjan-jha-751688249/"
            target="_blank"
          >
            <span className="font-black text-blue-800 hover:underline">LinkedIn</span>
          </a>{" "}
          profile for a comprehensive Portfolio featuring my projects in various
          domains & achievements. Let's connect on LinkedIn for collaborations!
        </div>
        <h1 className="text-4xl head-ing-2 mt-3">"</h1>
      </div>
      <img
        src={bgImage}
        className="rounded-full m-auto w-40 h-40 sm:w-60 sm:h-60 shadow-2xl"
        alt="Profile"
      />

      <div className="flex flex-col items-center lg:items-end">
        <h1 className="text-4xl head-ing">"</h1>
        <div className="bg-gray-200 text-black p-4 rounded-md text-center lg:text-right">
          Hey there! This is your proof reading wizard, an extensive coder with
          development maestros & a figmatic touch of UI & UX in every field & a
          lot of codes . Let's connect on{" "}
          <a href="https://x.com/RiyaJha25892" target="_blank">
            <span className="font-black text-blue-800 hover:underline">Twitter</span>
          </a>{" "}
          for more opportunities!
        </div>
        <h1 className="text-4xl head-ing-2 mt-3">"</h1>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-between mt-4 space-y-2 md:space-y-0 md:space-x-4">
      <a
        href="https://drive.google.com/file/d/1Xw2xbtsP8I8_NiQ1GbhDdyoymxeTSw13/view?usp=sharing"
        target="_blank"
      >
        <button className="bg-orange-500 text-white py-3 px-8 text-xl rounded hover:bg-orange-700 transition delay-75 dark:hover:bg-orange-600">
          Portfolio
        </button>
      </a>
      <a href="https://www.linkedin.com/in/riya-ranjan-jha-751688249/" target="_blank">
        <button className="bg-gray-900 text-white py-3 px-8 text-xl rounded hover:bg-gray-600  transition delay-75 dark:bg-gray-700 dark:hover:bg-gray-600">
          Hire me
        </button>
      </a>
    </div>
  </main>
);

export default Main;
