
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getStateData } from '../data';
import { useToast } from "@/hooks/use-toast";
import '../styles/AttractionDetails.css';

const AttractionDetails = () => {
  const { stateId, attractionId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [ticketDetails, setTicketDetails] = useState({
    date: '',
    tickets: 2,
    ticketType: 'standard'
  });
  
  // Get state data
  const stateData = getStateData(stateId);
  
  // Find the attraction
  const attraction = stateData?.attractions?.find(attraction => attraction.id === parseInt(attractionId));
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If attraction not found, navigate back to home
    if (!attraction) {
      navigate('/');
    }
  }, [attraction, navigate]);
  
  if (!attraction) {
    return <div className="loading">Loading...</div>;
  }

  // Function to handle ticket booking
  const handleBookTickets = () => {
    if (!ticketDetails.date) {
      toast({
        title: "Missing Information",
        description: "Please select a date for your visit",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally send this to a backend
    toast({
      title: "Tickets Booked",
      description: `Your tickets for ${attraction.name} have been booked!`,
    });
    
    // Redirect to bookings page after successful booking
    setTimeout(() => {
      navigate('/bookings');
    }, 2000);
  };

  // Create stars for background
  useEffect(() => {
    const createStars = () => {
      const starContainer = document.getElementById('star-background');
      if (!starContainer) return;
      
      // Clear existing stars
      starContainer.innerHTML = '';
      
      // Create new stars
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star-bg';
        
        // Random position
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Random size (0.5px to 2px)
        const size = 0.5 + Math.random() * 1.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starContainer.appendChild(star);
      }
    };
    
    createStars();
  }, []);
  
  return (
    <div className="app-container">
      <div id="star-background" className="star-background"></div>
      <Header />

      <div className="attraction-details-page">
        <div className="attraction-details-container">
          <button 
            className="back-button" 
            onClick={() => navigate(-1)}
          >
            <i className="fas fa-arrow-left"></i> Back
          </button>
          
          <div className="attraction-header">
            <h1>{attraction.name}</h1>
            <div className="attraction-location">
              <i className="fas fa-map-marker-alt"></i> {attraction.location}
            </div>
            <div className="attraction-rating">
              <span className="stars">{'★'.repeat(Math.floor(attraction.rating))}{'☆'.repeat(5 - Math.floor(attraction.rating))}</span>
              <span className="rating-value">{attraction.rating}</span>
            </div>
            <div className="attraction-entry-fee">Entry Fee: {attraction.entryFee}</div>
          </div>
          
          <div className="attraction-image-gallery">
            <img src={attraction.image} alt={attraction.name} className="main-image" />
          </div>
          
          <div className="attraction-description">
            <h2>About the Attraction</h2>
            <p>{attraction.description}</p>
          </div>
          
          <div className="attraction-highlights">
            <h2>Highlights</h2>
            {attraction.highlights ? (
              <ul className="highlight-list">
                {attraction.highlights.map((highlight, index) => (
                  <li key={index} className="highlight-item">
                    <i className="fas fa-landmark"></i>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Information about highlights not available for this attraction.</p>
            )}
          </div>
          
          <div className="attraction-features">
            <h2>Features</h2>
            <div className="features-grid">
              <div className="feature">
                <i className="fas fa-clock"></i>
                <span>Open Daily</span>
              </div>
              <div className="feature">
                <i className="fas fa-camera"></i>
                <span>Photography Allowed</span>
              </div>
              <div className="feature">
                <i className="fas fa-restroom"></i>
                <span>Restrooms</span>
              </div>
              <div className="feature">
                <i className="fas fa-parking"></i>
                <span>Parking Available</span>
              </div>
              <div className="feature">
                <i className="fas fa-wheelchair"></i>
                <span>Wheelchair Accessible</span>
              </div>
              <div className="feature">
                <i className="fas fa-store"></i>
                <span>Gift Shop</span>
              </div>
            </div>
          </div>
          
          <div className="visiting-hours">
            <h2>Visiting Hours</h2>
            <div className="hours-grid">
              <div className="day">Monday - Friday</div>
              <div className="time">9:00 AM - 5:00 PM</div>
              <div className="day">Saturday - Sunday</div>
              <div className="time">8:00 AM - 6:00 PM</div>
              <div className="day">Public Holidays</div>
              <div className="time">10:00 AM - 4:00 PM</div>
            </div>
          </div>
          
          <div className="visitor-tips">
            <h2>Visitor Tips</h2>
            <ul className="tips-list">
              <li><i className="fas fa-lightbulb"></i> Best time to visit is early morning to avoid crowds</li>
              <li><i className="fas fa-lightbulb"></i> Bring comfortable walking shoes</li>
              <li><i className="fas fa-lightbulb"></i> Guided tours available every hour</li>
              <li><i className="fas fa-lightbulb"></i> Plan to spend at least 2-3 hours for the full experience</li>
              <li><i className="fas fa-lightbulb"></i> Water bottles and sunscreen recommended during summer</li>
            </ul>
          </div>
          
          <div className="ticket-section">
            <h2>Get Your Tickets</h2>
            <div className="ticket-form">
              <div className="form-group">
                <label htmlFor="visit-date">Visit Date:</label>
                <input 
                  type="date" 
                  id="visit-date"
                  className="date-input"
                  onChange={(e) => setTicketDetails({...ticketDetails, date: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ticket-quantity">Number of Tickets:</label>
                <select 
                  id="ticket-quantity" 
                  className="ticket-select"
                  onChange={(e) => setTicketDetails({...ticketDetails, tickets: parseInt(e.target.value)})}
                  defaultValue="2"
                >
                  <option value="1">1 Ticket</option>
                  <option value="2">2 Tickets</option>
                  <option value="3">3 Tickets</option>
                  <option value="4">4 Tickets</option>
                  <option value="5">5+ Tickets</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="ticket-type">Ticket Type:</label>
                <select 
                  id="ticket-type" 
                  className="ticket-select"
                  onChange={(e) => setTicketDetails({...ticketDetails, ticketType: e.target.value})}
                  defaultValue="standard"
                >
                  <option value="standard">Standard</option>
                  <option value="premium">Premium (Fast Track)</option>
                  <option value="guided">Guided Tour</option>
                </select>
              </div>
            </div>
            <button 
              className="ticket-now-btn"
              onClick={handleBookTickets}
            >
              <i className="fas fa-ticket-alt"></i> Book Tickets
            </button>
            <p className="ticket-info">
              Skip the line by booking your tickets in advance for {attraction.name}.
              Special discounts available for students and senior citizens.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AttractionDetails;
