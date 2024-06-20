import React from 'react';

const Articles = () => (
  <section className="p-4 md:p-8">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's have a look at my Articles</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        { title: 'Design Unraveled', image: '/images/design-unraveled.png', description: 'Design Unraveled: Behind the Scenes of UI/UX Magic', date: '10 Nov, 2023' },
        { title: 'Loan Management', image: '/images/loan-management.png', description: 'Sugee: Loan Management System for Rural Sector', date: '8 Oct, 2023' },
        { title: 'Cinetrade', image: '/images/cinetrade.png', description: 'Cinetrade: Innovative way to invest in Digital Media', date: '15 Aug, 2023' },
        { title: 'Design Unraveled', image: '/images/design-unraveled.png', description: 'Design Unraveled: Behind the Scenes of UI/UX Magic', date: '10 Nov, 2023' },
        { title: 'Loan Management', image: '/images/loan-management.png', description: 'Sugee: Loan Management System for Rural Sector', date: '8 Oct, 2023' },
        { title: 'Cinetrade', image: '/images/cinetrade.png', description: 'Cinetrade: Innovative way to invest in Digital Media', date: '15 Aug, 2023' }
      ].map((article, index) => (
        <div key={index} className="bg-white shadow-md rounded p-4">
          <img src={article.image} alt={article.title} className="w-full h-32 object-cover mb-4 rounded" />
          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
          <p className="text-gray-700 text-sm md:text-base">
            {article.description}
          </p>
          <p className="text-gray-500 text-xs md:text-sm mt-2">{article.date}</p>
          <button className="mt-4 bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700">Read More</button>
        </div>
      ))}
    </div>
  </section>
);

export default Articles;
