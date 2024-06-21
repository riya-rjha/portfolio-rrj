import React from "react";
import AmazonClone from "../Images/AmazonClone.png";
import BookStoreWebsite from "../Images/BookStoreWebsite.png";
import RecipeApplication from "../Images/RecipeApplication.png";

const Projects = () => {
  const projects = [
    {
      name: "Amazon Clone",
      url: "https://github.com/riya-rjha/Amazon-Clone",
      site: "https://amazon-clone-12ab-cd.netlify.app/",
      img: AmazonClone,
    },
    {
      name: "Recipe Application",
      url: "https://github.com/riya-rjha/Recipe-Application",
      site: "https://recipe-app-save-create.netlify.app/",
      img: RecipeApplication,
    },
    {
      name: "Book Store Website",
      url: "https://github.com/riya-rjha/Book-Store-Website",
      site: "https://book-services.netlify.app/",
      img: BookStoreWebsite,
    },
  ];
  
  const miniProjects = [
    {
      name: "Amazon Clone",
      url: "https://github.com/riya-rjha/Amazon-Clone",
      site: "https://amazon-clone-12ab-cd.netlify.app/",
      img: AmazonClone,
    },
    {
      name: "Recipe Application",
      url: "https://github.com/riya-rjha/Recipe-Application",
      site: "https://recipe-app-save-create.netlify.app/",
      img: RecipeApplication,
    },
    {
      name: "Book Store Website",
      url: "https://github.com/riya-rjha/Book-Store-Website",
      site: "https://book-services.netlify.app/",
      img: BookStoreWebsite,
    },
  ];

  return (
    <section id="project" className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl mb-4  all-headings">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded">
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-32 object-cover mb-2 rounded"
            />
            <div className="flex flex-col">
              <button className="bg-gray-800 transition delay-75 text-white py-2 px-4 rounded mt-2 hover:bg-slate-950">
                <a href={project.url} target="_blank">
                  View on GitHub
                </a>
              </button>
              <button className="bg-gray-800 transition delay-75 text-white py-2 px-4 rounded mt-2 hover:bg-slate-950">
                <a href={project.site} target="_blank">
                  Explore Website Now
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-3xl md:text-3xl  mb-4 all-headings mt-10">
        Mini Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((miniProjects, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded">
            <h3 className="text-xl font-bold mb-2">{miniProjects.name}</h3>
            <img
              src={miniProjects.img}
              alt={miniProjects.name}
              className="w-full h-32 object-cover mb-2 rounded"
            />
            <div className="flex flex-col">
              <button className="bg-gray-800 transition delay-75 text-white py-2 px-4 rounded mt-2 hover:bg-slate-950">
                <a href={miniProjects.url} target="_blank">
                  View on GitHub
                </a>
              </button>
              <button className="bg-gray-800 transition delay-75 text-white py-2 px-4 rounded mt-2 hover:bg-slate-950">
                <a href={miniProjects.site} target="_blank">
                  Explore Website Now
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
