
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getStateData } from '../data';
import { useToast } from "@/hooks/use-toast";
import '../styles/HotelDetails.css';

const HotelDetails = () => {
  const { stateId, hotelId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [bookingDate, setBookingDate] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2
  });
  
  // Get state data
  const stateData = getStateData(stateId);
  
  // Find the hotel
  const hotel = stateData?.hotels?.find(hotel => hotel.id === parseInt(hotelId));
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If hotel not found, navigate back to home
    if (!hotel && stateData) {
      navigate('/');
    }
  }, [hotel, navigate, stateData]);
  
  if (!hotel) {
    return <div className="loading">Loading...</div>;
  }

  // Function to handle booking
  const handleBooking = () => {
    if (!bookingDate.checkIn || !bookingDate.checkOut) {
      toast({
        title: "Missing Information",
        description: "Please select check-in and check-out dates",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally send this to a backend
    toast({
      title: "Booking Successful",
      description: `Your stay at ${hotel.name} has been booked!`,
    });
    
    // Create a new booking object (in a real app, this would be saved to a database)
    const newBooking = {
      id: Date.now().toString(),
      type: 'hotel',
      name: hotel.name,
      location: hotel.location,
      checkIn: bookingDate.checkIn,
      checkOut: bookingDate.checkOut,
      guests: bookingDate.guests,
      status: 'confirmed',
      image: hotel.image,
      stateId: stateId,
      itemId: hotel.id
    };
    
    // In a real app, you would store this in a database
    // For now, we could simulate by storing in localStorage
    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    existingBookings.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));
    
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

      <div className="hotel-details-page">
        <div className="hotel-details-container">
          <button 
            className="back-button" 
            onClick={() => navigate(-1)}
          >
            <i className="fas fa-arrow-left"></i> Back
          </button>
          
          <div className="hotel-header">
            <h1>{hotel.name}</h1>
            <div className="hotel-location">
              <i className="fas fa-map-marker-alt"></i> {hotel.location}
            </div>
            <div className="hotel-rating">
              <span className="stars">{'★'.repeat(Math.floor(hotel.rating))}{'☆'.repeat(5 - Math.floor(hotel.rating))}</span>
              <span className="rating-value">{hotel.rating}</span>
            </div>
            <div className="price-range">Price: {hotel.priceRange}</div>
          </div>
          
          <div className="hotel-image-gallery">
            <img src={hotel.image} alt={hotel.name} className="main-image" />
          </div>
          
          <div className="hotel-description">
            <h2>About the Hotel</h2>
            <p>{hotel.description}</p>
          </div>
          
          <div className="hotel-specialties">
            <h2>What Makes Us Special</h2>
            {hotel.specialFeatures ? (
              <ul className="specialty-list">
                {hotel.specialFeatures.map((feature, index) => (
                  <li key={index} className="specialty-item">
                    <i className="fas fa-gem"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Information about specialties not available for this hotel.</p>
            )}
          </div>
          
          <div className="hotel-amenities">
            <h2>Amenities</h2>
            <div className="amenities-grid">
              <div className="amenity">
                <i className="fas fa-wifi"></i>
                <span>Free Wi-Fi</span>
              </div>
              <div className="amenity">
                <i className="fas fa-swimming-pool"></i>
                <span>Swimming Pool</span>
              </div>
              <div className="amenity">
                <i className="fas fa-concierge-bell"></i>
                <span>Room Service</span>
              </div>
              <div className="amenity">
                <i className="fas fa-spa"></i>
                <span>Spa</span>
              </div>
              <div className="amenity">
                <i className="fas fa-dumbbell"></i>
                <span>Fitness Center</span>
              </div>
              <div className="amenity">
                <i className="fas fa-utensils"></i>
                <span>Restaurant</span>
              </div>
            </div>
          </div>
          
          <div className="booking-section">
            <h2>Book Your Stay</h2>
            <div className="booking-form">
              <div className="booking-dates">
                <div className="form-group">
                  <label htmlFor="check-in">Check-in Date:</label>
                  <input 
                    type="date" 
                    id="check-in"
                    className="date-input"
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setBookingDate({...bookingDate, checkIn: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="check-out">Check-out Date:</label>
                  <input 
                    type="date" 
                    id="check-out"
                    className="date-input"
                    min={bookingDate.checkIn || new Date().toISOString().split('T')[0]}
                    onChange={(e) => setBookingDate({...bookingDate, checkOut: e.target.value})}
                    disabled={!bookingDate.checkIn}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="guests">Number of Guests:</label>
                <select 
                  id="guests" 
                  className="guests-select"
                  onChange={(e) => setBookingDate({...bookingDate, guests: parseInt(e.target.value)})}
                  defaultValue="2"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>
            </div>
            <button 
              className="book-now-btn"
              onClick={handleBooking}
              disabled={!bookingDate.checkIn || !bookingDate.checkOut}
            >
              <i className="fas fa-calendar-check"></i> Book Now
            </button>
            <p className="booking-info">
              Secure your reservation for an unforgettable experience at {hotel.name}.
              Special rates available for extended stays.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HotelDetails;
