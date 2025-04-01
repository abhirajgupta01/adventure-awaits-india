
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="app-container">
      <div id="star-background" className="star-background"></div>
      <Header />
      
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Discover India's Magic</h1>
            <p>Explore the diversity and richness of incredible India</p>
            <Link to="/explore-states" className="cta-button">
              Start Exploring Now
            </Link>
          </div>
        </div>
        
        <div className="featured-destinations">
          <h2>Featured Destinations</h2>
          <div className="destination-cards">
            <Link to="/state/kerala" className="destination-card">
              <img src="/kerala1.jpg" alt="Kerala" />
              <div className="card-content">
                <h3>Kerala</h3>
                <p>God's Own Country</p>
              </div>
            </Link>
            <Link to="/state/rajasthan" className="destination-card">
              <img src="/rajasthan1.jpg" alt="Rajasthan" />
              <div className="card-content">
                <h3>Rajasthan</h3>
                <p>Land of Kings</p>
              </div>
            </Link>
            <Link to="/state/himachalPradesh" className="destination-card">
              <img src="/himachal-pradesh1.jpg" alt="Himachal Pradesh" />
              <div className="card-content">
                <h3>Himachal Pradesh</h3>
                <p>The Abode of Snow</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
