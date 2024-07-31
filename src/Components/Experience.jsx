import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  AOS.init({
    duration: 500,
    easing: "ease-out",
    once: true,
  });

  return (
    <section
      id="experience"
      className="p-4 md:p-8 mt-20 text-black bg-[url('https://img.freepik.com/free-vector/monochromatic-hand-painted-background-with-drawn-nature-elements_52683-63007.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid')] bg-no-repeat bg-cover dark:bg-[url('https://img.freepik.com/premium-photo/dark-background-with-silver-blue-pattern-with-words-blue-moon-it_1290686-20842.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid')] "
    >
      <h2 className="text-xl md:text-3xl font-bold mb-8 text-center dark:text-white all-headings">
        My Work Experiences
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="relative bg-gradient-to-r from-purple-100 to-gray-100 p-6 rounded-lg shadow-lg border-l-8 border-purple-800 hover:shadow-xl transition-shadow duration-300"
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">
            GeeksForGeeks
          </h3>
          <div className="absolute md:left-[7.5%] left-[11%] md:top-[7rem] top-[6rem]   transform -translate-x-1/2  h-20 border-l-4 border-purple-600"></div>
          <div className="relative mt-4">
            <div className="flex items-start space-x-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-green-500 text-sm font-semibold">G</span>
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                  Technical Content Writer Intern
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  April 2024 - Present
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-green-500 text-sm font-semibold">G</span>
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                  Content Writer
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  November 2023 - April 2024
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative bg-gradient-to-r from-purple-100 to-gray-100 p-6 rounded-lg shadow-lg border-l-8 border-purple-800 hover:shadow-xl transition-shadow duration-300"
          data-aos="zoom-in-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#61351A] mb-4">
            CodeChef ABESEC Chapter
          </h3>
          <div className="absolute md:left-[7.5%] left-[11%] md:top-[7rem] top-[6rem]  transform -translate-x-1/2 h-20 border-l-4 border-purple-600"></div>
          <div className="relative mt-4">
            <div className="flex items-start space-x-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-[#ffdfcb] text-sm font-semibold">C</span>
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                  Development Lead
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  August 2024 - Present
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-[#ffdfcb] text-sm font-semibold">C</span>
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                  Development Coordinator
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  April 2023 - August 2024
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative bg-gradient-to-r from-purple-100 to-gray-100 p-6 rounded-lg shadow-lg border-l-8 border-purple-800 hover:shadow-xl transition-shadow duration-300"
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="absolute md:left-[7.5%] left-[11%] md:top-[7rem] top-[6rem] transform -translate-x-1/2  h-20 border-l-4 border-purple-600"></div>
          <h3 className="text-xl md:text-2xl font-bold text-[#61351A] mb-4">
            CodeChef ABESEC Chapter
          </h3>
          <div className="relative mt-4">
            <div className="flex items-start space-x-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-[#ffdfcb] text-sm font-semibold">C</span>
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                  Content Lead
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  August 2024 - Present
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-[#ffdfcb] text-sm font-semibold">C</span>
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                  Content Coordinator
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  April 2023 - August 2024
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative bg-gradient-to-r from-purple-100 to-gray-100 p-6 rounded-lg shadow-lg border-l-8 border-purple-800 hover:shadow-xl transition-shadow duration-300"
          data-aos="zoom-in-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="absolute md:left-[7.5%] left-[11%] md:top-[7rem] top-[6rem]  transform -translate-x-1/2 h-20 border-l-4 border-purple-600"></div>
          <h3 className="text-xl md:text-2xl font-bold text-[#350d55] mb-4">
            Elixir: The Tech Community
          </h3>
          <div className="relative mt-4">
            <div className="flex items-start space-x-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-purple-400 text-sm font-semibold">E</span>
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                  Community Member
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  April 2024 - Present
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-purple-400 text-sm font-semibold">E</span>
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                  Student Volunteer
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  April 2023 - August 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
