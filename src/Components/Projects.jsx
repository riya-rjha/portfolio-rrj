import React from 'react';

const Projects = () => (
  <section id='project' className="p-4 md:p-8">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">My Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {['Amazon Clone', 'Recipe Application', 'Note Taking App'].map((project, index) => (
        <div key={index} className="bg-white shadow-md p-4 rounded">
          <h3 className="text-xl font-bold mb-2">{project}</h3>
          <img
            src={`/images/${project.toLowerCase().replace(/ /g, '-')}.png`}
            alt={project}
            className="w-full h-32 object-cover mb-2 rounded"
          />
          <button className="bg-gray-900 text-white py-2 px-4 rounded mt-2">View Details</button>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
