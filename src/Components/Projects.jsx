import React from "react";
import AmazonClone from "../Images/AmazonClone.png";
import BookStoreWebsite from "../Images/BookStoreWebsite.png";
import RecipeApplication from "../Images/RecipeApplication.png";
import QuoteGen from "../Images/QuoteGen.png";
import QuizApp from "../Images/QuizApp.png";
import EmailValid from "../Images/EmailValid.png";
import Skills from "./Skills";
import PasswordGen from '../Images/PasswordGen.png';
import QRCode from '../Images/QRCode.png';
import Calculator from '../Images/Calculator.png'

const Projects = () => {
  const projects = [
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
        tech: "MERN"
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
        "A quiz app built with JavaScript. Users can take quizzes on various topics, see their scores, and share results.",
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

  return (
    <section id="project" className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl mb-4  all-headings">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded hover:transform hover:scale-105 delay-100 transition-transform"
          >
            <h2 className="text-2xl mb-2 uppercase all-headings text-gray-800">{project.name}</h2>
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-32 object-cover mb-2 rounded"
            />
            <div className="my-4">
              <p className="mb-2 text-[20px]">
                <span className="font-black text-[20px]">Tech Stack: </span>
                {project.tech}
              </p>
              <p>{project.description}</p>
            </div>
            <div className="flex flex-col">
              <button className="bg-gray-800 transition delay-75 text-white py-2 px-4 rounded mt-2 hover:bg-slate-950">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </button>
              <button className="bg-gray-800 transition delay-75 text-white py-2 px-4 rounded mt-2 hover:bg-slate-950">
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Website Now
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Skills />
      <h2 className="text-3xl md:text-3xl  mb-4 all-headings mt-10">
        Mini Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {miniProjects.map((miniProject, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded hover:transform hover:scale-105 delay-100 transition-transform"
          >
            <h3 className="text-xl font-bold mb-2">{miniProject.name}</h3>
            <img
              src={miniProject.img}
              alt={miniProject.name}
              className="w-full h-32 object-cover mb-2 rounded "
            />
            <div className="my-4">
              <p className="break-all ">{miniProject.description}</p>
            </div>
            <div className="flex flex-col">
              <button className="bg-gray-800 transition delay-75 text-white py-2 px-4 rounded mt-2 hover:bg-slate-950">
                <a
                  href={miniProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
