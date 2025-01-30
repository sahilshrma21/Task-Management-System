import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../Style/Home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <section className="hero-section">
          <div className="hero-content">
            <p className="hero-heading">Effortless <br /> Task <br /> Management <br /> for Everyone</p>
            <p className="hero-subheading">Organize, prioritize, and manage tasks seamlessly.</p>
          </div>
          <div className="hero-image">
            <img
              src="https://projectsly.com/images/task-management-system-screenshot-1.png?v=1691124479409199525"
              alt="Task Management Illustration"
              className="hero-img"
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;