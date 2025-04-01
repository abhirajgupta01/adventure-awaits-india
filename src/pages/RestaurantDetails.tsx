
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Globe, 
  DollarSign, 
  Star, 
  Utensils,
  Wifi,
  CreditCard,
  Users,
  Car
} from "lucide-react";

const RestaurantDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would typically come from an API call based on the ID
  const restaurant = {
    id: id,
    name: "Bukhara",
    location: "ITC Maurya, Diplomatic Enclave, New Delhi",
    description: "Legendary restaurant known for its Northwest Frontier cuisine and tandoori cooking. Famous for its Dal Bukhara and kebabs.",
    longDescription: "Established in 1977, Bukhara has earned a global reputation for its authentic North-West Frontier cuisine. The restaurant's rustic ambiance complements its menu of tandoor-cooked delicacies, with each dish prepared using age-old recipes and traditional cooking methods. The iconic Dal Bukhara, simmered overnight on slow charcoal fire, has become synonymous with the restaurant's culinary excellence. The dining experience is uniquely hands-on – guests are encouraged to eat with their fingers and are provided with aprons instead of napkins. Bukhara's commitment to preserving authentic flavors while maintaining consistent quality has made it a favorite among dignitaries, celebrities, and food enthusiasts from around the world. Over the decades, it has hosted numerous world leaders and has been consistently ranked among Asia's finest dining establishments.",
    cuisine: "North Indian, Mughlai",
    rating: 4.7,
    priceRange: "₹₹₹₹",
    openingHours: [
      { day: "Monday", hours: "12:30 PM - 2:45 PM, 7:00 PM - 11:45 PM" },
      { day: "Tuesday", hours: "12:30 PM - 2:45 PM, 7:00 PM - 11:45 PM" },
      { day: "Wednesday", hours: "12:30 PM - 2:45 PM, 7:00 PM - 11:45 PM" },
      { day: "Thursday", hours: "12:30 PM - 2:45 PM, 7:00 PM - 11:45 PM" },
      { day: "Friday", hours: "12:30 PM - 2:45 PM, 7:00 PM - 11:45 PM" },
      { day: "Saturday", hours: "12:30 PM - 2:45 PM, 7:00 PM - 11:45 PM" },
      { day: "Sunday", hours: "12:30 PM - 2:45 PM, 7:00 PM - 11:45 PM" }
    ],
    contactNumber: "+91 11 2611 2233",
    website: "https://www.itchotels.com/in/en/itcmaurya-newdelhi/dining/bukhara",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1543826173-70651703c5a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    specialties: [
      { name: "Dal Bukhara", description: "Black lentils simmered overnight with tomatoes, ginger, and garlic.", price: "₹950" },
      { name: "Sikandari Raan", description: "Whole leg of lamb marinated in spices and slow-roasted.", price: "₹3,500" },
      { name: "Murgh Malai Kebab", description: "Tender chicken pieces marinated in cream, cheese, and spices.", price: "₹1,200" },
      { name: "Tandoori Jhinga", description: "Jumbo prawns marinated with yogurt and spices, cooked in a clay oven.", price: "₹2,800" }
    ],
    amenities: [
      { name: "Free WiFi", icon: <Wifi /> },
      { name: "Accepts Credit Cards", icon: <CreditCard /> },
      { name: "Private Dining Available", icon: <Users /> },
      { name: "Valet Parking", icon: <Car /> }
    ],
    reviews: [
      {
        id: 1,
        user: "Rahul Sharma",
        rating: 5,
        date: "July 10, 2023",
        comment: "The Dal Bukhara is simply outstanding. It's worth every penny. The service is impeccable and the ambiance is perfect for a special occasion."
      },
      {
        id: 2,
        user: "Emma Wilson",
        rating: 4,
        date: "May 28, 2023",
        comment: "Authentic North Indian cuisine at its finest. The tandoori dishes are exceptional. Slightly expensive but worth it for the experience."
      },
      {
        id: 3,
        user: "Vikram Mehta",
        rating: 5,
        date: "April 15, 2023",
        comment: "A legendary restaurant that lives up to its reputation. The Sikandari Raan was tender and flavorful. Will definitely return on my next visit to Delhi."
      }
    ]
  };

  const [selectedImage, setSelectedImage] = useState(restaurant.images[0]);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("19:30");
  const [guests, setGuests] = useState(2);

  const handleGuestChange = (operation) => {
    if (operation === 'increment') {
      setGuests(prev => prev + 1);
    } else if (operation === 'decrement' && guests > 1) {
      setGuests(prev => prev - 1);
    }
  };

  const timeSlots = [
    "12:30", "13:00", "13:30", "14:00", "19:00", "19:30", 
    "20:00", "20:30", "21:00", "21:30", "22:00"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={selectedImage} 
                alt={restaurant.name} 
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <div className="grid grid-cols-4 gap-2 mt-2">
                {restaurant.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${restaurant.name} view ${index + 1}`} 
                    className={`h-20 w-full object-cover rounded cursor-pointer ${selectedImage === image ? 'ring-2 ring-india-maroon' : ''}`}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-india-maroon">{restaurant.name}</h1>
                  <p className="flex items-center text-gray-600 mt-1">
                    <MapPin size={16} className="mr-1" />
                    {restaurant.location}
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm bg-india-saffron text-white px-2 py-1 rounded mr-2">
                      {restaurant.cuisine}
                    </span>
                    <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">
                      <DollarSign size={14} className="inline mr-1" />
                      {restaurant.priceRange}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center mb-1">
                    <span className="text-xl font-bold mr-1">{restaurant.rating}</span>
                    <Star className="fill-yellow-500 text-yellow-500" />
                  </div>
                  <span className="text-gray-600 text-sm">Excellent</span>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="menu">Menu</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="pt-6">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h2 className="text-2xl font-bold text-india-blue mb-4">About This Restaurant</h2>
                  <p className="text-gray-700 mb-6">{restaurant.longDescription}</p>
                  
                  <h3 className="text-xl font-semibold text-india-blue mb-4">Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold flex items-center">
                        <Clock size={16} className="mr-2" />
                        Opening Hours
                      </h4>
                      <div className="mt-2 space-y-1">
                        {restaurant.openingHours.map((item, index) => (
                          <div key={index} className="grid grid-cols-3">
                            <span className="text-gray-500">{item.day}:</span>
                            <span className="col-span-2">{item.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold flex items-center">
                          <Phone size={16} className="mr-2" />
                          Contact Number
                        </h4>
                        <p className="mt-1">{restaurant.contactNumber}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold flex items-center">
                          <Globe size={16} className="mr-2" />
                          Website
                        </h4>
                        <a 
                          href={restaurant.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-1 text-india-blue hover:underline"
                        >
                          {restaurant.website.replace(/(^\w+:|^)\/\//, '')}
                        </a>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold flex items-center">
                          <Utensils size={16} className="mr-2" />
                          Amenities
                        </h4>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          {restaurant.amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-india-gold/20 flex items-center justify-center mr-2">
                                {amenity.icon}
                              </div>
                              <span>{amenity.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-india-blue mb-4">Location</h2>
                  <div className="bg-gray-200 h-[300px] rounded-md flex items-center justify-center mb-4">
                    <p className="text-gray-500">Map placeholder</p>
                  </div>
                  <p className="text-gray-700">
                    Located in the ITC Maurya Hotel in the Diplomatic Enclave of New Delhi, Bukhara is 
                    approximately 14 km from Indira Gandhi International Airport and 5 km from Connaught Place.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="menu" className="pt-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-india-blue mb-6">Signature Dishes</h2>
                  
                  <div className="space-y-8">
                    {restaurant.specialties.map((dish, index) => (
                      <div key={index} className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 h-32 md:h-auto">
                          <div className="h-full w-full bg-gray-200 rounded flex items-center justify-center">
                            <Utensils className="text-gray-400" size={32} />
                          </div>
                        </div>
                        <div className="md:w-3/4 md:pl-6 mt-4 md:mt-0">
                          <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold">{dish.name}</h3>
                            <span className="font-bold text-india-maroon">{dish.price}</span>
                          </div>
                          <p className="text-gray-600 mt-2">{dish.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-semibold mb-4">Menu Categories</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {["Appetizers", "Kebabs", "Main Course", "Breads", "Rice & Biryani", "Desserts"].map((category, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                          <CardContent className="p-6 flex justify-between items-center">
                            <span className="font-medium">{category}</span>
                            <span className="text-india-blue">→</span>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="mt-8 bg-india-saffron hover:bg-india-maroon">
                    View Full Menu
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="pt-6">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-india-blue">Guest Reviews</h2>
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-india-gold text-white font-bold text-lg mr-3">
                        {restaurant.rating}
                      </div>
                      <div>
                        <p className="font-medium">Excellent</p>
                        <p className="text-sm text-gray-500">Based on {restaurant.reviews.length} reviews</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {restaurant.reviews.map((review) => (
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
                <CardTitle>Make a Reservation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">Select Date</p>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                  
                  <div>
                    <p className="font-medium mb-2">Select Time</p>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <Button
                          key={slot}
                          type="button"
                          variant={time === slot ? "default" : "outline"}
                          className={time === slot ? "bg-india-saffron hover:bg-india-maroon" : ""}
                          onClick={() => setTime(slot)}
                        >
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-2">Party Size</p>
                    <div className="flex items-center justify-between border rounded-md p-3">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleGuestChange('decrement')}
                        disabled={guests <= 1}
                      >
                        -
                      </Button>
                      <span className="font-medium">{guests} {guests === 1 ? 'Person' : 'People'}</span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleGuestChange('increment')}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <label htmlFor="special-requests" className="font-medium mb-2 block">
                      Special Requests (Optional)
                    </label>
                    <Input 
                      id="special-requests" 
                      placeholder="Any special preferences or occasions?"
                    />
                  </div>
                  
                  <Button className="w-full bg-india-saffron hover:bg-india-maroon mt-4">
                    Book Table
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    No payment required. Free cancellation.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Restaurant Policies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">Dress Code</h3>
                  <p className="text-sm text-gray-600">Smart casual. No shorts, sleeveless shirts, or flip-flops.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Reservation Policy</h3>
                  <p className="text-sm text-gray-600">Reservations are held for 15 minutes past the booking time. Please call if you're running late.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Children</h3>
                  <p className="text-sm text-gray-600">Children of all ages are welcome. High chairs available upon request.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Payment Options</h3>
                  <p className="text-sm text-gray-600">All major credit cards accepted. No service charge for groups under 8.</p>
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

export default RestaurantDetails;
