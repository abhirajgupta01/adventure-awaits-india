
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from "@/hooks/use-toast";
import '../styles/Bookings.css';

const Bookings = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [bookings, setBookings] = useState([]);
  
  // Fetch bookings from localStorage on component mount
  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(storedBookings);
  }, []);
  
  const formatDate = (dateString) => {
    const options = { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const handleCancelBooking = (bookingId) => {
    // Update the status of the booking to 'cancelled'
    const updatedBookings = bookings.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: 'cancelled' } 
        : booking
    );
    
    // Save updated bookings to localStorage
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    
    // Update state
    setBookings(updatedBookings);
    
    toast({
      title: "Booking Cancelled",
      description: "Your booking has been successfully cancelled.",
    });
  };
  
  return (
    <div className="app-container">
      <div id="star-background" className="star-background"></div>
      <Header />
      
      <main className="main-content bookings-page">
        <div className="bookings-container">
          <h1 className="bookings-title">My Bookings</h1>
          
          {user || bookings.length > 0 ? (
            <>
              {bookings.length > 0 ? (
                <div className="bookings-list">
                  {bookings.map(booking => (
                    <div key={booking.id} className="booking-card">
                      <div className="booking-image">
                        <img src={booking.image} alt={booking.name} />
                        <div className={`booking-status ${booking.status}`}>
                          {booking.status}
                        </div>
                      </div>
                      <div className="booking-details">
                        <h2 className="booking-hotel">{booking.name}</h2>
                        <p className="booking-location">
                          <i className="fas fa-map-marker-alt"></i> {booking.location}
                        </p>
                        
                        {booking.type === 'hotel' ? (
                          <div className="booking-dates">
                            <div className="date-group">
                              <span className="date-label">Check-in</span>
                              <span className="date-value">{formatDate(booking.checkIn)}</span>
                            </div>
                            <div className="date-group">
                              <span className="date-label">Check-out</span>
                              <span className="date-value">{formatDate(booking.checkOut)}</span>
                            </div>
                          </div>
                        ) : booking.type === 'restaurant' ? (
                          <div className="booking-dates">
                            <div className="date-group">
                              <span className="date-label">Date</span>
                              <span className="date-value">{formatDate(booking.date)}</span>
                            </div>
                            <div className="date-group">
                              <span className="date-label">Time</span>
                              <span className="date-value">{booking.time}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="booking-dates">
                            <div className="date-group">
                              <span className="date-label">Visit Date</span>
                              <span className="date-value">{formatDate(booking.date)}</span>
                            </div>
                            <div className="date-group">
                              <span className="date-label">Ticket Type</span>
                              <span className="date-value">{booking.ticketType}</span>
                            </div>
                          </div>
                        )}
                        
                        <p className="booking-guests">
                          <i className="fas fa-user"></i> {booking.guests || booking.tickets} {booking.type === 'attraction' ? 'Tickets' : 'Guests'}
                        </p>
                      </div>
                      <div className="booking-actions">
                        <Link 
                          to={`/state/${booking.stateId}/${booking.type}/${booking.itemId}`} 
                          className="booking-btn view-btn"
                        >
                          <i className="fas fa-eye"></i> View Details
                        </Link>
                        <button className="booking-btn modify-btn">
                          <i className="fas fa-pencil-alt"></i> Modify
                        </button>
                        {booking.status !== 'cancelled' && (
                          <button 
                            className="booking-btn cancel-btn"
                            onClick={() => handleCancelBooking(booking.id)}
                          >
                            <i className="fas fa-times"></i> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-bookings">
                  <i className="fas fa-calendar-times"></i>
                  <h2>No Bookings Found</h2>
                  <p>You haven't made any bookings yet. Start planning your adventure today!</p>
                  <Link to="/explore-states" className="explore-btn">Explore Destinations</Link>
                </div>
              )}
            </>
          ) : (
            <div className="login-required">
              <i className="fas fa-lock"></i>
              <h2>Login Required</h2>
              <p>Please log in to view your bookings</p>
              <Link to="/login" className="login-btn">Login Now</Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Bookings;
