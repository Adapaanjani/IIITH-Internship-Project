// SpaceTable.jsx
import React from 'react';
import './table.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Table = ({ data, title, className }) => (
  <div>
    <h2>{title}</h2>
    <div className="table-container">
      <table className={`space-table ${className}`}>
        <thead>
          <tr>
            {data[0].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const SpaceTable = () => {
  const planetData = [
      ['Planet', 'Distance from Sun (million km)', 'Diameter (km)', 'Moons', 'Gravity (m/s²)'],
       ['Mercury', '57.9', '4,880', '0', '3.7'],
         ['Venus', '108.2', '12,104', '0', '8.9'],
         ['Earth', '149.6', '12,742', '1', '9.8'],
         ['Mars', '227.9', '6,779', '2', '3.7'],
       ];
       const rocketData = [
            ['Rocket', 'Speed (km/h)', 'Payload Capacity (kg)', 'Launch Cost (million $)', 'Thrust (kN)'],
          ['Falcon 9','27,600',	'22,800','62',	'7,607'],
             ['Atlas V','28,000',	'20,520','110',	'9,600'],
             ['Delta IV Heavy',	'28,168',	'28,790',	'350',	'9,882'],
             ['Soyuz',	'27,600',	'7,020','48','4,147'],
             ['Space Shuttle',	'28,000',	'24,400',	'450 (retired)',	'30,000'],
             ['Long March 5',	'27,600',	'25,000',	'185',	'10,040'],
            ['PSLV',	'27,000',	'3,800',	'15',	'800'],
          ['H-IIA',	'27,000',	'10,000',	'90',	'2,950'],
           ['Proton',	'28,080','22,000',	'65','10,000'],
            
           ];
           const satelliteData = [
                ['Satellite', 'Orbit Type', 'Launch Date', 'Weight (kg)', 'Purpose'],
                 ['Hubble Space Telescope',	'Low Earth Orbit',	'April 24,1990',	'11,110',	'Astronomical observations'],
                 ['GPS IIR-10(M)','	Medium Earth Orbit',	'July 16,2003',	'2,032',	'Global Positioning System'],
                 ['ISS (International Space Station)','	Low Earth Orbit',	'November 20, 1998','	~420,000',	'Research and international cooperation'],
                 ['Landsat 8	','Sun-synchronous Orbit',	'February 11, 2013',	'2,723',	'Earth observation for land imaging'],
                ['TESS (Transiting Exoplanet Survey Satellite)','	High Earth Orbit',	'April 18, 2018',	'362',	'Exoplanet detection and observation'],
                ['Aqua',	'Sun-synchronous Orbit',	'May 4, 2002','3,000',	'Earth observation for climate research'],
                 ['RADARSAT-2',	'Sun-synchronous Orbit',	'December 14, 2007',	'2,300',	'Earth observation with synthetic aperture radar'],
                 ['GOES-16',	'Geostationary Orbit',	'November 19, 2016'	,'5,192',	'Weather monitoring and forecasting'],
                 ['Iridium NEXT',	'Low Earth Orbit','January 14, 2017',	'860',	'Satellite communication for Iridium constellation'],
               ['Amos-17',	'Geostationary Orbit',	'August 6, 2019',	'6,500',	'Communication services in Africa, Europe, and the Middle East'],
            
            //     // Add rows for satellite data
              ];
            
         const asteroidData = [
               ['Asteroid', 'Distance from Earth (million km)', 'Diameter (m)', 'Composition', 'Orbit Period (days)'],
                ['Ceres',	'414.9',	'590',	'Rocky, icy, metallic',	'1,682'],
                 ['Vesta',	'207.7',	'525',	'Rocky, metallic',	'1,325'],
                 ['Pallas',	'414.2',	'512',	'Rocky, metallic',	'1,683'],
                 ['Hygiea',	'426.6',	'434',	'Carbonaceous',	'1,708'],
                 ['Eros',	'225.9',	'34.4',	'Stony, metallic',	'642.9'],
                 ['Juno',	'315.3',	'258',	'Rocky, metallic',	'1,475'],
                 ['Psyche',	'370.4',	'~226',	'Metallic',	'1,630'],
                 ['Mathilde'	,'451.9'	,'~50','Carbonaceous',	'1,417',],
                ['Gaspra',	'261.1',	'~19',	'Stony',	'1,298'],
                
            
            //     // Add rows for asteroid data
               ];
      
  return (
    <div>
      <Navbar />
      <div className="table">
      <Table data={planetData} title="★彡[ᴘʟᴀɴᴇᴛꜱ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ]彡★" className="planet" />
      <Table data={rocketData} title="★彡[ʀᴏᴄᴋᴇᴛ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ]彡★" className="rocket" />
      <Table data={satelliteData} title="★彡[ꜱᴀᴛᴇʟʟɪᴛᴇ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ]彡★" className="satellite" />
      <Table data={asteroidData} title="★彡[ᴀꜱᴛᴇʀᴏɪᴅꜱ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ]彡★" className="asteroid" />
      </div>
      <Footer />
    </div>
  );
};

export default SpaceTable;


