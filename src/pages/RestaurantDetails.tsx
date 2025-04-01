
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getStateData } from '../data';
import { useToast } from "@/hooks/use-toast";
import '../styles/RestaurantDetails.css';

const RestaurantDetails = () => {
  const { stateId, restaurantId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [reservationDetails, setReservationDetails] = useState({
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  });
  
  // Get state data
  const stateData = getStateData(stateId);
  
  // Find the restaurant
  const restaurant = stateData?.restaurants?.find(restaurant => restaurant.id === parseInt(restaurantId));
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If restaurant not found, navigate back to home
    if (!restaurant && stateData) {
      navigate('/');
    }
  }, [restaurant, navigate, stateData]);
  
  if (!restaurant) {
    return <div className="loading">Loading...</div>;
  }

  // Function to handle reservation
  const handleReservation = () => {
    if (!reservationDetails.date || !reservationDetails.time) {
      toast({
        title: "Missing Information",
        description: "Please select a date and time for your reservation",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally send this to a backend
    toast({
      title: "Reservation Confirmed",
      description: `Your table at ${restaurant.name} has been reserved!`,
    });
    
    // Create a new booking object
    const newBooking = {
      id: Date.now().toString(),
      type: 'restaurant',
      name: restaurant.name,
      location: restaurant.location,
      date: reservationDetails.date,
      time: reservationDetails.time,
      guests: reservationDetails.guests,
      specialRequests: reservationDetails.specialRequests,
      status: 'confirmed',
      image: restaurant.image,
      stateId: stateId,
      itemId: restaurant.id
    };
    
    // In a real app, you would store this in a database
    // For now, we'll simulate by storing in localStorage
    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    existingBookings.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));
    
    // Redirect to bookings page after successful reservation
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

      <div className="restaurant-details-page">
        <div className="restaurant-details-container">
          <button 
            className="back-button" 
            onClick={() => navigate(-1)}
          >
            <i className="fas fa-arrow-left"></i> Back
          </button>
          
          <div className="restaurant-header">
            <h1>{restaurant.name}</h1>
            <div className="restaurant-location">
              <i className="fas fa-map-marker-alt"></i> {restaurant.location}
            </div>
            <div className="restaurant-rating">
              <span className="stars">{'★'.repeat(Math.floor(restaurant.rating))}{'☆'.repeat(5 - Math.floor(restaurant.rating))}</span>
              <span className="rating-value">{restaurant.rating}</span>
            </div>
            <div className="restaurant-cuisine">{restaurant.cuisine} Cuisine</div>
            <div className="price-range">Price Range: {restaurant.priceRange}</div>
          </div>
          
          <div className="restaurant-image-gallery">
            <img src={restaurant.image} alt={restaurant.name} className="main-image" />
          </div>
          
          <div className="restaurant-description">
            <h2>About the Restaurant</h2>
            <p>{restaurant.description}</p>
          </div>
          
          <div className="restaurant-specialties">
            <h2>Signature Dishes</h2>
            {restaurant.specialDishes ? (
              <ul className="specialty-list">
                {restaurant.specialDishes.map((dish, index) => (
                  <li key={index} className="specialty-item">
                    <i className="fas fa-utensils"></i>
                    <span>{dish}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Information about signature dishes not available for this restaurant.</p>
            )}
          </div>
          
          <div className="restaurant-features">
            <h2>Features</h2>
            <div className="features-grid">
              <div className="feature">
                <i className="fas fa-wifi"></i>
                <span>Free Wi-Fi</span>
              </div>
              <div className="feature">
                <i className="fas fa-glass-cheers"></i>
                <span>Full Bar</span>
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
                <i className="fas fa-leaf"></i>
                <span>Vegetarian Options</span>
              </div>
              <div className="feature">
                <i className="fas fa-fan"></i>
                <span>Air Conditioned</span>
              </div>
            </div>
          </div>
          
          <div className="hours-section">
            <h2>Opening Hours</h2>
            <div className="hours-grid">
              <div className="day">Monday - Thursday</div>
              <div className="time">12:00 PM - 10:00 PM</div>
              <div className="day">Friday - Saturday</div>
              <div className="time">12:00 PM - 11:00 PM</div>
              <div className="day">Sunday</div>
              <div className="time">12:00 PM - 9:00 PM</div>
            </div>
          </div>
          
          <div className="reservation-section">
            <h2>Reserve Your Table</h2>
            <div className="reservation-form">
              <div className="form-group">
                <label htmlFor="reservation-date">Date:</label>
                <input 
                  type="date" 
                  id="reservation-date"
                  className="date-input"
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setReservationDetails({...reservationDetails, date: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="reservation-time">Time:</label>
                <select 
                  id="reservation-time" 
                  className="time-select"
                  onChange={(e) => setReservationDetails({...reservationDetails, time: e.target.value})}
                  defaultValue=""
                  disabled={!reservationDetails.date}
                >
                  <option value="" disabled>Select a time</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="party-size">Party Size:</label>
                <select 
                  id="party-size" 
                  className="guest-select"
                  onChange={(e) => setReservationDetails({...reservationDetails, guests: parseInt(e.target.value)})}
                  defaultValue="2"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6+ People</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="special-requests">Special Requests:</label>
                <textarea 
                  id="special-requests"
                  className="request-textarea"
                  placeholder="Any dietary restrictions or special occasions?"
                  onChange={(e) => setReservationDetails({...reservationDetails, specialRequests: e.target.value})}
                ></textarea>
              </div>
            </div>
            <button 
              className="reserve-btn"
              onClick={handleReservation}
              disabled={!reservationDetails.date || !reservationDetails.time}
            >
              <i className="fas fa-calendar-check"></i> Reserve Table
            </button>
            <p className="reservation-info">
              Secure your table at {restaurant.name} to enjoy a memorable dining experience.
              Please arrive 15 minutes before your reservation time.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RestaurantDetails;
