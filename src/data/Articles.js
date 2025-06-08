import React from "react";
import GraphicDesigTypes from "../Images/articles/GraphicDesignTypes.png";
import MERN from "../Images/articles/MERNdeployment.png";
import DataSampling from "../Images/articles/DataSampling.png";
import HoverEffect from "../Images/articles/HoverEffect.png";
import HQXFormat from "../Images/articles/HQXFormat.png";
import PrototypesFigma from "../Images/articles/PrototypesFigma.png";
import svg from "../Images/articles/svg.png";
import business from "../Images/articles/business.png"
import font from "../Images/articles/FigmaFont.png";
import plugin from "../Images/articles/plugin.png";
import booleanops from "../Images/articles/booleanops.png";
import htmlfigma from "../Images/articles/htmlfigma.png"
import gamedes from "../Images/articles/gamedes.png";
import social from "../Images/articles/social.png";
import recipe from "../Images/projects/RecipeApplication.png";
import cosmetic from "../Images/articles/cosmetics.png";
import travel from "../Images/articles/tourism.png";
import gov from "../Images/articles/gov.png";
import ott from "../Images/articles/ott.png";
import car from "../Images/articles/cars.png";
import fashion from "../Images/articles/fashion.png";
import health from "../Images/articles/healthcare.png";
import tourism from "../Images/articles/ticket.png";
import pr from "../Images/articles/pr.png";
import arrayob from "../Images/articles/arrobj.png";
import multiPg from "../Images/articles/multiPg.png";
import json from "../Images/articles/json.png";
import state from "../Images/articles/states.png";
import mongo from "../Images/articles/mongodb.png";
import navlink from "../Images/articles/navlink.png";
import note from "../Images/articles/NoteTakingArticle.png";
import product from "../Images/articles/product.png";
import wps from "../Images/articles/wps.png";
import inspect from "../Images/articles/inspect.png"
import solicitor from "../Images/articles/solicitor.png";
import attorney from "../Images/articles/attorney.png";
import g4 from "../Images/articles/g4.png";

const figma = [
    {
        "title": "Svg Color and Overlay Edit Figma",
        "description": "This article guides you through editing SVG colors and overlays in Figma, enhancing your design workflow with practical tips and techniques for effective vector graphic customization.",
        "url": "https://www.geeksforgeeks.org/svg-color-and-overlay-edit-figma/",
        "image": svg
    },
    {
        "title": "Best Figma Plugins for Fonts",
        "description": "Explore a curated list of Figma plugins that enhance font selection and typography in your designs. The article provides insights into tools that streamline font management and improve design efficiency.",
        "url": "https://www.geeksforgeeks.org/best-figma-plugins-for-fonts/",
        "image": font
    },
    {
        "title": "8 Types of Graphic Design with Examples",
        "description": "Understand the eight primary types of graphic design, including web, UI, marketing, and more. This article provides examples and insights into each category's role in visual communication.",
        "url": "https://www.geeksforgeeks.org/types-of-graphic-design-tools-and-best-practices/",
        "image": GraphicDesigTypes
    },
    {
        "title": "How to Design a Business Card in Figma?",
        "description": "Learn step-by-step how to design a professional business card using Figma. The article covers layout, typography, and design principles to create impactful business cards.",
        "url": "https://www.geeksforgeeks.org/how-to-design-a-business-card-in-figma/",
        "image": business
    },
    {
        "title": "Adding and Using Figma Plugins for Custom Workflows",
        "description": "This article explains how to add and utilize Figma plugins to customize your design workflows, enhancing productivity and expanding Figma's capabilities.",
        "url": "https://www.geeksforgeeks.org/adding-and-using-figma-plugins-for-custom-workflows/",
        "image": plugin
    },
    {
        "title": "Boolean Operations in Figma",
        "description": "Understand how to use Boolean operations in Figma to combine shapes and create complex designs. The article offers practical examples and tips for effective usage.",
        "url": "https://www.geeksforgeeks.org/boolean-operations-in-figma/",
        "image": booleanops
    },
    {
        "title": "Figma to HTML",
        "description": "Learn how to convert Figma designs into HTML code. This article outlines the steps and considerations for translating visual designs into functional web pages.",
        "url": "https://www.geeksforgeeks.org/figma-to-html/",
        "image": htmlfigma
    },
    {
        "title": "Figma for Game Design: Tips for Designing Game Interfaces",
        "description": "Explore how Figma can be used for game design, focusing on creating intuitive and engaging game interfaces. The article provides tips and best practices for designers.",
        "url": "https://www.geeksforgeeks.org/figma-for-game-design-tips-for-designing-game-interfaces/",
        "image": gamedes
    },
    {
        "title": "How to Create a Social Media Post using Figma?",
        "description": "This article guides you through designing eye-catching social media posts using Figma, covering layout, imagery, and typography to enhance your online presence.",
        "url": "https://www.geeksforgeeks.org/how-to-create-a-social-media-post-using-figma/",
        "image": social
    },
    {
        "title": "How to Create Your First Mockup in Figma?",
        "description": "Learn how to create your first mockup in Figma, including setting up frames, adding components, and applying design principles to visualize your ideas effectively.",
        "url": "https://www.geeksforgeeks.org/how-to-create-your-first-mockup-in-figma/",
        "image": PrototypesFigma
    }
];

