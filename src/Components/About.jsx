import React from "react";
import bg from "../Images/image.png";

const AboutUs = () => {
  return (
    <section
      id="about"
      className=" text-black border-2 shadow-xl dark:shadow-white ho py-10 m-8 rounded-lg bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl all-headings text-center mb-8">About Me</h2>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8">
          <p>
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-lg text-type">
                I'm Riya Ranjan Jha, a Java programmer with a passion for
                learning and a positive attitude. While I have experience in
                design and development, I'm currently expanding my skillset by
                exploring UI/UX design and Next.js. Programming ignites the
                innovation in me & my Technical Content Writing skill lights the
                way. With countless errors in my codes, I am always ready to
                embrace the challenges my programming journey brings for me!
              </p>
            </div>
          </p>
          <p>
            <div className="flex justify-center">
              <img
                src={bg}
                className="rounded-lg shadow-lg w-[350px] h-[300px]"
              />
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
