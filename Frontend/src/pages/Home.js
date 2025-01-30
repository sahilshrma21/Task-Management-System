import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../Style/Home.css';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home-container">
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-heading">Effortless <br /> Task <br /> Management <br /> for Everyone</p>
        <p className="hero-subheading">Organize, prioritize, and manage tasks seamlessly.</p>
      </div>
      <div className="hero-image">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="457.347" height="391.898" viewBox="0 0 457.347 391.898">
          {/* SVG content goes here */}
        </svg>
      </div>
    </section>
      <Footer />
    </div>
    </>
  );
};

export default Home;