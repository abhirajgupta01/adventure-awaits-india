
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="app-container">
      <div id="star-background" className="star-background"></div>
      <Header />
      
      <main className="main-content">
        <div className="home-container">
          <h1>Welcome to India Travel Guide</h1>
          <p>Your gateway to exploring the rich heritage and diverse landscapes of India</p>
          
          <div className="action-buttons">
            <Link to="/explore-states" className="action-button">
              <i className="fas fa-map-marked-alt"></i>
              <span>Explore States</span>
            </Link>
            <Link to="/about" className="action-button">
              <i className="fas fa-info-circle"></i>
              <span>About Us</span>
            </Link>
            <Link to="/contact" className="action-button">
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
