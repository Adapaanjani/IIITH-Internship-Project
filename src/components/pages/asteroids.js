import React from 'react';
import Navbar from '../Navbar';
import './PlanetsPage.css';
import Footer from '../Footer';

const Asteroid = () => {
  const asteroidsData = [
    { name: 'Ceres', description: 'The largest object in the asteroid belt, classified as a dwarf planet.', diameter: 590, mass: 9.3835e20, composition: 'Rocky, icy', orbitPeriod: '4.6 years', imageSrc: 'https://th.bing.com/th/id/R.f45893e1f7079d7d73a0dd14d30b2598?rik=zATbo3%2f17ExzJQ&riu=http%3a%2f%2fwww.towleroad.com%2fwp-content%2fuploads%2f2015%2f12%2fceres.jpg&ehk=k6mcsqAFwAA0frS5a9iCp8OvnIw74ygmKb%2bfel8WPRI%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1' },
    { name: 'Vesta', description: 'One of the largest objects in the asteroid belt, with a complex surface.', diameter: 525, mass: 2.5908e20, composition: 'Rocky', orbitPeriod: '3.6 years', imageSrc: 'https://th.bing.com/th/id/R.78cb0c54daa44e73b9d0c7c175c64e48?rik=Y3ZE5EtMVl%2fzwg&riu=http%3a%2f%2fimage.pbs.org%2fposter_images%2fassets%2fnpls12_int_vesta_thumb.jpg.resize.710x399.jpg&ehk=9daviJ86OcjpDe27NG%2fzcOuCsVUf2Cj8zv75GbnJcqk%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'Pallas', description: 'The second-largest object in the asteroid belt, spherical in shape.', diameter: 544, mass: 2.1102e20, composition: 'Rocky', orbitPeriod: '4.6 years', imageSrc: 'https://media.sketchfab.com/models/58ccd2682c6b40249dd82ee3ad48ff9c/thumbnails/6b2204dbdc084a8f8c073ba1fe983209/2b79bd1207c84125baca2605630bab83.jpeg' },
    { name: 'Hygiea', description: 'The fourth-largest object in the asteroid belt, spherical and relatively dark.', diameter: 431, mass: 8.4e19, composition: 'Rocky', orbitPeriod: '5.6 years', imageSrc: 'https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1126000/1127588.jpg' },
    { name: 'Eros', description: 'An elongated asteroid with a highly irregular shape, visited by spacecraft.', diameter: 16, mass: 6.69e15, composition: 'Rocky', orbitPeriod: '1.7 years', imageSrc: 'https://th.bing.com/th/id/R.7ed120e93afd3e0717d29de2a5b4b21f?rik=VyYHPhMOe%2b2JPA&riu=http%3a%2f%2fim.rediff.com%2fnews%2f2012%2ffeb%2f01eros1.jpg&ehk=WZo6HtdDOXHuRD9d%2bNxitwgnpNKdG%2bGYpkW64zcx4nk%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1' },
    { name: 'Gaspra', description: 'Small asteroid visited by the Galileo spacecraft, characterized by grooves and ridges.', diameter: 19, mass: 2.07e15, composition: 'Rocky', orbitPeriod: '3.3 years', imageSrc: 'https://i2-prod.walesonline.co.uk/news/uk-news/article26418404.ece/ALTERNATES/s615/0_dont-make-plans-973802.jpg' },
    
  ];
  

  return (
    <div>
      <Navbar />
      
      <div className="planets-list">

        {asteroidsData.map((asteroids) => (
          <div className="planet-info" key={asteroids.name}>
            <div className="planet-image">
              <img src={asteroids.imageSrc} alt={asteroids.name} />
            </div>
            <div className="text-content">
              <h2>{asteroids.name}</h2>
              <p>{asteroids.description}</p>
              <p>Diameter: {asteroids.diameter} km</p>
              <p>Mass: {asteroids.mass} kg</p>
              <p>Composition: {asteroids.composition} kg</p>
              <p>OrbitPeriod: {asteroids.orbitPeriod} kg</p>
              {/* Add more details as needed */}
            </div>
            
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Asteroid;


