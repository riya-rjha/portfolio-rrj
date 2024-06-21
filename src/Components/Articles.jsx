import React from "react";

const Articles = () => (
  <section className="p-4 md:p-8">
    <h2 className="text-2xl md:text-3xl font-bold mb-4  all-headings">
      My Articles
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
  { 
    title: 'Creating a Chatbot from Scratch: HTML, CSS, JS Explained',
    image: '/images/chatbot-html-css-js.png',
    description: 'Explore the step-by-step process of building a functional chatbot using HTML, CSS, and JavaScript. Learn essential techniques and practical tips for seamless integration.',
    date: '10 Nov, 2023'
  },
  { 
    title: 'Exploring 8 Types of Graphic Design with Examples',
    image: '/images/types-of-graphic-design.png',
    description: 'Gain insights into the diverse landscape of graphic design with this comprehensive guide. Explore different types such as typography, branding, and illustration with practical examples.',
    date: 'Date TBD'
  },
  { 
    title: 'Building an AI-Powered Chatbot Platform with Node.js and Express.js',
    image: '/images/ai-powered-chatbot-platform.png',
    description: 'Discover the foundations of creating an AI-powered chatbot platform using Node.js and Express.js. Gain insights into machine learning integration and scalable architecture.',
    date: 'Date TBD'
  },
  { 
    title: 'Best Practices for Designing Chatbots and Conversational UI',
    image: '/images/chatbot-design-best-practices.png',
    description: 'Master the art of designing intuitive chatbots and conversational user interfaces (UI). Explore usability principles, interaction patterns, and user-centered design approaches.',
    date: 'Date TBD'
  },
  { 
    title: 'Building a Note-Taking App with Status Tracker using MERN Stack',
    image: '/images/note-taking-app-mern.png',
    description: 'Learn how to develop a robust note-taking application with real-time status tracking using the MERN (MongoDB, Express.js, React, Node.js) stack. Dive into full-stack development and data management.',
    date: 'Date TBD'
  },
  { 
    title: 'Understanding Data Sampling: Types, Importance, Best Practices',
    image: '/images/data-sampling.png',
    description: 'Explore the fundamentals of data sampling, including its various types, importance in statistical analysis, and best practices for accurate and reliable results.',
    date: 'Date TBD'
  }
]
.map((article, index) => (
        <div key={index} className="bg-white shadow-md rounded p-4">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-32 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
          <p className="text-gray-700 text-sm md:text-base">
            {article.description}
          </p>
          <p className="text-gray-500 text-xs md:text-sm mt-2">
            {article.date}
          </p>
          <button className="mt-4 bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700">
            Read More
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Articles;
