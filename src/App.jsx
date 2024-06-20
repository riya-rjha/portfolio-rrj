import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Articles from './Components/Articles';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';

const App = () => (
  <div className="font-sans">
    <Header />
    <Main />
    <Projects />
    <Experience />
    <Articles />
    <Testimonials />
    <Footer />
  </div>
);

export default App;
