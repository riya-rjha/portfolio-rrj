import React from "react";
import bgImage from "../Images/bg.png";
import { ReactTyped } from "react-typed";

const Main = () => (
  <main className="text-center bg-white">
    <div className="flex items-center justify-around">
      <div className="flex-flex-col items-start p-10">
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold my-2 md:my-4 text-orange-500 flex items-start justify-center flex-col">
          <span className="mt-2">I'm Riya Ranjan Jha,</span>
          <br />{" "}
          <span className="text-black -mt-8 mb-6 dark:text-white">
            <ReactTyped
              strings={[
                "Frontend Web Developer",
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
        <p className="mb-4 text-lg text-left ">
          A Java programmer with a passion for learning and
          a positive attitude, I have experience in design and
          development & am currently expanding my skillset by exploring UI/UX
          design and Next.js. Programming ignites the innovation in me & my
          Technical Content Writing skill lights the way. With countless errors
          in my codes, I am always ready to embrace the challenges my
          programming journey brings for me!
        </p>
      </div>
      <img src={bgImage} className="w-[350px] h-[350px] rounded-full border-orange-600 border-8" />
    </div>
  </main>
);

export default Main;
