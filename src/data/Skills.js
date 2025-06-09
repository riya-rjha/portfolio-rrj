const skills = [
    {
        name: "JavaScript",
        icon: "https://cdn-icons-png.freepik.com/256/5968/5968292.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
    },

    {
        name: "TypeScript",
        icon: "https://cdn-icons-png.freepik.com/256/5968/5968381.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
    },
    {
        name: "React",
        icon: "https://cdn-icons-png.freepik.com/256/15697/15697481.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
    },
    {
        name: "Node.js",
        icon: "https://user-Images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png",
    },
    {
        name: "Express.js",
        icon: "https://user-Images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png",
    },
    {
        name: "MongoDB",
        icon: "https://camo.githubusercontent.com/3518c533e8249a2db786d7ba9340a25463cfa876acbe7647be8a01435a0dd59e/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6d6f6e676f64622f6d6f6e676f64622d69636f6e2e737667",
    },
    {
        name: "Python",
        icon: "https://cdn-icons-png.freepik.com/256/5968/5968350.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
    },
    {
        name: "Java",
        icon: "https://cdn-icons-png.freepik.com/256/919/919854.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
    },
    {
        name: "HTML",
        icon: "https://cdn-icons-png.freepik.com/256/5968/5968267.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
    },
    {
        name: "CSS",
        icon: "https://cdn-icons-png.freepik.com/256/5968/5968242.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
    },
    {
        name: "Tailwind",
        icon: "https://camo.githubusercontent.com/52643e404ca1a1d90beb0095ebddda4b16b8c30dfcfeb5d42355a2df037c7c8e/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667",
    },
    {
        name: "Git",
        icon: "https://user-Images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png",
    },
    {
        name: "GitHub",
        icon: "https://user-Images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png",
    },
    {
        name: "Firebase",
        icon: "https://camo.githubusercontent.com/290a06b466f4c5644a2f382f13b2fda16534af0a3d890cfd59f824b43fd99610/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3435322f66697265626173652e706e67",
    },
    {
        name: "Figma",
        icon: "https://user-Images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png",
    },
    {
        name: "Postman",
        icon: "https://user-Images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png",
    },
    {
        name: "Basics AI",
        icon: "https://cdn-icons-png.freepik.com/256/8637/8637099.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
    },
    {
        name: "MySQL",
        icon: "https://cdn-icons-png.freepik.com/256/5968/5968313.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
    },
    {
        name: "Framer Motion",
        icon: "data:image/png;base64,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",
    },
    {
        name: "Canva",
        icon: "https://cdn.worldvectorlogo.com/logos/canva-1.svg",
    },
    {
        name: "Redux",
        icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    },
    {
        name: "REST APIs",
        icon: "https://cdn-icons-png.flaticon.com/512/189/189792.png",
    },
    {
        name: "ES6+",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
        name: "Selenium",
        icon: "https://cdn-icons-png.flaticon.com/512/919/919842.png",
    }


];

export default skills;