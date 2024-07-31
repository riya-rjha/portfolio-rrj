import React from "react";
import AmazonClone from "../Images/AmazonClone.png";
import BookStoreWebsite from "../Images/BookStoreWebsite.png";
import RecipeApplication from "../Images/RecipeApplication.png";
import QuoteGen from "../Images/QuoteGen.png";
import QuizApp from "../Images/QuizApp.png";
import EmailValid from "../Images/EmailValid.png";
import PasswordGen from "../Images/PasswordGen.png";
import QRCode from "../Images/QRCode.png";
import Calculator from "../Images/Calculator.png";
import BlogApp from "../Images/BlogApp.png";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const location = useLocation();

  AOS.init({
    duration: 700,
    easing: "ease-out",
    once: true,
  });

  const projects = [
    {
      name: "Blog Application",
      url: "https://github.com/riya-rjha/Full-Stack-Blog-App/tree/main",
      site: "https://client-blog-app-self.vercel.app/",
      img: BlogApp,
      description:
        "A full stack blog application built using React.js & its libraries. Features include user authentication, write, edit, delete, update a blog post.",
      tech: "MERN + Redux ",
    },
    {
      name: "Amazon Clone",
      url: "https://github.com/riya-rjha/Amazon-Clone",
      site: "https://amazon-clone-12ab-cd.netlify.app/",
      img: AmazonClone,
      description:
        "A clone of the Amazon website built using React and Firebase. Features include user authentication and cart functionality.",
      tech: "Firebase + MERN",
    },
    {
      name: "Recipe Application",
      url: "https://github.com/riya-rjha/Recipe-Application",
      site: "https://recipe-app-save-create.netlify.app/",
      img: RecipeApplication,
      description:
        "A web application for saving and creating recipes. Users can add, edit, and delete recipes, and browse others' recipes.",
      tech: "MERN",
    },
    {
      name: "Book Store Website",
      url: "https://github.com/riya-rjha/Book-Store-Website",
      site: "https://book-services.netlify.app/",
      img: BookStoreWebsite,
      description:
        "An online bookstore website featuring a catalog of books, search functionality, and a cart for purchasing books.",
      tech: "MERN",
    },
  ];

  const miniProjects = [
    {
      name: "Quote Generator",
      url: "https://github.com/riya-rjha/Quote-Generator",
      img: QuoteGen,
      description:
        "A simple web app that generates random quotes. Users can click to generate new quotes and share them on social media.",
    },
    {
      name: "Quiz Application",
      url: "https://github.com/riya-rjha/JS-Projects/tree/main/Quiz%20App",
      img: QuizApp,
      description:
        "A quiz app built with JavaScript. Users can take quizzes on various topics, see their scores, and check their answers right after each submission.",
    },
    {
      name: "Form Validation Application",
      url: "https://github.com/riya-rjha/JS-Projects/tree/main/Form%20Validation",
      img: EmailValid,
      description:
        "A form validation app using JavaScript. Validates user inputs for email, password, and other fields before submission.",
    },
    {
      name: "QR Code Generator",
      url: "https://github.com/riya-rjha/JS-Projects/tree/main/QR%20Generator",
      img: QRCode,
      description:
        "A tool to generate QR codes dynamically. Users can input text or URLs and generate QR codes for easy sharing.",
    },
    {
      name: "Calculator",
      url: "https://github.com/riya-rjha/JS-Projects/tree/main/Calculator",
      img: Calculator,
      description:
        "A basic calculator app built with HTML, CSS, and JavaScript. Supports standard arithmetic operations and displays results.",
    },
    {
      name: "Password Generator",
      url: "https://github.com/riya-rjha/JS-Projects/tree/main/Password%20Generator",
      img: PasswordGen,
      description:
        "A utility for generating secure passwords. Users can customize password length and character types to generate passwords.",
    },
  ];

  const animatedContent = (index) => {
    switch (index % 4) {
      case 0:
        return "zoom-in-right";
      case 1:
        return "zoom-in-left";
      case 2:
        return "zoom-in-right";
      default:
        return "zoom-in-left";
    }
  };


  return (
    <section
      id="project"
      className={`p-6 ${
        location.pathname === "/project" ? "mt-0" : "mt-20"
      } md:p-12 bg-[url('https://img.freepik.com/free-vector/monochromatic-hand-painted-background-with-drawn-nature-elements_52683-63007.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid')] bg-no-repeat bg-cover dark:bg-[url('https://img.freepik.com/premium-photo/dark-background-with-silver-blue-pattern-with-words-blue-moon-it_1290686-20842.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid')] `}
    >
      <h2 className="text-2xl md:text-3xl mb-8 font-bold all-headings tracking-wide text-center dark:text-white">
        My Projects
      </h2>
      {location.pathname !== "/project" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 p-6">
          {projects.map((project, index) => (
            <div
              data-aos={animatedContent(index)}
              data-aos-anchor-placement="top-bottom"
              key={index}
              className="bg-white text-gray-800 shadow-lg p-4 rounded-lg flex flex-col items-start transition-transform transform hover:scale-105 hover:shadow-xl w-full !important"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 uppercase text-center">
                {project.name}
              </h3>
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-[12rem] md:h-[16rem] object-cover rounded-lg mb-4 border border-gray-200"
              />
              <div className="flex w-full justify-between">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg text-center transition duration-300 hover:bg-gray-600 text-sm md:text-base"
                >
                  GitHub
                </a>
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-purple-500 py-2 px-4 rounded-lg text-center transition duration-300 hover:bg-purple-600 text-sm md:text-base"
                >
                  Website
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {location.pathname === "/project" && (
        <>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 shadow-lg p-6 rounded-lg flex flex-col md:flex-row items-center transform transition duration-500 hover:scale-105"
              >
                <div className="md:w-1/2 md:pr-6">
                  <h3 className="text-2xl mb-4 uppercase all-headings ">
                    {project.name}
                  </h3>
                  <p className="mb-4 text-xl">
                    <span className="font-bold">Tech Stack: </span>
                    {project.tech}
                  </p>
                  <p className="mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-col space-y-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-500 text-white py-2 px-4 rounded-lg text-center transition duration-300 hover:bg-purple-600 text-sm"
                    >
                      View on GitHub
                    </a>
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-500 text-white py-2 px-4 rounded-lg text-center transition duration-300 hover:bg-purple-600 text-sm"
                    >
                      Explore Website Now
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {location.pathname === "/project" && (
        <>
          <h2 className="text-2xl md:text-4xl all-headings mb-8 mt-16 font-bold tracking-wide text-center">
            Mini Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {miniProjects.map((miniProject, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 shadow-lg p-4 rounded-lg transform transition duration-500 hover:scale-105"
              >
                <h3 className="text-lg font-bold mb-2">{miniProject.name}</h3>
                <img
                  src={miniProject.img}
                  alt={miniProject.name}
                  className="w-full h-32 object-cover rounded-lg shadow-md mb-4"
                />
                <p className="mb-2 text-sm">{miniProject.description}</p>
                <a
                  href={miniProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 text-white py-2 px-4 rounded-lg text-center transition duration-300 hover:bg-purple-600 block text-sm"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </>
      )}

      {location.pathname !== "/project" && (
        <div className="flex justify-center items-center w-full mt-10">
          <Link to="/project">
            <button className="p-4 bg-purple-600 text-white text-lg w-[300px] rounded-full transition-transform transform hover:scale-105 hover:bg-purple-700">
              Explore Projects
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Projects;
