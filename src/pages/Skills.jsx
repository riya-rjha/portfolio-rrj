import React from "react";
import * as motion from "motion/react-client";

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: "https://cdn-icons-png.freepik.com/256/5968/5968292.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
    },
    {
      name: "TypeScript",
      icon: "https://cdn-icons-png.freepik.com/256/5968/5968381.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
    },
    {
      name: "React",
      icon: "https://cdn-icons-png.freepik.com/256/15697/15697481.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
    },
    {
      name: "Node.js",
      icon: "https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png"
    },
    {
      name: "Express.js",
      icon: "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
    },
    {
      name: "MongoDB",
      icon: "https://camo.githubusercontent.com/3518c533e8249a2db786d7ba9340a25463cfa876acbe7647be8a01435a0dd59e/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6d6f6e676f64622f6d6f6e676f64622d69636f6e2e737667"
    },
    {
      name: "Python",
      icon: "https://cdn-icons-png.freepik.com/256/5968/5968350.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
    },
    {
      name: "Java",
      icon: "https://cdn-icons-png.freepik.com/256/919/919854.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
    },
    {
      name: "HTML",
      icon: "https://cdn-icons-png.freepik.com/256/5968/5968267.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
    },
    {
      name: "CSS",
      icon: "https://cdn-icons-png.freepik.com/256/5968/5968242.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
    },
    {
      name: "Tailwind",
      icon: "https://camo.githubusercontent.com/52643e404ca1a1d90beb0095ebddda4b16b8c30dfcfeb5d42355a2df037c7c8e/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667"
    },
    {
      name: "Git",
      icon: "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
    },
    {
      name: "GitHub",
      icon: "https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png"
    },
    {
      name: "Firebase",
      icon: "https://camo.githubusercontent.com/290a06b466f4c5644a2f382f13b2fda16534af0a3d890cfd59f824b43fd99610/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3435322f66697265626173652e706e67"
    },
    {
      name: "Figma",
      icon: "https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png"
    },
    {
      name: "Postman",
      icon: "https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 overflow-hidden">
      <motion.h1 
        className="text-5xl text-center font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        SKILLS
      </motion.h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="relative cursor-pointer flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 360,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
              background: "linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            <motion.div
              className="mb-3 p-2 rounded-lg bg-white/10 backdrop-blur-sm"
              whileHover={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: 1.1
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={skill.icon}
                alt={`${skill.name} Icon`}
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.target.src = "https://cdn-icons-png.freepik.com/256/919/919854.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid";
                }}
              />
            </motion.div>
            
            <motion.span 
              className="text-sm font-medium text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              whileHover={{ 
                background: "linear-gradient(to right, #a855f7, #ec4899)",
                backgroundClip: "text"
              }}
            >
              {skill.name}
            </motion.span>
            
            {/* Glowing border effect */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-sm -z-10"
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating background elements */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

export default Skills;