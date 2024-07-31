import React from "react";
import Chatbot from "../Images/Chatbot.png";
import GraphicDesigTypes from "../Images/GraphicDesignTypes.png";
import MERN from "../Images/MERNdeployment.png";
import ConversationalUI from "../Images/ConversationalUI.png";
import DataSampling from "../Images/DataSampling.png";
import AIChatbot from "../Images/AIchatbot.png";
import WireframeFigma from "../Images/WireframeFigma.png";
import HoverEffect from "../Images/HoverEffect.png";
import NavbarBreadcrumbs from "../Images/NavbarBreadcrumbs.png";
import HQXFormat from "../Images/HQXFormat.png";
import PrototypesFigma from "../Images/PrototypesFigma.png";
import IPRoute from "../Images/IPRoute.png";
import AgencyWebsite from "../Images/AgencyWebsite.png";
import ArrayConversion from "../Images/ArrayConversion.png";
import ArrayC from "../Images/ArrayC.png";

const Articles = () => (
  <section
    id="articles"
    className="p-4 md:p-8 bg-[url('https://img.freepik.com/free-vector/monochromatic-hand-painted-background-with-drawn-nature-elements_52683-63007.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid')] bg-no-repeat bg-cover dark:bg-[url('https://img.freepik.com/premium-photo/dark-background-with-silver-blue-pattern-with-words-blue-moon-it_1290686-20842.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid')]"
  >
    <h2 className="text-2xl md:text-4xl font-bold my-6 text-center all-headings">
      My Articles
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        {
          title: "Wireframe Components: Header, Menu, Footer in Figma",
          image: WireframeFigma,
          description:
            "Learn how to create wireframe components like headers, menus, and footers in Figma ...",
          url: "https://www.geeksforgeeks.org/wireframe-components-header-menu-footer-in-figma/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        },
        {
          title: "How to Create Hover Effect in Figma",
          image: HoverEffect,
          description:
            "Understand how to design hover effects in Figma to enhance user interaction ...",
          url: "https://www.geeksforgeeks.org/how-to-create-hover-effect-in-figma/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        },
        {
          title: "Choosing Between Navbar and Breadcrumbs in Web Design",
          image: NavbarBreadcrumbs,
          description:
            "Compare and choose the best navigation options for web design: navbar or breadcrumbs ...",
          url: "https://www.geeksforgeeks.org/how-to-choose-between-navbar-and-breadcrumbs-in-web-design/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        },
        {
          title: "Understanding HQX Compressed Format",
          image: HQXFormat,
          description:
            "Dive into the details of HQX compressed format and its uses ...",
          url: "https://www.geeksforgeeks.org/hqx-compressed-format/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        },
        {
          title: "How to build Prototypes in Figma",
          image: PrototypesFigma,
          description:
            "Learn about creating and using prototypes in Figma for interactive designs ...",
          url: "https://www.geeksforgeeks.org/prototypes-in-figma/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        },
        {
          title: "What Does 'ip route 0.0.0.0' Mean?",
          image: IPRoute,
          description:
            "Understand the significance of the 'ip route 0.0.0.0' command in networking ...",
          url: "https://www.geeksforgeeks.org/what-does-ip-route-0-0-0-0-mean/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        },
        {
          title: "Creating an Agency Website Using React and Tailwind",
          image: AgencyWebsite,
          description:
            "Guide on building a responsive agency website with React and Tailwind CSS ...",
          url: "https://www.geeksforgeeks.org/create-an-agency-website-using-react-and-tailwind/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        },
        {
          title: "How to Convert an Array of Objects into an Array of Arrays",
          image: ArrayConversion,
          description:
            "Learn methods to transform an array of objects into an array of arrays in programming ...",
          url: "https://www.geeksforgeeks.org/how-to-convert-an-array-of-objects-into-an-array-of-arrays/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        },
        {
          title: "How to Pass Array of Structure to a Function in C",
          image: ArrayC,
          description:
            "Guide on passing an array of structures to functions in C programming ...",
          url: "https://www.geeksforgeeks.org/how-to-pass-array-of-structure-to-a-function-in-c/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        },
      ].map((article, index) => (
        <div
          key={index}
          className="bg-purple-100 dark:bg-white shadow-md rounded p-4 flex flex-col items-center justify-center relative"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[55%] mb-4 rounded"
          />
          <h3 className="text-xl font-bold mb-2 dark:text-black">
            {article.title}
          </h3>
          <p className="text-gray-700 text-sm md:text-base">
            {article.description}
          </p>
          <a href={article.url} target="_blank" className="w-full">
            <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-900 w-full transition-all delay-75">
              Read More
            </button>
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Articles;
