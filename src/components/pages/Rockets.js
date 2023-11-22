import React from 'react';
import Navbar from '../Navbar';
import './PlanetsPage.css';
import Footer from '../Footer';

const Rockets = () => {
  const rocketsData = [
    { name: 'Falcon 9', description: 'A two-stage rocket designed and manufactured by SpaceX for reliable and safe transport of satellites and the Dragon spacecraft into orbit.', height: '70 meters', diameter: '3.7 meters', payloadCapacity: '22,800 kg to LEO', maidenFlight: 'June 4, 2010', imageSrc: 'https://1734811051.rsc.cdn77.org/data/images/full/375838/spacex-falcon-9-rocket-and-crew-dragon-capsule-launches-from-cape-canaveral-sending-astronauts-to-the-international-space-station.jpg' },
    { name: 'Atlas V', description: 'A family of expendable launch systems developed and operated by United Launch Alliance (ULA), capable of carrying a variety of payloads into space.', height: '58.3 meters', diameter: '3.81 meters', payloadCapacity: '18,814 kg to LEO', maidenFlight: 'August 21, 2002', imageSrc: 'https://th.bing.com/th/id/OIP.iyyUNWSeGGs68DR6tiwolQHaE7?rs=1&pid=ImgDetMain' },
    { name: 'Soyuz', description: 'A family of expendable launch vehicles developed by the Soviet Union and now operated by the Russian space agency Roscosmos.', height: '50.9 meters', diameter: '3.0 meters', payloadCapacity: '7,020 kg to LEO', maidenFlight: 'May 20, 2001', imageSrc: 'https://th.bing.com/th/id/OIP.-Ft40DnPa_A7d2oi4ho_HgHaFj?rs=1&pid=ImgDetMain' },
    { name: 'Delta IV Heavy', description: 'A heavy-lift launch vehicle developed by United Launch Alliance (ULA) capable of carrying the heaviest payloads to orbit.', height: '72.7 meters', diameter: '5.1 meters', payloadCapacity: '28,790 kg to LEO', maidenFlight: 'December 21, 2004', imageSrc: 'https://media.defense.gov/2012/Jun/29/2000137983/-1/-1/0/120629-F-NQ666-002.JPG' },
    { name: 'Space Launch System (SLS)', description: 'An upcoming heavy-lift launch vehicle designed by NASA for deep-space exploration missions.', height: '98.1 meters', diameter: '8.4 meters', payloadCapacity: '95,000 kg to LEO', maidenFlight: 'Scheduled for 2022', imageSrc: 'https://scitechdaily.com/images/Space-Launch-System-in-Flight-scaled.jpg' },
    { name: 'Proton-M', description: 'A heavy-lift launch vehicle developed by Khrunichev State Research and Production Space Center, commonly used for commercial and government satellite launches.', height: '58.2 meters', diameter: '7.4 meters', payloadCapacity: '22,000 kg to LEO', maidenFlight: 'April 7, 2001', imageSrc: 'https://th.bing.com/th/id/OIP.ZhBMqOQXm2uC_W83AHUL8AHaE8?rs=1&pid=ImgDetMain' },
  ];
  

  return (
    <div>
      <Navbar />
     
      <div className="planets-list">
        {rocketsData.map((rockets) => (
          <div className="planet-info" key={rockets.name}>
             <div className="planet-image">
              <img src={rockets.imageSrc} alt={rockets.name} />
            </div>
            <div className="text-content">
              <h2>{rockets.name}</h2>
              <p>{rockets.description}</p>
              <p>Height: {rockets.height}</p>
              <p>Diameter: {rockets.diameter} </p>
              <p>PayloadCapacity: {rockets.payloadCapacity} </p>
              <p>MaidenFlight: {rockets.maidenFlight} </p>
            </div>
           
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Rockets;

