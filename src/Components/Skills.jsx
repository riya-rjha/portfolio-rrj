import React from "react";

const Skills = () => {
  return (
    <div className="dark:bg-white p-4 rounded-md mt-16">
      <h1 className="text-4xl font-bold light:mt-8 dark:mt-3 dark:mb-5 uppercase all-headings dark:text-black ">SKILLS</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Languages</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">Javascript</div>
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">Typescript</div>
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">Java</div>
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">Python</div>
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">HTML</div>
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">CSS</div>
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">C Language</div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Frameworks/Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">React.js</div>
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">Express.js</div>
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">Typescript</div>
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">Node.js</div>
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">Tailwind CSS</div>
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">Git</div>
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">GitHub</div>
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">Firebase</div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Databases</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <div className="bg-orange-500 text-white p-[10px] rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">MongoDB</div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Extras</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <div className="bg-orange-500 text-white p-[10px]  rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">Anchoring</div>
          <div className="bg-orange-500 text-white p-[10px] dark:p-2 rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">Content Writing</div>
          <div className="bg-orange-500 text-white p-[10px]  rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">Singing</div>
          <div className="bg-orange-500 text-white p-[10px]  rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">Debates</div>
          <div className="bg-orange-500 text-white p-[10px]  rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-orange-600 text-xl font-semibold">Extempore</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
