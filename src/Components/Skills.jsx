import React from "react";
import {img} from './ImageLogo'

const Skills = () => {
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
          <div className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105">
            <img src="https://cdn-icons-png.freepik.com/256/5968/5968292.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid" className="w-20 h-20" />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold">
              Javascript
            </div>
          </div>
          <div className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105">
            <img src="https://cdn-icons-png.freepik.com/256/5968/5968381.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid" className="w-20 h-20" />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold">
              Typescript
            </div>
          </div>
          <div className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105">
            <img src="https://cdn-icons-png.freepik.com/256/919/919854.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid" className="w-20 h-20" />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold">
              Java
            </div>
          </div>
          <div className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105">
            <img src="https://cdn-icons-png.freepik.com/256/5968/5968350.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid" className="w-20 h-20" />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold">
              Python
            </div>
          </div>
          <div className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105">
            <img src="https://cdn-icons-png.freepik.com/256/5968/5968267.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid" className="w-20 h-20" />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold">
              HTML
            </div>
          </div>
          <div className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105">
            <img src="https://cdn-icons-png.freepik.com/256/5968/5968242.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid" className="w-20 h-20" />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold">
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
          <div className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105">
            <img src="https://cdn-icons-png.freepik.com/256/15697/15697481.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid" className="w-20 h-20" />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold">
              React.js
            </div>
          </div>
          <div className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105">
            <img src="https://sarthak-portfolio.onrender.com/images%202/skills/node.png" className="w-20 h-20" />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold">
              Express.js
            </div>
          </div>
        
          <div className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105">
            <img src={img} className="w-20 h-20" />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold">
              Node.js
            </div>
          </div>
          <div className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAiCAMAAAA9FerRAAAARVBMVEX///84vfgvu/gjufgSt/fu+P7U7v1oyflix/na8P2L1Pqj3PvK6v3y+v665PxIwfhyzPpWxPmx4fya2fuB0Prm9f4Asveh2y9VAAABXUlEQVQ4jZWV25aDIAxFSxJAEFG8zP9/6qRUWw2sSs+jZms45PJ4VDVEb0elxs5HXY+oyllCUFmA1JlWbqWd2lmyQxOXUAkBuAauA8mxKNxyCz7/UMC35EaAMK3TSPCV7CU4UXqZqD0JMp7CbBSc/vt8ygiTyL+jEhUnPH9Jq2u6MM4bP3aecJHgNQNJKuTCQK4NKM15fCebL2eokVQkWpMt6qiN42PjBUW4z/PQnNiTLKQ0VwK0M8ZV20+H3q+r70Pl7WyBkEVg57YuylrenZt7198TWZsS1gE2OeBEObd6PhQ3lW1fb0FueS5AlCUiyU1ygX3xMcRFzporORSGjXS0YBCFidMnSqMcko5OOXSyAY/pNpOSP/SXYphk13d9MGFRiHJWyDNLEl6+QZJcIUnux23YIHK65Yyb1keUV9q2AVjDeesANJc8S/cp9xh3Wep/WZBPbSYEU9TZW/80TwrZnrh1gAAAAABJRU5ErkJggg==" className="w-20 h-20 rounded-full" />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold">
              Tailwind
            </div>
          </div>
          <div className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105">
            <img src="https://sarthak-portfolio.onrender.com/images%202/skills/figma.png" className="w-20 h-20" />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold">
              Figma
            </div>
          </div>
          <div className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105">
            <img src="https://cdn-icons-png.freepik.com/256/4494/4494748.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid" className="w-20 h-20" />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold">
              Git
            </div>
          </div>
          <div className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105">
            <img src="https://sarthak-portfolio.onrender.com/images%202/skills/github1.png" className="w-20 h-20" />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold">
              GitHub
            </div>
          </div>
          <div className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABYElEQVR4Ab3WAUQDURgH8A8ACCAABHLBIACCUBAkgIAgIkEAhIEkgEBAIEAER5ZgAImupYCSAoHD3u5ve3O3P7f/vb0Nf87s/O5777vvnm0ebS80QTe9J9bqJZZFAwXMIcX17VzBz8SWPFZC23MDe6v2AoRR24kOfm3ZHmMVtKWB+t79EFRNLoJ6owjJYoFtARM6VwTx5CLoczgr6Jrm79SWJRB/dI92X+R1lJvvXXNvK0gjtCuBAFzH3DhpkcthPKyiaLapIBDKufU9+rsPNLyBJqvbIOzJg0GV5vVgxw6AUK4JlavE/K0DT7hCgEKVMsgVMpgy+H8cDPIeKlXmZxqodiknDQK7CvigVKksKT5p08E7W2OwhOpNk0uThqcNB1V6TJ0yDPLSZnVL+7HOFfI5Rwd5P3kf/ZhD+NPUEOR3M61i5W7FfuKAhWWMeohyF3ZV5Bkogmv8hkaLf0yMlAG6buWX70J8MQAAAABJRU5ErkJggg==" className="w-20 h-20" />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold">
              Firebase
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-800 dark:text-gray-300 mb-4">
          Databases
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <div className="flex flex-col items-center bg-purple-600 p-5 rounded-lg justify-center transition transform hover:scale-105">
            <img src="https://sarthak-portfolio.onrender.com/images%202/skills/mongodb.png" className="w-20 h-20" />
            <div className="   p-[12px] rounded-lg shadow-xl w-full text-center mt-5 bg-white text-purple-800 text-xl font-semibold">
              MongoDB
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-800 dark:text-gray-300 mb-4">
          Extras
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <div className=" hover:text-white bg-purple-600 text-white  p-[12px]  rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-purple-800 text-xl font-semibold">
            Anchoring
          </div>
          <div className=" hover:text-white bg-purple-600 text-white  p-[12px] dark:p-2 rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-purple-800 text-xl font-semibold">
            Content Writing
          </div>
          <div className=" hover:text-white bg-purple-600 text-white  p-[12px]  rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-purple-800 text-xl font-semibold">
            Singing
          </div>
          <div className=" hover:text-white bg-purple-600 text-white  p-[12px]  rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-purple-800 text-xl font-semibold">
            Debates
          </div>
          <div className=" hover:text-white bg-purple-600 text-white  p-[12px]  rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-purple-800 text-xl font-semibold">
            Extempore
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
