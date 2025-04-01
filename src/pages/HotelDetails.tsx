import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { 
  Wifi, 
  Timer, 
  Coffee, 
  Utensils, 
  MapPin, 
  Tv, 
  Wind, 
  Car, 
  DollarSign, 
  Star
} from "lucide-react";

const HotelDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would typically come from an API call based on the ID
  const hotel = {
    id: id,
    name: "The Taj Palace",
    location: "New Delhi",
    description: "Experience luxury and elegance at The Taj Palace, located in the heart of New Delhi. This 5-star hotel offers world-class amenities, exquisite dining options, and impeccable service for the discerning traveler.",
    longDescription: "Nestled in the heart of New Delhi, The Taj Palace stands as an iconic symbol of luxury and hospitality. The hotel's elegant architecture, inspired by Mughal and contemporary designs, creates a majestic ambiance from the moment you step in. Each of the 403 rooms and suites is meticulously designed with plush furnishings, modern amenities, and views of the city or the hotel's lush gardens. The property features multiple award-winning restaurants offering cuisines from around the world, prepared by renowned chefs. Guests can unwind at the spa, take a dip in the outdoor pool, or maintain their fitness routine at the fully-equipped gym. The hotel's strategic location provides easy access to the city's business districts, shopping areas, and historical landmarks, making it perfect for both business and leisure travelers seeking a premium experience in India's capital.",
    rating: 4.8,
    price: "₹15,000 per night",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    amenities: [
      { name: "Free WiFi", icon: <Wifi /> },
      { name: "24/7 Room Service", icon: <Timer /> },
      { name: "Breakfast Included", icon: <Coffee /> },
      { name: "Multiple Restaurants", icon: <Utensils /> },
      { name: "Central Location", icon: <MapPin /> },
      { name: "Flat-screen TV", icon: <Tv /> },
      { name: "Air Conditioning", icon: <Wind /> },
      { name: "Free Parking", icon: <Car /> },
      { name: "Swimming Pool", icon: <Water /> }
    ],
    rooms: [
      {
        id: "deluxe",
        name: "Deluxe Room",
        price: 15000,
        description: "Spacious room with city view, king-sized bed, and modern amenities.",
        occupancy: "2 Adults, 1 Child",
        size: "400 sq ft",
        bedType: "King or Twin",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: "premium",
        name: "Premium Room",
        price: 20000,
        description: "Elegant room with garden view, premium amenities, and exclusive lounge access.",
        occupancy: "2 Adults, 1 Child",
        size: "450 sq ft",
        bedType: "King",
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: "suite",
        name: "Luxury Suite",
        price: 35000,
        description: "Opulent suite with separate living area, panoramic views, and butler service.",
        occupancy: "2 Adults, 2 Children",
        size: "750 sq ft",
        bedType: "King",
        image: "https://images.unsplash.com/photo-1560976813-092105dbcbdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    reviews: [
      {
        id: 1,
        user: "John Smith",
        rating: 5,
        date: "August 12, 2023",
        comment: "Exceptional service and beautiful property. The staff went above and beyond to make our stay memorable."
      },
      {
        id: 2,
        user: "Sarah Johnson",
        rating: 4,
        date: "July 28, 2023",
        comment: "Lovely hotel with great amenities. The restaurants offer excellent food. Only minor issue was the pool being closed for maintenance."
      },
      {
        id: 3,
        user: "Raj Patel",
        rating: 5,
        date: "June 15, 2023",
        comment: "Perfect location for exploring Delhi. The room was spacious and immaculately clean. Will definitely stay here again."
      }
    ]
  };

  const [selectedImage, setSelectedImage] = React.useState(hotel.images[0]);
  const [date, setDate] = React.useState({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 3))
  });
  const [guests, setGuests] = React.useState({ adults: 2, children: 0 });

  const handleGuestChange = (type, operation) => {
    setGuests(prev => {
      if (operation === 'increment') {
        return { ...prev, [type]: prev[type] + 1 };
      } else if (operation === 'decrement' && prev[type] > 0) {
        return { ...prev, [type]: prev[type] - 1 };
      }
      return prev;
    });
  };

  const handleDateSelect = (range) => {
    if (range?.from) {
      setDate({
        from: range.from,
        to: range.to || range.from
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={selectedImage} 
                alt={hotel.name} 
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <div className="grid grid-cols-4 gap-2 mt-2">
                {hotel.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${hotel.name} view ${index + 1}`} 
                    className={`h-20 w-full object-cover rounded cursor-pointer ${selectedImage === image ? 'ring-2 ring-india-maroon' : ''}`}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-india-maroon">{hotel.name}</h1>
                  <p className="flex items-center text-gray-600 mt-1">
                    <MapPin size={16} className="mr-1" />
                    {hotel.location}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center mb-1">
                    <span className="text-xl font-bold mr-1">{hotel.rating}</span>
                    <Star className="fill-yellow-500 text-yellow-500" />
                  </div>
                  <span className="text-gray-600 text-sm">Excellent</span>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="rooms">Rooms</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="pt-6">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h2 className="text-2xl font-bold text-india-blue mb-4">About This Hotel</h2>
                  <p className="text-gray-700 mb-6">{hotel.longDescription}</p>
                  
                  <h3 className="text-xl font-semibold text-india-blue mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {hotel.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-india-gold/20 flex items-center justify-center mr-3">
                          {amenity.icon}
                        </div>
                        <span>{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-india-blue mb-4">Location</h2>
                  <div className="bg-gray-200 h-[300px] rounded-md flex items-center justify-center mb-4">
                    <p className="text-gray-500">Map placeholder</p>
                  </div>
                  <p className="text-gray-700">
                    Located in the diplomatic enclave of New Delhi, The Taj Palace offers easy access to major 
                    attractions including India Gate (4 km), Qutub Minar (14 km), and Connaught Place (5 km). 
                    The Indira Gandhi International Airport is approximately 14 km away.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="rooms" className="pt-6">
                <div className="space-y-6">
                  {hotel.rooms.map((room) => (
                    <Card key={room.id} className="overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-1">
                          <img 
                            src={room.image}
                            alt={room.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle>{room.name}</CardTitle>
                            <div className="text-right">
                              <p className="text-gray-500">Price per night</p>
                              <p className="text-xl font-bold text-india-maroon">₹{room.price.toLocaleString()}</p>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-4">{room.description}</p>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 mb-6">
                            <div>
                              <p className="text-sm text-gray-500">Room Size</p>
                              <p className="font-medium">{room.size}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Bed Type</p>
                              <p className="font-medium">{room.bedType}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Occupancy</p>
                              <p className="font-medium">{room.occupancy}</p>
                            </div>
                          </div>
                          <Button className="w-full md:w-auto bg-india-saffron hover:bg-india-maroon">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="pt-6">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-india-blue">Guest Reviews</h2>
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-india-gold text-white font-bold text-lg mr-3">
                        {hotel.rating}
                      </div>
                      <div>
                        <p className="font-medium">Excellent</p>
                        <p className="text-sm text-gray-500">Based on {hotel.reviews.length} reviews</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {hotel.reviews.map((review) => (
                      <div key={review.id} className="pb-6 border-b border-gray-100 last:border-0">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-semibold">{review.user}</p>
                          <div className="flex items-center">
                            <span className="font-bold mr-1">{review.rating}</span>
                            <Star className="fill-yellow-500 text-yellow-500" size={16} />
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="mt-6">
                    View All Reviews
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Book Your Stay</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">Select Dates</p>
                    <Calendar
                      mode="range"
                      selected={date}
                      onSelect={handleDateSelect}
                      className="rounded-md border"
                    />
                  </div>
                  
                  <div>
                    <p className="font-medium mb-2">Guests</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Adults</span>
                        <div className="flex items-center">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => handleGuestChange('adults', 'decrement')}
                          >
                            -
                          </Button>
                          <span className="mx-2 w-8 text-center">{guests.adults}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => handleGuestChange('adults', 'increment')}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Children</span>
                        <div className="flex items-center">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => handleGuestChange('children', 'decrement')}
                          >
                            -
                          </Button>
                          <span className="mx-2 w-8 text-center">{guests.children}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => handleGuestChange('children', 'increment')}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between mb-2">
                      <span>₹15,000 x 3 nights</span>
                      <span>₹45,000</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Taxes & fees</span>
                      <span>₹8,100</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                      <span>Total</span>
                      <span>₹53,100</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-india-saffron hover:bg-india-maroon">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Hotel Policies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">Check-in/Check-out</h3>
                  <p className="text-sm text-gray-600">Check-in: 2:00 PM</p>
                  <p className="text-sm text-gray-600">Check-out: 12:00 PM</p>
                </div>
                <div>
                  <h3 className="font-semibold">Cancellation Policy</h3>
                  <p className="text-sm text-gray-600">Free cancellation up to 48 hours before check-in. After that, a penalty equal to one night's stay will be charged.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Additional Information</h3>
                  <p className="text-sm text-gray-600">Extra beds are available for an additional charge of ₹2,000 per night.</p>
                  <p className="text-sm text-gray-600">Children under 12 stay free when using existing bedding.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HotelDetails;