const webDesign = [
    {
        "title": "UI Design of Cosmetics Website",
        "description": "This article explores designing a cosmetics website UI, focusing on showcasing products, services, and customer reviews. It emphasizes principles to attract customers through appealing layouts and effective design strategies.",
        "url": "https://www.geeksforgeeks.org/ui-design-of-cosmetics-website/",
        "image": cosmetic
    },
    {
        "title": "UI Design of Travel Ticket Booking Website",
        "description": "Learn the basics of designing a travel ticket booking website UI, including pages like Home, Ticket Booking, Payments, and About Us. The article discusses color theory and design principles for an engaging user experience.",
        "url": "https://www.geeksforgeeks.org/ui-design-of-a-travel-ticket-booking-website/",
        "image": travel
    },
    {
        "title": "UI Design of Government Website",
        "description": "Discover how to design a government portal UI that is accessible and user-friendly. The article covers UI/UX principles to help citizens navigate ministries, access information, and stay updated on government initiatives.",
        "url": "https://www.geeksforgeeks.org/ui-design-of-government-website/",
        "image": gov
    },
    {
        "title": "UI Design of OTT Platform Website",
        "description": "This article covers designing an OTT platform UI, including Home, Movies Search, Individual Show, and About Us pages. It emphasizes color theory and design principles for an appealing streaming service interface.",
        "url": "https://www.geeksforgeeks.org/ui-design-of-ott-platform-website/",
        "image": ott
    },
    {
        "title": "UI Design of Car Company Website",
        "description": "Explore designing a car company website UI, focusing on pages like Contact & Services and About Us. The article highlights the importance of showcasing services, destinations, and company information effectively.",
        "url": "https://www.geeksforgeeks.org/ui-design-of-a-car-company-website/",
        "image": car
    },
    {
        "title": "UI Design of Fashion Brand Website",
        "description": "This article discusses designing a fashion brand website UI, emphasizing orderly product listings, visual effects, typography, and infographics to enhance user engagement and improve SEO.",
        "url": "https://www.geeksforgeeks.org/ui-design-of-a-fashion-brand-website/",
        "image": fashion
    },
    {
        "title": "UI Design of Healthcare Website",
        "description": "Learn how to design a healthcare website UI that provides essential hospital information. The article focuses on color theory and design principles to create a simple, user-friendly interface.",
        "url": "https://www.geeksforgeeks.org/ui-design-of-a-healthcare-website/",
        "image": health
    },
    {
        "title": "UI Design of Travel and Tourism Website",
        "description": "Discover the basics of designing a travel and tourism website UI, including services for booking tickets through various modes of transport. The article emphasizes design principles for an effective user experience.",
        "url": "https://www.geeksforgeeks.org/ui-design-of-travel-and-tourism-website/",
        "image": tourism
    }
];

