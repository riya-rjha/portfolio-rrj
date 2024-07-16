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
import Calculator from '../Images/Calculator.png';
import BlogApp from '../Images/BlogApp.png'

const Projects = () => {
  const projects = [
    {
      name: "Blog Application ",
      url: "https://github.com/riya-rjha/Full-Stack-Blog-App/tree/main",
      site: "https://client-blog-app-self.vercel.app/",
      img: BlogApp,
      description:
        "A full stack blog application built using React.js & its libraries. Features include user authentication, write, edit, delete, update a blog post.",
      tech: "MERN + Redux + Multer",
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

  return (
    <section id="project" className="p-6 md:p-12">
      <h2 className="text-3xl md:text-4xl mb-8 font-bold all-headings tracking-wide text-center">My Projects</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 shadow-lg p-6 rounded-lg flex flex-col md:flex-row items-center transform transition duration-500 hover:scale-105"
          >
            <div className="md:w-1/2 md:pr-6">
              <h3 className="text-2xl font-bold mb-4 uppercase">{project.name}</h3>
              <p className="mb-4 text-lg">
                <span className="font-bold">Tech Stack: </span>{project.tech}
              </p>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-col space-y-2">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-orange-400 text-white py-2 px-4 rounded-lg text-center transition duration-300 hover:bg-orange-600"
                >
                  View on GitHub
                </a>
                <a 
                  href={project.site} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-orange-400 text-white py-2 px-4 rounded-lg text-center transition duration-300 hover:bg-orange-600"
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
      <Skills />
      <h2 className="text-3xl md:text-4xl mb-8 mt-16 font-bold tracking-wide text-center">Mini Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {miniProjects.map((miniProject, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105"
          >
            <h3 className="text-xl font-bold mb-4">{miniProject.name}</h3>
            <img
              src={miniProject.img}
              alt={miniProject.name}
              className="w-full h-32 object-cover rounded-lg shadow-md mb-4"
            />
            <p className="mb-4">{miniProject.description}</p>
            <a 
              href={miniProject.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-400 text-white py-2 px-4 rounded-lg text-center transition duration-300 hover:bg-orange-600 block"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
