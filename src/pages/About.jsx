
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="app-container">
      <div id="star-background" className="star-background"></div>
      <Header />
      
      <main className="main-content">
        <div className="about-container">
          <h1>About India Travel Guide</h1>
          <p>
            Welcome to India Travel Guide, your comprehensive resource for exploring the diverse beauty 
            and rich heritage of India. Our mission is to showcase the incredible destinations across 
            India and help travelers plan unforgettable journeys.
          </p>
          
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              We aim to promote sustainable tourism in India by highlighting both popular destinations 
              and hidden gems, while providing accurate and helpful information for travelers of all types.
            </p>
          </div>
          
          <div className="about-section">
            <h2>What We Offer</h2>
            <ul>
              <li>Detailed guides to Indian states and territories</li>
              <li>Curated lists of attractions, hotels, and restaurants</li>
              <li>Travel tips and cultural insights</li>
              <li>Personalized trip planning assistance</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
