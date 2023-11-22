// Satellite.jsx
import React from 'react';
import Navbar from '../Navbar';
import './PlanetsPage.css';
import Footer from '../Footer';

const Upcome = () => {
  const upcomingEventsData = [
    { name: 'James Webb Space Telescope Launch', description: 'The launch of the James Webb Space Telescope, the most powerful space telescope ever built, is scheduled for December 18, 2021.', date: 'December 18, 2021', imageSrc: 'https://earthsky.org/upl/2020/10/nasa-james-webb-space-telescope-2021-photo-scaled.jpg' },
    { name: 'Artemis Program - Lunar Gateway Construction', description: 'As part of NASA\'s Artemis program, the construction of the Lunar Gateway, a space station orbiting the Moon, is set to begin in early 2022.', date: 'Early 2022', imageSrc: 'https://th.bing.com/th/id/OIP.wb1PxjK0tnDUmPsxtNP6PAHaEL?rs=1&pid=ImgDetMain' },
    { name: 'SpaceX Starship Moon Mission', description: 'SpaceX plans to send its Starship spacecraft on a mission around the Moon with Japanese billionaire Yusaku Maezawa and a group of artists, tentatively scheduled for 2023.', date: '2023', imageSrc: 'https://1734811051.rsc.cdn77.org/data/images/full/383713/spacex-nasa-artemis-moon-mission.jpg' },
    { name: 'Europa Clipper Mission', description: 'NASA\'s Europa Clipper mission, set to launch in the 2020s, will conduct detailed reconnaissance of Jupiter\'s moon Europa to investigate whether the moon could harbor conditions suitable for life.', date: '2020s', imageSrc: 'https://th.bing.com/th/id/OIP.xPjoTG4oLWgEWH1H6wvfgQHaEK?rs=1&pid=ImgDetMain' },
    { name: 'Space Launch System (SLS) Maiden Flight', description: 'The maiden flight of NASA\'s Space Launch System, the most powerful rocket ever built, is expected to take place in the coming years, with an initial mission carrying the Artemis I spacecraft.', date: 'TBD', imageSrc: 'https://cbsnews2.cbsistatic.com/hub/i/r/2021/03/18/c698fad2-addf-4a40-8ed4-42d7aba9bdb4/thumbnail/1200x630/b54bfd4895c5c0343c9cb792dad18228/313646-skyfly-block-1-r1-copy.jpg' },
    { name: 'Commercial Lunar Payload Services (CLPS) Missions', description: 'Multiple robotic missions to the Moon under NASA\'s CLPS program are scheduled to deliver scientific instruments and technology demonstrations in the next few years.', date: 'Ongoing', imageSrc: 'https://www.aac-clyde.space/wp-content/uploads/2021/11/IM-1.jpg' },
  ];

  return (
    <div>
      <Navbar />

      <div className="planets-list">
        {upcomingEventsData.map((event) => (
          <div className="planet-info" key={event.name}>
            <div className="planet-image">
              <img src={event.imageSrc} alt={event.name} />
            </div>
            <div className="text-content">
              <h2>{event.name}</h2>
              <p>{event.description}</p>
              <p>Date: {event.date}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Upcome;
