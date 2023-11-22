import React from 'react';
import Navbar from '../Navbar';
import './PlanetsPage.css';
import Footer from '../Footer';

const Satellite = () => {
  const satellitesData = [
    { name: 'Hubble Space Telescope', description: 'A space telescope known for its contributions to astronomy and stunning images of the cosmos.', diameter: '2.4 meters', mass: '11,110 kg', launchDate: 'April 24, 1990', imageSrc: 'https://th.bing.com/th/id/R.ac087eec3d575a40cafe2c71bc20fcba?rik=nWpQ5O9rn7EHbQ&riu=http%3a%2f%2fmedia2.s-nbcnews.com%2fj%2fMSNBC%2fComponents%2fPhoto%2f_new%2f090527-hubble-telescope-hmed-8a.grid-6x2.jpg&ehk=m8TozT48wRkT9nq1CVmigm6Q0p9C2pjRgJDYBePVrSc%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'International Space Station (ISS)', description: 'A habitable artificial satellite that serves as a space environment research laboratory and international research station.', diameter: '72.8 meters (truss segment length)', mass: '420,000 kg', launchDate: 'November 20, 1998', imageSrc: 'https://th.bing.com/th/id/OIP.EdYzmurq76LxL1tQHzO88QHaE8?w=1200&h=800&rs=1&pid=ImgDetMainJ0' },
    { name: 'GPS IIR-21 (Navstar 64)', description: 'A Global Positioning System (GPS) satellite providing navigation and timing information to military and civilian users.', diameter: 'Not specified', mass: '2,032 kg', launchDate: 'March 24, 2009', imageSrc: 'https://th.bing.com/th/id/OIP.VyEq7Y4oDjG62YFcdt8QTwHaEo?w=460&h=288&rs=1&pid=ImgDetMain' },
    { name: 'Landsat 8', description: 'An Earth observation satellite capturing images of the Earth surface for scientific research and environmental monitoring.', diameter: 'Not specified', mass: '2,071 kg', launchDate: 'February 11, 2013', imageSrc: 'https://static.eos.com/wp-content/uploads/2020/09/landsat_8_01.jpg' },
    { name: 'Tiangong-1', description: 'China\'s first space station module, used for space experiments and as a testbed for future modules.', diameter: '3.35 meters', mass: '8,506 kg', launchDate: 'September 29, 2011', imageSrc: 'https://cdn.newsapi.com.au/image/v1/501009d87c71c722ad991349aa452e4a' },
    { name: 'Astra 2G', description: 'A communications satellite providing television, radio broadcasting, and broadband services across Europe, the Middle East, and Africa.', diameter: 'Not specified', mass: '6,070 kg', launchDate: 'December 27, 2014', imageSrc: 'https://th.bing.com/th/id/R.db7eea2fabc27462a7898ddbc68799be?rik=9MxDY16AdgoKuw&riu=http%3a%2f%2fspaceflight101.com%2fspacecraft%2fwp-content%2fuploads%2fsites%2f18%2f2015%2f09%2f8964951_orig-512x384.jpg&ehk=6r1xIq3YQmlAhQVFejH3iuQ91e2ne3BXm6lRRaqE9s4%3d&risl=&pid=ImgRaw&r=0' },
  ];

  return (
    <div>
      <Navbar />
     
      <div className="planets-list">
        {satellitesData.map((satellites) => (
          <div className="planet-info" key={satellites.name}>
             <div className="planet-image">
              <img src={satellites.imageSrc} alt={satellites.name} />
            </div>
            <div className="text-content">
              <h2>{satellites.name}</h2>
              <p>{satellites.description}</p>
              <p>Diameter: {satellites.diameter} km</p>
              <p>Mass: {satellites.mass} kg</p>
              <p>launchDate: {satellites.launchDate}</p>

              {/* Add more details as needed */}
            </div>
           
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Satellite;

