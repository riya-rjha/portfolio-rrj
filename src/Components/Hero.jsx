// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import bgImage from "../images/myImage.png";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="hero-container min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
          <div className="md:hidden flex flex-col items-center space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
              className="mobile-center flex flex-col items-center"
            >
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-center mb-4">
                Riya Ranjan <br />
                Jha
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="h-1 bg-purple-400 mb-6"
              />
            </motion.div>

            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="image-container"
            >
              <img
                src={bgImage}
                className="w-[400px] sm:w-[400px] mx-auto rounded-lg hover:scale-105 transition-transform duration-300 ease-out"
                alt="Riya Ranjan Jha"
                loading="eager"
              />
            </motion.li>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex space-x-4"
            >
              <motion.a
                href="https://x.com/riya_rjha"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.4 }}
                className="social-icon"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/riyarjha"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="social-icon"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://github.com/riya-rjha"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="social-icon"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: "easeOut",
              }}
              className="text-center space-y-4 max-w-md"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="uppercase text-sm tracking-wider text-gray-400"
              >
                ⎯ About Me
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="text-xl sm:text-2xl font-medium about-heading"
              >
                Hey there! <br />
                I am a <br />
                <span className="typed-text font-bold text-purple-800">
                  <ReactTyped
                    strings={[
                      "Web Developer",
                      "Content Writer",
                      "UI/UX Designer",
                      "Debater",
                    ]}
                    style={{ color: "#6B21A8", fontWeight: "bold" }}
                    className=" font-bold text-purple-800"
                    typeSpeed={100}
                    startDelay={2000}
                    loop
                  />
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="text-gray-400 text-sm leading-relaxed about-text"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                totam iure magni voluptas, eum adipisci, laboriosam sed atque
                tenetur deleniti ex dolores veniam quod non minus? Explicabo,
                ducimus amet.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="pt-4"
              >
                <a
                  href="https://drive.google.com/file/d/13CT4Sk5vTzNaKWBYrW0tzL9Crr-QwY8n/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-button"
                >
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className="hidden md:block relative">
            <div className="grid grid-cols-12 gap-8 items-center min-h-[80vh]">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                }}
                className="col-span-4 z-20 relative"
              >
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight hero-heading">
                  Riya Ranjan <br />
                  Jha
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  className="h-1 bg-purple-400 mt-6 mb-8"
                />

                {/* Social Icons - Shows with name animation */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="flex space-x-4"
                >
                  <motion.a
                    href="https://x.com/riya_rjha"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                    className="social-icon"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/riyarjha"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.4 }}
                    className="social-icon"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://github.com/riya-rjha"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.4 }}
                    className="social-icon"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: "easeOut",
                }}
                className="col-span-4 flex justify-center relative z-10"
              >
                <img
                  src={bgImage}
                  className="w-100 h-[37rem] object-cover rounded-lg shadow-2xl my-image"
                  alt="Riya Ranjan Jha"
                  loading="eager"
                  style={{
                    opacity: imageLoaded ? 1 : 0.7,
                    transition: "opacity 0.3s ease",
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: "easeOut",
                }}
                className="col-span-4 space-y-6 z-20 relative"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="uppercase text-sm tracking-wider text-gray-400"
                >
                  ⎯ About Me
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="text-3xl lg:text-4xl font-semibold leading-tight about-heading"
                >
                  <p>
                    {" "}
                    I am a <br />
                  </p>
                  <span className="typed-text">
                    <ReactTyped
                      strings={[
                        "Web Developer",
                        "Content Writer",
                        "UI/UX Designer",
                        "Debater",
                      ]}
                      typeSpeed={100}
                      startDelay={1500}
                      loop
                    />
                  </span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="text-gray-400 text-base leading-relaxed"
                >
                  I’m a curious and creative person who enjoys solving problems
                  and building cool things. I love writing, designing, and
                  working on projects that make a difference. I’m always eager
                  to learn, work with others, and do my best in everything I
                  take up.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="pt-4"
                >
                  <a
                    href="https://drive.google.com/file/d/13CT4Sk5vTzNaKWBYrW0tzL9Crr-QwY8n/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-button"
                  >
                    Download Resume
                  </a>
                </motion.div>
                <p className="text-emerald-400 text-sm font-bold">
                  In BETA Mode, Changes are being made so some links won&#39;t
                  be functioning as of now!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
