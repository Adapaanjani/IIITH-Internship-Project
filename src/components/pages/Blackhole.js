// BlackHolePage.jsx
import React from 'react';
import './BlackHole.css';
import Navbar from '../Navbar'; 
import Footer from '../Footer';// Create this file for styling


const BlackHolePage = () => {
  const blackHoleHistory = [
    {
      title: 'Discovery',
      content:
        'Black holes were first theorized by Albert Einstein in 1916 with his general theory of relativity. However, it was not until several decades later that astronomers found observational evidence supporting their existence.',
      imagesrc: 'https://www.rampagewired.com/wp-content/uploads/2019/05/Wikimedia-This-is-the-second-black-hole-that-i-talk-about-in-my-article-e1558101059902-1280x640.jpg',
    },
    {
      title: 'Formation',
      content:
        'Black holes form when massive stars exhaust their nuclear fuel and undergo gravitational collapse. The core contracts, and if the mass is above a critical value, it collapses to a point of infinite density known as a singularity, surrounded by the event horizon.',
        imagesrc: 'https://solarsystem.nasa.gov/internal_resources/3622',
    },
    {
      title: 'Effects on Space',
      content:
        'The immense gravitational pull of black holes affects nearby space, bending light, and causing time dilation. They can also capture surrounding matter, forming an accretion disk that emits powerful radiation.',
        imagesrc: 'https://th.bing.com/th/id/OIP.FNXliSRGYF3D2gA2HN2wZgHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    },
  ];

  return (
    <div>
    <Navbar/>
    <div className="black-hole-page">
      <h1>Black Holes</h1>
      <div className="black-hole-cards">
        {blackHoleHistory.map((item, index) => (
          <div className="black-hole-card" key={index}>
            <div className="card-image">
              <img src={item.imagesrc} alt={`Black Hole ${index + 1}`} />
            </div>
            <div className="card-content">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default BlackHolePage;
