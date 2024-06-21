import React from "react";

const Experience = () => (
  <section className="p-4 md:p-8 text-black bg-white">
    <h2 className="text-2xl md:text-3xl font-bold mb-8  text-center all-headings">
      My Work Experiences
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gradient-to-r from-orange-100 to-gray-100 p-6 rounded-lg shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-2">
          GeeksForGeeks
        </h3>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Freelance Technical Content Writer Intern
        </h3>
        <p className="text-gray-700">April 2024 - Present</p>
      </div>
      <div className="bg-gradient-to-r from-orange-100 to-gray-100 p-6 rounded-lg shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-2">
          GeeksForGeeks
        </h3>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Content Writer
        </h3>
        <p className="text-gray-700">November 2023 - April 2024</p>
      </div>
      <div className="bg-gradient-to-r from-orange-100 to-gray-100 p-6 rounded-lg shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-2">
          CodeChef ABESEC Chapter
        </h3>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Development Coordinator + Content Coordinator
        </h3>
        <p className="text-gray-700">April 2023 - Present</p>
      </div>
      <div className="bg-gradient-to-r from-orange-100 to-gray-100 p-6 rounded-lg shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-2">
          Elixir: The Technical Community of ABES
        </h3>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Member
        </h3>
        <p className="text-gray-700">April 2023 - Present</p>
      </div>
    </div>
  </section>
);

export default Experience;
