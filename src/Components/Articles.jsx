import React from "react";
import Chatbot from '../Images/Chatbot.png'
import GraphicDesigTypes from '../Images/GraphicDesignTypes.png'
import MERN from '../Images/MERNdeployment.png'
import ConversationalUI from '../Images/ConversationalUI.png'
import DataSampling from '../Images/DataSampling.png'
import AIChatbot from '../Images/AIchatbot.png'

const Articles = () => (
  <section className="p-4 md:p-8">
    <h2 className="text-2xl md:text-3xl font-bold mb-4  all-headings">
      My Articles
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
  { 
    title: 'Creating a Chatbot from Scratch: HTML, CSS, JS Explained',
    image: Chatbot,
    description: 'Explore the step-by-step process of building a functional chatbot using HTML, CSS, and JavaScript. Learn essential techniques and practical tips for seamless integration.',
  },
  { 
    title: 'Exploring 8 Types of Graphic Design with Examples',
    image: GraphicDesigTypes,
    description: 'Gain insights into the diverse landscape of graphic design with this comprehensive guide. Explore different types such as typography, branding, and illustration with practical examples.',
  },
  { 
    title: 'Building an AI-Powered Chatbot Platform with Node.js and Express.js',
    image: AIChatbot,
    description: 'Discover the foundations of creating an AI-powered chatbot platform using Node.js and Express.js. Gain insights into machine learning integration and scalable architecture.',
  },
  { 
    title: 'Best Practices for Designing Chatbots and Conversational UI',
    image: ConversationalUI,
    description: 'Master the art of designing intuitive chatbots and conversational user interfaces (UI). Explore usability principles, interaction patterns, and user-centered design approaches.',
  },
  { 
    title: 'Building a Note-Taking App with Status Tracker using MERN Stack',
    image: MERN,
    description: 'Learn how to develop a robust note-taking application with real-time status tracking using the MERN (MongoDB, Express.js, React, Node.js) stack. Dive into full-stack development and data management.',
  },
  { 
    title: 'Understanding Data Sampling: Types, Importance, Best Practices',
    image: DataSampling,
    description: 'Explore the fundamentals of data sampling, including its various types, importance in statistical analysis, and best practices for accurate and reliable results.',
  }
]
.map((article, index) => (
        <div key={index} className="bg-white shadow-md rounded p-4 flex flex-col items-center justify-center">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[55%] mb-4 rounded"
          />
          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
          <p className="text-gray-700 text-sm md:text-base">
            {article.description}
          </p>
          <button className="mt-4 bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700 w-full">
            Read More
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Articles;
