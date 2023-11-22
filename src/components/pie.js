// PieCharts.js
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Navbar from './Navbar';
import Footer from './Footer';
import React, { useRef } from 'react';
const PieCharts = () => {

  const oxygenLevelsRef = useRef(null); // Create a ref for the Oxygen-levels chart

  const scrollToOxygenLevels = () => {
    // Scroll to the Oxygen-levels chart
    if (oxygenLevelsRef.current) {
      oxygenLevelsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const WaterlevelsRef = useRef(null); // Create a ref for the Oxygen-levels chart

  const scrollToWaterlevels = () => {
    // Scroll to the Oxygen-levels chart
    if (WaterlevelsRef.current) {
      WaterlevelsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const SuccessRateRef = useRef(null); // Create a ref for the Oxygen-levels chart

  const scrollToSuccessRate = () => {
    // Scroll to the Oxygen-levels chart
    if (SuccessRateRef.current) {
      SuccessRateRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const SATELLIETSRef = useRef(null); // Create a ref for the Oxygen-levels chart

  const scrollToSATELLIETS = () => {
    // Scroll to the Oxygen-levels chart
    if (SATELLIETSRef.current) {
      SATELLIETSRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const chartsConfig = [
    {
      title: 'Oxygen-levels',
      data: [
        { name: 'Earth',sliced: true, selected: true, y: 20.95 },
        { name: 'Mercury', y: 42 },
        { name: 'Mars', y: 0.13 },
        { name: 'Venus', y: 0.001  },
       
      
    
      ],
    },
    {
      title: 'Waterlevels',
      data: [
        { name: 'Earth',sliced: true, selected: true, y: 71 },
        { name: 'uranus',  y: 80 },
        { name: 'Mars', y: 14 },
        { name: 'neptune', y: 82  },
        { name: 'jupiter', y: 0.25 },

       
      ],
    },
    {
      title: 'SuccessRate(2023)',
      data: [
        { name: 'NASA', y: 64 },
        { name: 'ISRO', sliced: true, selected: true, y: 80},
        { name: 'SPACEX', y: 60},
        { name: 'CNSA', y: 30},
        { name: 'Roscosmos', y: 20 },
      ],
    },
    {
      
      
      title: 'SATELLIETS',
      data: [
        { name: 'NASA', y: 64 },
        { name: 'ISRO', sliced: true, selected: true, y: 80},
        { name: 'SPACEX', y: 60},
        { name: 'CNSA', y: 30},
        { name: 'Roscosmos', y: 20 },
      ],
    },
  ];

  const chartOptions = {
    chart: {
      type: 'pie',
    },
    title: {
      text: '',
    },
    tooltip: {
      valueSuffix: '%',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          distance: 20,
        },
      },
    },
  };

  return (
    <div>
      <Navbar />
      <div className="pie-charts-container">
        <div className='Matter'>
        <div>
        <h1>𝕊𝕋𝔸𝕋𝕀𝕊𝕋𝕀ℂ𝔸𝕃-𝕀ℕ𝔽𝕆</h1>
        <h3>Lets learn through statistics</h3>
        <p>Here in our website we did represented the statistical info through our research info. So we divided the topic into 4 and given seperate Statistical view for them</p>
        <li onClick={scrollToOxygenLevels} style={{ cursor: 'pointer' }}>Oxygen-levels
            </li>
            <li onClick={scrollToWaterlevels} style={{ cursor: 'pointer' }}>Water-levels
            </li>
            <li onClick={scrollToSuccessRate} style={{ cursor: 'pointer' }}>SuccessRate(2023)
            </li>
            <li onClick={scrollToSATELLIETS} style={{ cursor: 'pointer' }}>SATELLIETS
            </li>
      </div>
        </div>
        <div ref={oxygenLevelsRef} className="pie-chart">
          <h3>꧁༒☬𝓞𝔁𝔂𝓰𝓮𝓷-𝓵𝓮𝓿𝓮𝓵𝓼☬༒꧂</h3>
          <HighchartsReact highcharts={Highcharts} options={{ ...chartOptions, series: [{ name: 'Percentage', colorByPoint: true, data: chartsConfig[0].data }] }} />
        </div>
        <div ref={WaterlevelsRef} className="pie-chart">
          <h3>꧁༒☬𝓦𝓪𝓽𝓮𝓻-𝓵𝓮𝓿𝓮𝓵𝓼☬༒꧂</h3>
          <HighchartsReact highcharts={Highcharts} options={{ ...chartOptions, series: [{ name: 'Percentage', colorByPoint: true, data: chartsConfig[1].data }] }} />
        </div>
        <div ref={SuccessRateRef} className="pie-chart">
          <h3>꧁༒☬𝓢𝓾𝓬𝓬𝓮𝓼𝓼𝓡𝓪𝓽𝓮(2023)☬༒꧂</h3>
          <HighchartsReact highcharts={Highcharts} options={{ ...chartOptions, series: [{ name: 'Percentage', colorByPoint: true, data: chartsConfig[2].data }] }} />
        </div>
        <div ref={SATELLIETSRef} className="pie-chart">
          <h3>꧁༒☬𝓢𝓐𝓣𝓔𝓛𝓛𝓘𝓔𝓣𝓢☬༒꧂</h3>
          <HighchartsReact highcharts={Highcharts} options={{ ...chartOptions, series: [{ name: 'Percentage', colorByPoint: true, data: chartsConfig[3].data }] }} />
        </div>
        
       
      </div>
      <Footer />
    </div>
  );
};

export default PieCharts;
