
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Bookings = () => {
  // Mock data for bookings
  const hotelBookings = [
    {
      id: 'h1',
      name: 'The Taj Palace',
      location: 'New Delhi',
      checkIn: '2024-09-15',
      checkOut: '2024-09-18',
      roomType: 'Luxury Suite',
      guests: 2,
      amount: '₹45,000',
      status: 'Confirmed',
      bookingId: 'HB78945612'
    },
    {
      id: 'h2',
      name: 'The Oberoi Udaivilas',
      location: 'Udaipur',
      checkIn: '2024-09-20',
      checkOut: '2024-09-23',
      roomType: 'Premiere Lake View Room',
      guests: 2,
      amount: '₹72,000',
      status: 'Pending',
      bookingId: 'HB78945613'
    }
  ];

  const restaurantBookings = [
    {
      id: 'r1',
      name: 'Bukhara',
      location: 'ITC Maurya, New Delhi',
      date: '2024-09-16',
      time: '19:30',
      guests: 4,
      specialRequests: 'Window seating preferred',
      status: 'Confirmed',
      bookingId: 'RB45678901'
    }
  ];

  const attractionTickets = [
    {
      id: 'a1',
      name: 'Taj Mahal Guided Tour',
      location: 'Agra',
      date: '2024-09-19',
      time: '09:00',
      ticketType: 'Premium Guide + Skip the Line',
      tickets: 2,
      amount: '₹4,500',
      status: 'Confirmed',
      bookingId: 'AT12345678'
    }
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto py-16 px-4 md:px-8">
        <h1 className="india-heading text-center mb-10">My Bookings</h1>
        
        <Tabs defaultValue="hotels" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="hotels">Hotel Bookings</TabsTrigger>
            <TabsTrigger value="restaurants">Restaurant Reservations</TabsTrigger>
            <TabsTrigger value="attractions">Attraction Tickets</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hotels" className="space-y-6">
            {hotelBookings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">You don't have any hotel bookings yet.</p>
                <Button className="mt-4 bg-india-saffron hover:bg-india-maroon">
                  Browse Hotels
                </Button>
              </div>
            ) : (
              hotelBookings.map(booking => (
                <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0">
                    <div>
                      <CardTitle>{booking.name}</CardTitle>
                      <CardDescription>{booking.location}</CardDescription>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 
                      booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {booking.status}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Check-in</p>
                        <p className="font-medium">{formatDate(booking.checkIn)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Check-out</p>
                        <p className="font-medium">{formatDate(booking.checkOut)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Room Type</p>
                        <p className="font-medium">{booking.roomType}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex flex-wrap justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Booking ID</p>
                          <p className="font-medium">{booking.bookingId}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Guests</p>
                          <p className="font-medium">{booking.guests} Persons</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Amount</p>
                          <p className="font-medium">{booking.amount}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">View Details</Button>
                    <Button className="bg-india-saffron hover:bg-india-maroon">
                      Manage Booking
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </TabsContent>
          
          <TabsContent value="restaurants" className="space-y-6">
            {restaurantBookings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">You don't have any restaurant reservations yet.</p>
                <Button className="mt-4 bg-india-saffron hover:bg-india-maroon">
                  Browse Restaurants
                </Button>
              </div>
            ) : (
              restaurantBookings.map(booking => (
                <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0">
                    <div>
                      <CardTitle>{booking.name}</CardTitle>
                      <CardDescription>{booking.location}</CardDescription>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 
                      booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {booking.status}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">{formatDate(booking.date)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Time</p>
                        <p className="font-medium">{booking.time}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Guests</p>
                        <p className="font-medium">{booking.guests} Persons</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex flex-wrap justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Booking ID</p>
                          <p className="font-medium">{booking.bookingId}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Special Requests</p>
                          <p className="font-medium">{booking.specialRequests || 'None'}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">View Details</Button>
                    <Button className="bg-india-saffron hover:bg-india-maroon">
                      Manage Reservation
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </TabsContent>
          
          <TabsContent value="attractions" className="space-y-6">
            {attractionTickets.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">You don't have any attraction tickets yet.</p>
                <Button className="mt-4 bg-india-saffron hover:bg-india-maroon">
                  Browse Attractions
                </Button>
              </div>
            ) : (
              attractionTickets.map(ticket => (
                <Card key={ticket.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0">
                    <div>
                      <CardTitle>{ticket.name}</CardTitle>
                      <CardDescription>{ticket.location}</CardDescription>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      ticket.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 
                      ticket.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {ticket.status}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">{formatDate(ticket.date)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Time</p>
                        <p className="font-medium">{ticket.time}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Ticket Type</p>
                        <p className="font-medium">{ticket.ticketType}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex flex-wrap justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Booking ID</p>
                          <p className="font-medium">{ticket.bookingId}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Quantity</p>
                          <p className="font-medium">{ticket.tickets} Tickets</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Amount</p>
                          <p className="font-medium">{ticket.amount}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">View E-Ticket</Button>
                    <Button className="bg-india-saffron hover:bg-india-maroon">
                      Cancel Ticket
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Bookings;
