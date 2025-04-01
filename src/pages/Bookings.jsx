
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from "@/hooks/use-toast";
import '../styles/Bookings.css';

const Bookings = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  // This would normally come from a database
  const dummyBookings = user ? [
    {
      id: 'b1',
      type: 'hotel',
      name: 'The Leela Palace',
      location: 'Gujarat',
      checkIn: '2024-12-01',
      checkOut: '2024-12-05',
      guests: 2,
      status: 'confirmed',
      image: '/gujarat1.jpg'
    },
    {
      id: 'b2',
      type: 'hotel',
      name: 'Himalayan Resort',
      location: 'Himachal Pradesh',
      checkIn: '2025-01-15',
      checkOut: '2025-01-20',
      guests: 3,
      status: 'pending',
      image: '/himachal-pradesh1.jpg'
    },
    {
      id: 'b3',
      type: 'restaurant',
      name: 'Spice Garden',
      location: 'Kerala',
      date: '2024-11-20',
      time: '19:00',
      guests: 4,
      status: 'confirmed',
      image: '/kerala1.jpg'
    },
    {
      id: 'b4',
      type: 'attraction',
      name: 'Taj Mahal Tour',
      location: 'Uttar Pradesh',
      date: '2024-10-15',
      time: '09:00',
      tickets: 2,
      ticketType: 'Premium',
      status: 'confirmed',
      image: '/uttar-pradesh1.jpg'
    }
  ] : [];
  
  const formatDate = (dateString) => {
    const options = { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const handleCancelBooking = (bookingId) => {
    toast({
      title: "Booking Cancelled",
      description: "Your booking has been successfully cancelled.",
    });
    
    // In a real app, you would remove the booking from the database
    // For now, we'll just show the toast
  };
  
  return (
    <div className="app-container">
      <div id="star-background" className="star-background"></div>
      <Header />
      
      <main className="main-content bookings-page">
        <div className="bookings-container">
          <h1 className="bookings-title">My Bookings</h1>
          
          {user ? (
            <>
              {dummyBookings.length > 0 ? (
                <div className="bookings-list">
                  {dummyBookings.map(booking => (
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
                        <button className="booking-btn view-btn">
                          <i className="fas fa-eye"></i> View Details
                        </button>
                        <button className="booking-btn modify-btn">
                          <i className="fas fa-pencil-alt"></i> Modify
                        </button>
                        <button 
                          className="booking-btn cancel-btn"
                          onClick={() => handleCancelBooking(booking.id)}
                        >
                          <i className="fas fa-times"></i> Cancel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-bookings">
                  <i className="fas fa-calendar-times"></i>
                  <h2>No Bookings Found</h2>
                  <p>You haven't made any bookings yet. Start planning your adventure today!</p>
                  <button className="explore-btn">Explore Destinations</button>
                </div>
              )}
            </>
          ) : (
            <div className="login-required">
              <i className="fas fa-lock"></i>
              <h2>Login Required</h2>
              <p>Please log in to view your bookings</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Bookings;
