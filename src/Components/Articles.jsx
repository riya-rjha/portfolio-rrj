
import {Link} from 'react-router-dom'

const Articles = () => (
  <Link to="/articles">
    <section
      className="p-4 md:p-8 bg-[url('https://img.freepik.com/free-vector/monochromatic-hand-painted-background-with-drawn-nature-elements_52683-63007.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid')] bg-no-repeat bg-cover dark:bg-[url('https://img.freepik.com/premium-photo/dark-background-with-silver-blue-pattern-with-words-blue-moon-it_1290686-20842.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid')]"
    >
      <h2 className="text-2xl dark:text-white md:text-4xl font-bold my-6 text-center all-headings">
        My Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {.map((article, index) => (
          <div
            key={index}
            className="bg-purple-100 dark:bg-white shadow-md rounded p-4 flex flex-col items-center justify-center relative transition-all transform hover:scale-105"
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
  </Link>
);

export default Articles;