const tech = [
    {
        title: "Recipe Manager with MERN Stack",
        description:
            "This article demonstrates building a recipe manager application using the MERN stack, covering backend and frontend development, database integration, and user interface design.",
        url: "https://www.geeksforgeeks.org/recipe-manager-with-mern-stack/",
        image: recipe,
    },
    {
        title: "How To Create a Pull Request in GitHub?",
        description:
            "Understand the process of creating a pull request on GitHub. This article guides you through the steps to contribute to repositories effectively.",
        url: "https://www.geeksforgeeks.org/how-to-create-a-pull-request-in-github/",
        image: pr,
    },
    {
        title: "How to Convert an Array of Objects into an Array of Arrays?",
        description:
            "Learn methods to transform an array of objects into an array of arrays in JavaScript, including using Object.keys(), Object.values(), map(), and reduce() functions.",
        url: "https://www.geeksforgeeks.org/how-to-convert-an-array-of-objects-into-an-array-of-arrays/",
        image: arrayob,
    },
    {
        title: "How to Set Up Vite for a Multi-Page Application",
        description:
            "Explore the process of setting up Vite for a multi-page application. This article guides you through project initialization, routing configurations, and optimizing build processes.",
        url: "https://www.geeksforgeeks.org/javascript/how-to-set-up-vite-for-a-multi-page-application/",
        image: multiPg,
    },
    {
        title: "How to Create Group Hover on Text Using Tailwind CSS",
        description:
            "Learn how to implement group hover effects on text elements using Tailwind CSS. Enhance user interactions by applying hover styles to grouped components efficiently.",
        url: "https://www.geeksforgeeks.org/how-to-create-group-hover-on-text-using-tailwind-css/",
        image: HoverEffect,
    },
    {
        title: "How to Format JavaScript Date as yyyy-mm-dd",
        description:
            "Understand methods to format JavaScript dates into 'yyyy-mm-dd' format. This article covers using built-in Date methods and ISO string manipulations for consistent date representations.",
        url: "https://www.geeksforgeeks.org/how-to-format-javascript-date-as-yyyy-mm-dd/",
        image: json,
    },
    {
        title: "Mastering State Management in ReactJS: A Beginner's Guide to the Context API",
        description:
            "Dive into state management in ReactJS using the Context API. This guide explains creating context providers, consuming context in components, and best practices for efficient state handling.",
        url: "https://www.geeksforgeeks.org/mastering-state-management-in-reactjs-a-beginners-guide-to-the-context-api/",
        image: state,
    },
    {
        title: "What is Data Sampling? Types, Importance, Best Practices",
        description:
            "Understand the concept of data sampling in machine learning and statistics. Learn about different types, significance, and techniques for effective sampling practices in data analysis.",
        url: "https://www.geeksforgeeks.org/what-is-data-sampling-types-importance-best-practices/",
        image: DataSampling,
    },
    {
        title: "Deployment Basics in MERN",
        description:
            "Learn the fundamental steps to deploy a MERN stack application, including setting up the environment, configuring servers, and ensuring smooth deployment processes.",
        url: "https://www.geeksforgeeks.org/mern/deployment-basics-in-mern/",
        image: MERN,
    },
    {
        title: "Setting Up Your Compass Development Environment",
        description:
            "Set up your Compass development environment efficiently. This article explains installation steps, tool usage, and how Compass enhances your front-end workflow.",
        url: "https://www.geeksforgeeks.org/setting-up-your-compass-development-environment/",
        image: mongo,
    },
    {
        title: "NavLink Remix Component",
        description:
            "Explore the NavLink component in Remix. Understand how to use it for navigation, apply active styles, and integrate routing efficiently in Remix applications.",
        url: "https://www.geeksforgeeks.org/javascript/navlink-remix-component/",
        image: navlink,
    },
    {
        title: "Note-Taking App with Status Tracker Using MERN Stack",
        description:
            "Build a note-taking application with a status tracker using the MERN stack. This guide covers creating RESTful APIs, managing state, and implementing user interfaces.",
        url: "https://www.geeksforgeeks.org/mern/note-taking-app-with-status-tracker-using-mern-stack/",
        image: note,
    }
];

const general = [
    {
        title: "What is a Product Vision?",
        description:
            "Understand what a product vision is, why it matters in product development, and how it aligns teams toward a shared goal. This article includes definitions, examples, and steps to craft a strong product vision.",
        url: "https://www.geeksforgeeks.org/business-studies/what-is-a-product-vision-a-complete-overview-with-example/",
        image: product
    },
    {
        title: "WPS File Format Explained",
        description:
            "Learn about the WPS file format, its origin from Microsoft Works, compatibility with modern software, and how to open or convert WPS files efficiently using various tools and platforms.",
        url: "https://www.geeksforgeeks.org/techtips/wps-file-format/",
        image: wps
    },
    {
        title: "Understanding HQX Compressed Format",
        description:
            "Explore the HQX file format, a binary-to-text encoding used on classic Mac OS systems. Understand how it works, its use cases, and how to decode HQX files effectively on modern systems.",
        url: "https://www.geeksforgeeks.org/hqx-compressed-format/",
        image: HQXFormat
    },
    {
        title: "How to Use Inspect Element in Chrome, Firefox, and Safari",
        description:
            "This article walks you through using the 'Inspect Element' tool in Chrome, Firefox, and Safari browsers. It helps in debugging web pages, modifying content temporarily, and analyzing frontend design elements.",
        url: "https://www.geeksforgeeks.org/techtips/how-to-use-inspect-element-in-chrome-firefox-and-safari/",
        image: inspect
    },
    {
        title: "List of All Solicitor Generals of India",
        description:
            "Get a complete and updated list of all Solicitor Generals of India along with their terms and roles. Learn about their legal authority and contributions to the Indian judicial system.",
        url: "https://www.geeksforgeeks.org/upsc/list-of-all-solicitor-generals-of-india/",
        image: solicitor
    },
    {
        title: "List of All Attorney Generals of India",
        description:
            "This article provides a detailed list of Attorney Generals of India, including names, tenures, and key legal responsibilities under the Constitution of India.",
        url: "https://www.geeksforgeeks.org/upsc/list-of-all-attorney-generals-of-india/",
        image: attorney
    },
    {
        title: "What are G4 Countries?",
        description:
            "Explore the concept of G4 countries — Brazil, Germany, India, and Japan — and their collective efforts to seek permanent seats on the United Nations Security Council and reform global governance.",
        url: "https://www.geeksforgeeks.org/upsc/g4-countries/",
        image: g4
    }
];

export { general, webDesign, tech, figma };