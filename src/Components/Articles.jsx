import React from "react";
import Chatbot from "../Images/Chatbot.png";
import GraphicDesigTypes from "../Images/GraphicDesignTypes.png";
import MERN from "../Images/MERNdeployment.png";
import ConversationalUI from "../Images/ConversationalUI.png";
import DataSampling from "../Images/DataSampling.png";
import AIChatbot from "../Images/AIchatbot.png";

const Articles = () => (
  <section className="p-4 md:p-8">
    <h2 className="text-2xl md:text-3xl font-bold mb-4  all-headings">
      My Articles
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        {
          title: "Creating a Chatbot from Scratch: HTML, CSS, JS Explained",
          image: Chatbot,
          description:
            "Explore the step-by-step process of building a functional chatbot using HTML, CSS, and JavaScript ...",
          url: "https://www.geeksforgeeks.org/create-working-chatbot-in-html-css-javascript/",
        },
        {
          title: "Exploring 8 Types of Graphic Design with Examples",
          image: GraphicDesigTypes,
          description:
            "Gain insights into the diverse landscape of graphic design with this comprehensive guide ...",
          url: "https://www.geeksforgeeks.org/types-of-graphic-design-tools-and-best-practices/?utm_source=auth&utm_medium=saved&utm_campaign=articles",
        },
        {
          title:
            "Building an AI-Powered Chatbot Platform with Node.js and Express.js",
          image: AIChatbot,
          description:
            "Discover the foundations of creating an AI-powered chatbot platform using Node.js and Express.js ...",
          url: "https://www.geeksforgeeks.org/ai-powered-chatbot-platform-with-node-and-express-js/?utm_source=auth&utm_medium=saved&utm_campaign=articles",
        },
        {
          title: "Best Practices for Designing Chatbots and Conversational UI",
          image: ConversationalUI,
          description:
            "Master the art of designing intuitive chatbots and conversational user interfaces (UI). Explore ...",
          url: "https://www.geeksforgeeks.org/design-practices-for-chatbots-and-conversational-ui/?utm_source=auth&utm_medium=saved&utm_campaign=articles",
        },
        {
          title:
            "Building a Note-Taking App with Status Tracker using MERN Stack",
          image: MERN,
          description:
            "Learn how to develop a robust note-taking application with real-time status tracking using the MERN ...",
          url: "https://www.geeksforgeeks.org/note-taking-app-with-status-tracker-using-mern-stack/?utm_source=auth&utm_medium=saved&utm_campaign=articles",
        },
        {
          title:
            "Understanding Data Sampling: Types, Importance, Best Practices",
          image: DataSampling,
          description:
            "Explore the fundamentals of data sampling, including its various types, importance in statistical analysis ...",
          url: "https://www.geeksforgeeks.org/what-is-data-sampling-types-importance-best-practices/?utm_source=auth&utm_medium=saved&utm_campaign=articles",
        },
      ].map((article, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded p-4 flex flex-col items-center justify-center relative"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[55%] mb-4 rounded"
          />
          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
          <p className="text-gray-700 text-sm md:text-base">
            {article.description}
          </p>
          <a href={article.url} target="_blank" className="w-full">
            <button className="mt-4 bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700 w-full">
              Read More
            </button>
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Articles;
