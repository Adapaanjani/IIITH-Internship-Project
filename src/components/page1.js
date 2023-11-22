import React, { useState, useEffect } from 'react';
import './Page1.css'; // Import your styles
import Navbar from './Navbar';
import CardComponent from './CardComponent';
import Footer from './Footer';


const Page1 = () => {
  const images = ['astro.jpg', 'blackhole.jpg','chandra.jpg', 'rocket.jpg','satee.jpg','ssa.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div>
    <Navbar />
    <div>
    <div className="page1">
      <div className="welcome-message">
      <span><h2>𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚃𝚘 𝙰𝚗𝚝𝚑𝚊𝚛𝚒𝚜𝚑 𝙰𝚗𝚝𝚑𝚞𝚕𝚎𝚗𝚒 𝚅𝚒𝚜𝚑𝚠𝚊𝚖</h2></span>
        <p>𝘛𝘩𝘪𝘴 𝘪𝘴 𝘵𝘩𝘦 𝘱𝘭𝘢𝘤𝘦 𝘸𝘩𝘦𝘳𝘦 𝘺𝘰𝘶 𝘤𝘢𝘯 𝘦𝘹𝘱𝘭𝘰𝘳𝘦...</p>
      </div>
      <div className="image-slider">
        <div className="image-slider-card">
          <img
            src={images[currentImageIndex]}
            alt={`SliderImage ${currentImageIndex + 1}`}
          />
        </div>
      </div>
      </div>
      <div className='downmessage'>
      <div className='main-container'>
      <div className='secondmessage'>
       <h2>𓂀 𝔼𝕩𝕡𝕝𝕠𝕣𝕖 𝕋𝕙𝕣𝕠𝕦𝕘𝕙 𝕋𝕙𝕖 𝔽𝕚𝕖𝕝𝕕𝕤 𝕐𝕠𝕦 𝔸𝕣𝕖 𝕀𝕟𝕥𝕣𝕖𝕤𝕥𝕖𝕕 𝕀𝕟 𓂀</h2>
      </div>
      <div className='cards-container'>
        <CardComponent
          imageUrl="https://wallpaperaccess.com/full/2704596.jpg"
          title="PLANETS"
          description="A planet is a celestial body that orbits a star, is spherical in shape, and has cleared its orbit of other debris."
          route="/planets"
        />
        {/* Repeat this for the other 5 cards */}
        <CardComponent
          imageUrl="https://c.wallhere.com/images/7d/93/4dd7d5bde92318e38279e65ff64f-1601041.jpg!d"
          title="ASTEROIDS"
          description="Asteroids are rocky objects, primarily found in the asteroid belt between Mars and Jupiter, that vary in size from small rocky fragments to larger bodies, remnants from the early solar system."
          route="/Asteroid"
        />
        <CardComponent
          imageUrl="https://assets.materialup.com/uploads/14e1561c-0a29-4ab4-91d4-6c2a4096f813/preview.jpg"
          title="SATELLIETS"
          description="Satellites are objects in space that orbit around celestial bodies, such as planets or moons, or artificial devices launched into orbit around Earth for communication, navigation, observation, or scientific research."
          route="/Satellite"
        />
        <CardComponent
          imageUrl="https://th.bing.com/th/id/OIP.65sYhSpBw1kWwHYljlLzAgHaE7?rs=1&pid=ImgDetMain"
          title="ROCKETS"
          description="Rockets are vehicles that propel themselves through space by expelling exhaust gases in the opposite direction."
          route="/Rockets"
        />
        <CardComponent
          imageUrl="https://bigthink.com/wp-content/uploads/2022/11/AdobeStock_147461738.jpg?w=480&h=270&crop=1"
          title="BLACKHOLE"
          description="black hole is a region of spacetime exhibiting gravitational acceleration so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it."
          route="/BlackHoleInfo"
        />
        <CardComponent
          imageUrl="https://cdn5.vectorstock.com/i/1000x1000/74/69/upcoming-events-neon-sign-on-brick-wall-background-vector-37057469.jpg"
          title="UPCOMING-EVENTS"
          description="Embark on a cosmic journey as we unveil upcoming events that promise to ignite the galaxy with astronomical wonders and celestial excitement."
          route="/Upcome"
        />
      
      </div>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Page1;

