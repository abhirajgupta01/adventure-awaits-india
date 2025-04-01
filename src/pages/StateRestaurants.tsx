
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Clock, Utensils, DollarSign } from "lucide-react";

const StateRestaurants = () => {
  const { stateId } = useParams<{ stateId: string }>();
  
  // This would typically come from an API call based on the stateId
  const stateInfo = {
    id: stateId,
    name: "Rajasthan",
    description: "Known as the Land of Kings, Rajasthan is famous for its majestic forts, vibrant culture, and colorful festivals.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  };
  
  const restaurants = [
    {
      id: "spice-court",
      name: "Spice Court",
      location: "Jaipur",
      description: "Authentic Rajasthani cuisine in a traditional setting. Known for its laal maas and dal baati churma.",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.7,
      cuisine: "Rajasthani, North Indian",
      priceRange: "₹₹",
      openingHours: "12:30 PM - 11:00 PM",
      mustTry: ["Laal Maas", "Dal Baati Churma", "Gatte ki Sabzi"]
    },
    {
      id: "ambrai",
      name: "Ambrai",
      location: "Udaipur",
      description: "Romantic lakeside dining with stunning views of Lake Pichola, City Palace, and Jag Mandir. Perfect for dinner with a view.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.8,
      cuisine: "Rajasthani, North Indian, Continental",
      priceRange: "₹₹₹",
      openingHours: "7:30 AM - 10:30 PM",
      mustTry: ["Murgh Makhani", "Laal Maas", "Dessert Platter"]
    },
    {
      id: "suvarna-mahal",
      name: "Suvarna Mahal",
      location: "Jaipur",
      description: "Fine dining restaurant in the historic Rambagh Palace. Royal ambiance with traditional Rajasthani and Indian cuisine.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.9,
      cuisine: "Rajasthani, Mughlai, North Indian",
      priceRange: "₹₹₹₹",
      openingHours: "7:00 PM - 11:30 PM",
      mustTry: ["Royal Rajasthani Thali", "Safed Maas", "Jaipur Kachori"]
    },
    {
      id: "on-the-rocks",
      name: "On The Rocks",
      location: "Jodhpur",
      description: "Uniquely designed restaurant built around natural rock formations. Serves a mix of Indian and international cuisines.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.6,
      cuisine: "North Indian, Continental, Italian",
      priceRange: "₹₹₹",
      openingHours: "12:00 PM - 3:30 PM, 7:00 PM - 11:00 PM",
      mustTry: ["Jodhpuri Kababs", "Murgh Makhanwala", "Tiramisu"]
    },
    {
      id: "darikhana",
      name: "Darikhana",
      location: "Jaisalmer",
      description: "Elegant rooftop restaurant offering panoramic views of Jaisalmer Fort. Specializes in local Rajasthani cuisine with a modern twist.",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.7,
      cuisine: "Rajasthani, North Indian",
      priceRange: "₹₹₹",
      openingHours: "7:30 AM - 10:30 AM, 12:30 PM - 3:00 PM, 7:30 PM - 11:00 PM",
      mustTry: ["Ker Sangri", "Desert Beans", "Bajre ki Roti with Lahsun Chutney"]
    },
    {
      id: "midtown-multi-cuisine",
      name: "Midtown Multi-Cuisine Restaurant",
      location: "Jodhpur",
      description: "Popular local restaurant serving a variety of cuisines at affordable prices. Known for its friendly service and extensive menu.",
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.4,
      cuisine: "Rajasthani, North Indian, Chinese",
      priceRange: "₹₹",
      openingHours: "11:00 AM - 11:00 PM",
      mustTry: ["Mirchi Bada", "Pyaaz Kachori", "Makhaniya Lassi"]
    },
    {
      id: "stepwell-cafe",
      name: "Stepwell Café",
      location: "Jodhpur",
      description: "A charming café overlooking the historic Toorji Ka Jhalra stepwell. Perfect for breakfast or light meals with a view.",
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.5,
      cuisine: "Café, Continental, Italian",
      priceRange: "₹₹",
      openingHours: "8:00 AM - 10:00 PM",
      mustTry: ["Blue City Salad", "Masala Chai", "Nutella Banana Waffle"]
    },
    {
      id: "royal-darbar",
      name: "Royal Darbar",
      location: "Udaipur",
      description: "Family-friendly restaurant serving authentic Rajasthani thalis and North Indian specialties in a traditional setting.",
      image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.3,
      cuisine: "Rajasthani, North Indian",
      priceRange: "₹",
      openingHours: "11:00 AM - 10:30 PM",
      mustTry: ["Rajasthani Thali", "Ghevar", "Mawa Kachori"]
    },
    {
      id: "natraj-dining-hall",
      name: "Natraj Dining Hall",
      location: "Jaipur",
      description: "Local institution famous for its unlimited Rajasthani thali. Authentic flavors at budget-friendly prices.",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.3,
      cuisine: "Rajasthani, North Indian",
      priceRange: "₹",
      openingHours: "11:00 AM - 4:00 PM, 7:00 PM - 11:00 PM",
      mustTry: ["Unlimited Rajasthani Thali", "Churma Ladoo", "Missi Roti"]
    }
  ];
  
  const cuisines = [
    "All",
    "Rajasthani",
    "North Indian",
    "Continental",
    "Mughlai",
    "Café",
    "Italian",
    "Chinese"
  ];
  
  const priceRanges = [
    "All",
    "₹",
    "₹₹",
    "₹₹₹",
    "₹₹₹₹"
  ];
  
  const [selectedCuisine, setSelectedCuisine] = React.useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = React.useState("All");
  const [sortOption, setSortOption] = React.useState("popularity");
  
  const filteredRestaurants = restaurants.filter(restaurant => {
    const cuisineMatch = selectedCuisine === "All" || restaurant.cuisine.includes(selectedCuisine);
    const priceMatch = selectedPriceRange === "All" || restaurant.priceRange === selectedPriceRange;
    return cuisineMatch && priceMatch;
  });
  
  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => {
    if (sortOption === "popularity") {
      return b.rating - a.rating;
    } else if (sortOption === "nameAsc") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "nameDesc") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="relative h-[300px] mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${stateInfo.image}')`,
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Restaurants in {stateInfo.name}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-center px-4">
            Discover the flavors of {stateInfo.name} through its diverse and delicious cuisines
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="overflow-x-auto pb-2">
            <div className="flex space-x-2">
              {cuisines.map((cuisine) => (
                <Button
                  key={cuisine}
                  variant={selectedCuisine === cuisine ? "default" : "outline"}
                  className={selectedCuisine === cuisine ? "bg-india-saffron hover:bg-india-maroon" : ""}
                  onClick={() => setSelectedCuisine(cuisine)}
                >
                  {cuisine}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Price:</span>
              <div className="flex">
                {priceRanges.map((price) => (
                  <Button
                    key={price}
                    variant="ghost"
                    className={`px-2 py-1 ${selectedPriceRange === price ? 'font-bold text-india-maroon' : ''}`}
                    onClick={() => setSelectedPriceRange(price)}
                  >
                    {price}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Sort by:</span>
              <select
                className="border rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-india-blue"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="popularity">Popularity</option>
                <option value="nameAsc">Name (A-Z)</option>
                <option value="nameDesc">Name (Z-A)</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedRestaurants.map((restaurant) => (
            <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id} className="block">
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{restaurant.name}</h3>
                    <div className="flex items-center bg-india-gold text-white px-2 py-1 rounded">
                      <Star size={14} className="mr-1" />
                      <span className="font-semibold">{restaurant.rating}</span>
                    </div>
                  </div>
                  
                  <p className="flex items-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-1 flex-shrink-0" />
                    <span>{restaurant.location}, {stateInfo.name}</span>
                  </p>
                  
                  <p className="flex items-center text-gray-600 mb-3">
                    <Utensils size={16} className="mr-1 flex-shrink-0" />
                    <span>{restaurant.cuisine}</span>
                    <span className="mx-2">•</span>
                    <span>{restaurant.priceRange}</span>
                  </p>
                  
                  <p className="text-gray-700 mb-4 line-clamp-2">{restaurant.description}</p>
                  
                  <div className="flex items-center text-sm mb-4">
                    <Clock size={14} className="text-gray-500 mr-1" />
                    <span>{restaurant.openingHours}</span>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Must Try:</p>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.mustTry.map((dish, index) => (
                        <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          {dish}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No restaurants found matching your criteria.</p>
            <Button 
              className="mt-4 bg-india-saffron hover:bg-india-maroon"
              onClick={() => {
                setSelectedCuisine("All");
                setSelectedPriceRange("All");
              }}
            >
              View All Restaurants
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default StateRestaurants;
