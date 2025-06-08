import TrendSpire from "../Images/projects/TrendSpire.png";
import BlogHub from "../Images/projects/BlogApp.png";
import Amazon from "../Images/projects/AmazonClone.png";
import Recipe from "../Images/projects/RecipeApplication.png";
import BookStore from "../Images/projects/BookStoreWebsite.png";
import QuoteGen from "../Images/projects/QuoteGen.png";
import Quiz from "../Images/projects/QuizApp.png";
import Music from "../Images/projects/MusicApp.png";
import Calculator from "../Images/projects/Calculator.png";
import Password from "../Images/projects/PasswordGen.png";
import CRM from "../Images/projects/crm.png"
import Email from "../Images/projects/EmailValid.png";

const projects = [
    {
        title: "TrendSpire: AI-Driven E-Commerce",
        github: "https://github.com/riya-rjha/TrendSpire-E-CommerceSite",
        live: "https://trend-spire-client.vercel.app/",
        img: TrendSpire,
        description:
            "TrendSpire redefines online shopping by combining the power of the MERN stack with Gemini API integration. This AI-infused e-commerce platform delivers real-time product insights, personalized recommendations, and a sleek, intuitive UI—offering each user a truly tailored shopping journey.",
        tech: "MERN + Gemini API Integration",
    },
    {
        title: "BlogHub: Express Your Voice",
        github: "https://github.com/riya-rjha/Full-Stack-Blog-App/tree/main",
        live: "https://client-blog-app-self.vercel.app/",
        img: BlogHub,
        description:
            "BlogHub isn't just a blogging app—it's a writer's playground. Built with React.js and Redux, this full-stack platform enables secure user authentication, dynamic post creation, and seamless content management with features like edit, delete, and update—all within a clean, distraction-free UI.",
        tech: "MERN + Redux",
    },
    {
        title: "CRM-X: Smarter Customer Engagement",
        github: "https://github.com/riya-rjha/crm-project",
        live: "https://crm-client-topaz.vercel.app/",
        img: CRM,
        description:
            "CRM-X empowers managers to turn customer data into strategy. Built with MERN and turbocharged with Gemini Flash AI and Redis, this CRM lets users segment data visually, send AI-generated messages, manage campaigns, and analyze engagement via interactive charts—all in one unified dashboard.",
        tech: "MERN + Gemini Flash + Redis",
    },
    {
        title: "Amazon Clone: Realistic E-Commerce Simulation",
        github: "https://github.com/riya-rjha/Amazon-Clone",
        live: "https://amazon-clone-12ab-cd.netlify.app/",
        img: Amazon,
        description:
            "This Amazon clone recreates the essential features of the e-commerce giant—built with React and Firebase. Users can register, log in, browse products, and manage their shopping cart, all within a highly responsive and modern UI that mirrors real-world user expectations.",
        tech: "React + Firebase",
    },
    {
        title: "Savour: The Smart Recipe App",
        github: "https://github.com/riya-rjha/Recipe-Application",
        live: "https://recipe-app-save-create.netlify.app/",
        img: Recipe,
        description:
            "Savour is your personal digital cookbook. Built using the MERN stack, it allows users to create, edit, and explore a library of delicious recipes. Whether you're a chef or a foodie, the app helps curate your culinary creativity in an organized, interactive way.",
        tech: "MERN",
    },
    {
        title: "Bookly: Online Book Store Experience",
        github: "https://github.com/riya-rjha/Book-Store-Website",
        live: "https://book-services.netlify.app/",
        img: BookStore,
        description:
            "Bookly brings the charm of bookstores into the digital world. Developed with the MERN stack, it offers a clean catalog interface, real-time search, and cart functionality—making book browsing and purchasing smooth, fast, and delightful for readers of all kinds.",
        tech: "MERN",
    },
];

const miniProjects = [
    {
        name: "Music App",
        url: "https://github.com/riya-rjha/JS-Projects/tree/main/Music%20Player",
        img: Music,
        description: "A visually engaging music player that lets users play, pause, and navigate tracks with smooth controls.",
    },
    {
        name: "Quiz Application",
        url: "https://github.com/riya-rjha/JS-Projects/tree/main/Quiz%20App",
        img: Quiz,
        description: "An interactive quiz application that evaluates users in real-time and shows score-based feedback.",
    },
    {
        name: "Calculator",
        url: "https://github.com/riya-rjha/JS-Projects/tree/main/Calculator",
        img: Calculator,
        description: "A modern calculator built with HTML, CSS, and JavaScript supporting all basic operations cleanly.",
    },
    {
        name: "Password Generator",
        url: "https://github.com/riya-rjha/JS-Projects/tree/main/Password%20Generator",
        img: Password,
        description: "Create strong, random passwords instantly using a lightweight, intuitive interface that can be copied.",
    },
    {
        name: "Quote Generator",
        url: "https://github.com/riya-rjha/JS-Projects/tree/main/Quote%20Generator",
        img: QuoteGen,
        description: "Displays random inspirational quotes with a button click using an external API and elegant design.",
    },
    {
        name: "Email Validation",
        url: "https://github.com/riya-rjha/JS-Projects/tree/main/Form%20Validation",
        img: Email,
        description: "A clean JavaScript-based utility to validate email inputs in real time with instant error feedback.",
    }

];


export { projects, miniProjects };