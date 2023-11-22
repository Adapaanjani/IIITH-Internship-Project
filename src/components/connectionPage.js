// src/TwoColumnPage.js
import React from 'react';
import FeedbackForm from './FeedbackPage';
import './connectionPage.css'
import Navbar from './Navbar';// Assume you have a FeedbackForm component

const Page = () => {
  return (
    <div>
        <Navbar/>
   
   
      <div className="right-column">
        <FeedbackForm />
      </div>
    </div>
  );
};

export default Page;
