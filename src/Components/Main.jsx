import React from "react";

const Main = () => (
  <main className="text-center p-4 md:p-8">
    <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold my-2 md:my-4 text-orange-500 flex items-center justify-center flex-col">
      <span className="mt-2">I'm Riya Ranjan Jha,</span>
      <br /> <span className="text-black -mt-8 mb-6 ">Front End Developer</span>
    </h1>
    <p className="text-gray-700 text-sm md:text-base mt-4">
      I'm Riya Ranjan Jha, a Java programmer with a passion for learning and a
      positive attitude. While I have experience in design and development, I'm
      currently expanding my skillset by exploring UI/UX design and Next.js.
      Beyond the field of programming, I take immense pride in my exceptional
      communication skills and enjoy refining these skills through
      extracurricular activities such as Technical Content Writing, Debates &
      Classical Singing. Currently, I am deeply involved in Front End
      Development while learning Web3 is on my radar. I also have a good command
      over Data Structures & Algorithms. 
      Programming ignites the innovation in
      me & my Technical Content Writing skill lights the way. With countless
      errors in my codes, I am always ready to embrace the challenges my
      programming journey brings for me!
    </p>
    <div className="flex flex-col md:flex-row justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4">
      <button className="bg-orange-500 text-white py-2 px-4 rounded">
        Portfolio
      </button>
      <button className="bg-gray-900 text-white py-2 px-4 rounded">
        Hire me
      </button>
    </div>
  </main>
);

export default Main;
