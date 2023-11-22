// PlanetsPage.js

import React from 'react';
import Navbar from '../Navbar';
import './PlanetsPage.css';
import Footer from '../Footer';

const PlanetsPage = () => {
  const planetsData = [
    // Sample data for illustration
    { name: 'Mercury', description: 'The smallest planet in our solar system.', diameter: 4879, mass: 3.3011e23, atmosphere: 'Minimal atmosphere', imageSrc: 'mercur.jpg' },
  { name: 'Venus', description: 'Known for its thick, toxic atmosphere.', diameter: 12104, mass: 4.8675e24, atmosphere: 'Carbon dioxide, sulfuric acid clouds', imageSrc: 'https://static01.nyt.com/images/2020/09/22/science/19SCI-OUTTHERE-VENUS1/19SCI-OUTTHERE-VENUS1-superJumbo.jpg?quality=90&auto=webp' },
  { name: 'EARTH', description: 'Home to a diverse range of life forms and a variety of ecosystems.', diameter: 12742, mass: 5.972e24, atmosphere: 'Nitrogen, oxygen, argon, others', imageSrc: 'earth (1).jpg' },
  { name: 'JUPITER', description: 'Largest planet in our solar system, known for its massive size and strong magnetic field.', diameter: 139820, mass: 1.898e27, atmosphere: 'Hydrogen, helium, methane, ammonia', imageSrc: 'jupi.jpg' },
  { name: 'SATURN', description: 'Famous for its stunning ring system, composed mainly of ice particles and dust.', diameter: 116460, mass: 5.683e26, atmosphere: 'Hydrogen, helium, methane, ammonia', imageSrc: 'https://www.refinery29.com/images/10414427.jpg?crop=40:21' },
  { name: 'URANUS', description: 'An ice giant with a unique feature – it rotates on its side compared to other planets.', diameter: 50724, mass: 8.681e25, atmosphere: 'Hydrogen, helium, methane', imageSrc: 'https://i2-prod.mirror.co.uk/science/article11370299.ece/ALTERNATES/s1200b/1_Uranus.jpg' },
  { name: 'NEPTUNE', description: 'Known for its deep blue color and strong winds, it is the farthest known planet from the Sun.', diameter: 49244, mass: 1.024e26, atmosphere: 'Hydrogen, helium, methane', imageSrc: 'https://th.bing.com/th/id/OIP.nwr_iAhVMylbbAM76FTNeQHaE7?rs=1&pid=ImgDetMain' },
  { name: 'MARS', description: 'Referred to as the "Red Planet," Mars has a thin atmosphere and is home to the tallest volcano and the deepest canyon in the solar system.', diameter: 6779, mass: 6.417e23, atmosphere: 'Carbon dioxide, nitrogen, argon', imageSrc: 'https://nineplanets.org/wp-content/uploads/2020/09/LIFT-Mars-the-Red-Planet-1600x900-1.jpg' },
  // Add more planets with their details
  ];

  return (
    <div>
      <Navbar />
      
      <div className="planets-list">
        {planetsData.map((planet) => (
          <div className="planet-info" key={planet.name}>
            <div className="planet-image">
              <img src={planet.imageSrc} alt={planet.name} />
            </div>
            <div className="text-content">
              <h2>{planet.name}</h2>
              <p>{planet.description}</p>
              <p>Diameter: {planet.diameter} km</p>
              <p>Mass: {planet.mass} kg</p>
              <p>Atmosphere; {planet.atmosphere}</p>
              {/* Add more details as needed */}
            </div>
            
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default PlanetsPage;

