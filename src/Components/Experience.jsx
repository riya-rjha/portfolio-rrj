import React from "react";

const Experience = () => (
  <section id="experience" className="p-4 md:p-8 mt-12 text-black bg-white">
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
      My Work Experiences
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative bg-gradient-to-r from-orange-100 to-gray-100 p-6 rounded-lg shadow-lg border-l-8 border-orange-500 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl md:text-4xl font-bold text-green-700 mb-4">
          GeeksForGeeks
        </h3>
        <div className="absolute left-[8%] transform -translate-x-1/2 top-[8rem] h-20 border-l-4 border-orange-600"></div>
        <div className="relative mt-8">
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-green-500 text-sm font-semibold">G</span>
            </div>
            <div>
              <p className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                Technical Content Writer Intern
              </p>
              <p className="text-sm md:text-base text-gray-600">
                April 2024 - Present
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-green-500 text-sm font-semibold">G</span>
            </div>
            <div>
              <p className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                Content Writer
              </p>
              <p className="text-sm md:text-base text-gray-600">
                November 2023 - April 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-gray-100 p-6 rounded-lg shadow-lg border-l-8 border-orange-500 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl md:text-4xl font-bold text-[#61351A] mb-4">
          CodeChef ABESEC Chapter
        </h3>
        <div className="relative mt-8">
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-[#ffdfcb] text-sm font-semibold">C</span>
            </div>
            <div>
              <p className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                Development Lead
              </p>
              <p className="text-sm md:text-base text-gray-600">
                August 2024 - Present
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-[#ffdfcb] text-sm font-semibold">C</span>
            </div>
            <div>
              <p className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                Development Coordinator
              </p>
              <p className="text-sm md:text-base text-gray-600">
                April 2023 - August 2024
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-orange-100 to-gray-100 p-6 rounded-lg shadow-lg border-l-8 border-orange-500 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl md:text-4xl font-bold text-[#61351A] mb-4">
          CodeChef ABESEC Chapter
        </h3>
        <div className="relative mt-8">
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-[#ffdfcb] text-sm font-semibold">C</span>
            </div>
            <div>
              <p className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                Content Lead
              </p>
              <p className="text-sm md:text-base text-gray-600">
                August 2024 - Present
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-[#ffdfcb] text-sm font-semibold">C</span>
            </div>
            <div>
              <p className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                Content Coordinator
              </p>
              <p className="text-sm md:text-base text-gray-600">
                April 2023 - August 2024{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-orange-100 to-gray-100 p-6 rounded-lg shadow-lg border-l-8 border-orange-500 hover:shadow-xl transition-shadow duration-300">
        {" "}
        <h3 className="text-2xl md:text-4xl font-bold text-[#350d55] mb-4">
          Elixir: The Tech Community
        </h3>
        <div className="relative mt-8">
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-purple-400 text-sm font-semibold">E</span>
            </div>
            <div>
              <p className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                Technical Content Writer Intern
              </p>
              <p className="text-sm md:text-base text-gray-600">
                April 2024 - Present
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-purple-400 text-sm font-semibold">E</span>
            </div>
            <div>
              <p className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                Technical Content Writer Intern
              </p>
              <p className="text-sm md:text-base text-gray-600">
                April 2024 - Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
