import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  AOS.init({
    duration: 2000,
    easing: "ease-out",
    once: true,
  });

  return (
    <div className="p-4 dark:bg-[url('https://img.freepik.com/premium-photo/dark-background-with-silver-blue-pattern-with-words-blue-moon-it_1290686-20842.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid')] bg-no-repeat bg-cover mt-16  bg-[url('https://img.freepik.com/free-vector/monochromatic-hand-painted-background-with-drawn-nature-elements_52683-63007.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid')]">
      <h1 className="text-4xl font-bold light:mt-8 dark:mt-3 dark:mb-5 uppercase all-headings dark:text-white text-center ">
        SKILLS
      </h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-800 dark:text-gray-300 mb-4">
          Languages
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://cdn-icons-png.freepik.com/256/5968/5968292.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
              className="w-20 h-20"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              Javascript
            </div>
          </div>
          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://cdn-icons-png.freepik.com/256/5968/5968381.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
              className="w-20 h-20"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              Typescript
            </div>
          </div>
          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://cdn-icons-png.freepik.com/256/919/919854.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
              className="w-20 h-20"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              Java
            </div>
          </div>
          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://cdn-icons-png.freepik.com/256/5968/5968350.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
              className="w-20 h-20"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              Python
            </div>
          </div>
          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://cdn-icons-png.freepik.com/256/5968/5968267.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
              className="w-20 h-20"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              HTML
            </div>
          </div>
          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://cdn-icons-png.freepik.com/256/5968/5968242.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
              className="w-20 h-20"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              CSS
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-800 dark:text-gray-300 mb-4">
          Frameworks/Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://cdn-icons-png.freepik.com/256/15697/15697481.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
              className="w-20 h-20"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              React.js
            </div>
          </div>
          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
              className="w-20 h-20"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              Express.js
            </div>
          </div>

          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://camo.githubusercontent.com/77139e445a39e2e6587d0d5c9abc370550e18eb8a3159bb5519abc0369b26e80/68747470733a2f2f69636f6e2e69636570616e656c2e696f2f546563686e6f6c6f67792f7376672f4e6f64652e6a732e737667"
              className="w-20 h-20"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              Node.js
            </div>
          </div>
          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://camo.githubusercontent.com/0568e2de313626b2bd9b96f326941b012d45e9a4db1a23aa78bd8036207e57f8/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667"
              className="w-20 h-20 rounded-full"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              Tailwind
            </div>
          </div>
          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png"
              className="w-20 h-20"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              Figma
            </div>
          </div>
          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
              className="w-20 h-20"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              Git
            </div>
          </div>
          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://sarthak-portfolio.onrender.com/images%202/skills/github1.png"
              className="w-20 h-20"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              GitHub
            </div>
          </div>
          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://camo.githubusercontent.com/825bc22c1c4819762657b53f6491051ddc41482012d6fd8ae7b6b53776bf334e/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3435322f66697265626173652e706e67"
              className="w-20 h-20"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              Firebase
            </div>
          </div>
          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png"
              className="w-20 h-20"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              Postman
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-800 dark:text-gray-300 mb-4">
          Databases
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <div
            className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src="https://sarthak-portfolio.onrender.com/images%202/skills/mongodb.png"
              className="w-20 h-20"
            />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold" data-aos="zoom-in" >
              MongoDB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
