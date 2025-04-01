
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Clock, DollarSign } from "lucide-react";

const StateAttractions = () => {
  const { stateId } = useParams<{ stateId: string }>();
  
  // This would typically come from an API call based on the stateId
  const stateInfo = {
    id: stateId,
    name: "Rajasthan",
    description: "Known as the Land of Kings, Rajasthan is famous for its majestic forts, vibrant culture, and colorful festivals.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  };
  
  const attractions = [
    {
      id: "amber-fort",
      name: "Amber Fort",
      location: "Jaipur",
      description: "A magnificent fort complex that combines Rajput and Mughal architectural styles, overlooking Maota Lake.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.8,
      entryFee: "₹200 for Indians, ₹500 for foreigners",
      openingHours: "8:00 AM - 5:30 PM",
      duration: "2-3 hours",
      categories: ["Historical", "Fort", "UNESCO Site"]
    },
    {
      id: "city-palace",
      name: "City Palace",
      location: "Udaipur",
      description: "A majestic palace complex situated on the banks of Lake Pichola, showcasing the grandeur of Rajput architecture.",
      image: "https://images.unsplash.com/photo-1599661046251-3ffe558d0ab9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.7,
      entryFee: "₹300 for Indians, ₹700 for foreigners",
      openingHours: "9:30 AM - 5:30 PM",
      duration: "3-4 hours",
      categories: ["Historical", "Palace", "Museum"]
    },
    {
      id: "jaisalmer-fort",
      name: "Jaisalmer Fort",
      location: "Jaisalmer",
      description: "One of the largest fully preserved fortified cities in the world, known as the 'Golden Fort' for its yellow sandstone walls.",
      image: "https://images.unsplash.com/photo-1581790061114-5880adb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.6,
      entryFee: "₹100 for Indians, ₹250 for foreigners",
      openingHours: "6:00 AM - 9:00 PM",
      duration: "3-4 hours",
      categories: ["Historical", "Fort", "UNESCO Site"]
    },
    {
      id: "mehrangarh-fort",
      name: "Mehrangarh Fort",
      location: "Jodhpur",
      description: "One of the largest forts in India, standing 400 feet above the city with imposing thick walls and panoramic views.",
      image: "https://images.unsplash.com/photo-1598874399428-927fdc2ea449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.8,
      entryFee: "₹200 for Indians, ₹600 for foreigners",
      openingHours: "9:00 AM - 5:00 PM",
      duration: "3-4 hours",
      categories: ["Historical", "Fort", "Museum"]
    },
    {
      id: "ranthambore-national-park",
      name: "Ranthambore National Park",
      location: "Sawai Madhopur",
      description: "One of the largest and most famous national parks in northern India, known for its tiger population and ancient ruins.",
      image: "https://images.unsplash.com/photo-1578326457370-a7e4422a6ca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.5,
      entryFee: "₹500 for Indians, ₹1500 for foreigners",
      openingHours: "7:00 AM - 10:00 AM, 2:00 PM - 5:00 PM",
      duration: "3 hours safari",
      categories: ["Wildlife", "Nature", "Safari"]
    },
    {
      id: "jal-mahal",
      name: "Jal Mahal",
      location: "Jaipur",
      description: "A palace located in the middle of Man Sagar Lake, offering a beautiful sight with its red sandstone architecture.",
      image: "https://images.unsplash.com/photo-1585136917528-3f118e3a7aab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.3,
      entryFee: "Viewable from outside only",
      openingHours: "Viewable at all times",
      duration: "30 minutes for viewing",
      categories: ["Historical", "Palace", "Lake"]
    }
  ];
  
  const categories = [
    "All",
    "Historical",
    "Fort",
    "Palace",
    "Museum",
    "Wildlife",
    "Nature",
    "UNESCO Site"
  ];
  
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [sortOption, setSortOption] = React.useState("popularity");
  
  const filteredAttractions = attractions.filter(attraction => {
    if (selectedCategory === "All") return true;
    return attraction.categories.includes(selectedCategory);
  });
  
  const sortedAttractions = [...filteredAttractions].sort((a, b) => {
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
            Attractions in {stateInfo.name}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-center px-4">
            Discover the most fascinating places to visit in the beautiful state of {stateInfo.name}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="overflow-x-auto pb-2">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-india-saffron hover:bg-india-maroon" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedAttractions.map((attraction) => (
            <Link to={`/attractions/${attraction.id}`} key={attraction.id} className="block">
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{attraction.name}</h3>
                    <div className="flex items-center bg-india-gold text-white px-2 py-1 rounded">
                      <Star size={14} className="mr-1" />
                      <span className="font-semibold">{attraction.rating}</span>
                    </div>
                  </div>
                  
                  <p className="flex items-center text-gray-600 mb-3">
                    <MapPin size={16} className="mr-1 flex-shrink-0" />
                    <span>{attraction.location}, {stateInfo.name}</span>
                  </p>
                  
                  <p className="text-gray-700 mb-4 line-clamp-2">{attraction.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                    <div className="flex items-center">
                      <Clock size={14} className="text-gray-500 mr-1" />
                      <span className="truncate">{attraction.openingHours}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign size={14} className="text-gray-500 mr-1" />
                      <span className="truncate">{attraction.entryFee.split(',')[0]}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {attraction.categories.slice(0, 3).map((category, index) => (
                      <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {filteredAttractions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No attractions found for the selected category.</p>
            <Button 
              className="mt-4 bg-india-saffron hover:bg-india-maroon"
              onClick={() => setSelectedCategory("All")}
            >
              View All Attractions
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default StateAttractions;
