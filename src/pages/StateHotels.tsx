import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Wifi, Coffee, Car, DollarSign, Utensils } from "lucide-react";

const StateHotels = () => {
  const { stateId } = useParams<{ stateId: string }>();
  
  // This would typically come from an API call based on the stateId
  const stateInfo = {
    id: stateId,
    name: "Rajasthan",
    description: "Known as the Land of Kings, Rajasthan is famous for its majestic forts, vibrant culture, and colorful festivals.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  };
  
  const hotels = [
    {
      id: "taj-palace",
      name: "Taj Lake Palace",
      location: "Udaipur",
      description: "A luxury hotel located in the middle of Lake Pichola, offering a magical setting with panoramic views of the surrounding mountains and city palaces.",
      image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.9,
      price: "₹30,000",
      priceCategory: "luxury",
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Bar", "Room Service"],
      propertyType: "Heritage"
    },
    {
      id: "oberoi-udaivilas",
      name: "The Oberoi Udaivilas",
      location: "Udaipur",
      description: "Set on the banks of Lake Pichola, this luxury resort offers breathtaking views, traditional Rajasthani architecture, and world-class amenities.",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.8,
      price: "₹45,000",
      priceCategory: "luxury",
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Bar", "Room Service"],
      propertyType: "Resort"
    },
    {
      id: "rambagh-palace",
      name: "Rambagh Palace",
      location: "Jaipur",
      description: "Once the residence of the Maharaja of Jaipur, this opulent palace has been converted into a luxury hotel that exudes royal charm and elegance.",
      image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.7,
      price: "₹35,000",
      priceCategory: "luxury",
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Bar", "Room Service"],
      propertyType: "Heritage"
    },
    {
      id: "umaid-bhawan",
      name: "Umaid Bhawan Palace",
      location: "Jodhpur",
      description: "Part residence of the royal family of Jodhpur, part luxury hotel, and part museum, this magnificent palace offers an unparalleled royal experience.",
      image: "https://images.unsplash.com/photo-1583424596027-b5e9bd5d599d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.9,
      price: "₹50,000",
      priceCategory: "luxury",
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Bar", "Room Service"],
      propertyType: "Heritage"
    },
    {
      id: "samode-haveli",
      name: "Samode Haveli",
      location: "Jaipur",
      description: "A traditional Indian mansion set in the heart of the walled city of Jaipur, offering an authentic heritage experience with modern comforts.",
      image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.6,
      price: "₹18,000",
      priceCategory: "mid-range",
      amenities: ["Free WiFi", "Swimming Pool", "Restaurant", "Bar", "Room Service"],
      propertyType: "Heritage"
    },
    {
      id: "suryagarh",
      name: "Suryagarh",
      location: "Jaisalmer",
      description: "A luxury hotel that resembles a magnificent fortress, located on the outskirts of Jaisalmer, offering a blend of Rajasthani heritage and contemporary luxury.",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.7,
      price: "₹25,000",
      priceCategory: "luxury",
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Bar", "Room Service"],
      propertyType: "Resort"
    },
    {
      id: "alsisar-haveli",
      name: "Alsisar Haveli",
      location: "Jaipur",
      description: "A restored mansion that offers a glimpse into the traditional lifestyle of Rajput aristocracy, with beautiful courtyards, frescoes, and antique furniture.",
      image: "https://images.unsplash.com/photo-1573393415252-87cba0e693e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.5,
      price: "₹12,000",
      priceCategory: "mid-range",
      amenities: ["Free WiFi", "Swimming Pool", "Restaurant", "Bar"],
      propertyType: "Heritage"
    },
    {
      id: "desert-tulip",
      name: "Desert Tulip Hotel & Resort",
      location: "Jaisalmer",
      description: "A comfortable hotel offering modern amenities and traditional Rajasthani hospitality, located near the Jaisalmer Fort.",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.2,
      price: "₹7,000",
      priceCategory: "budget",
      amenities: ["Free WiFi", "Swimming Pool", "Restaurant"],
      propertyType: "Resort"
    },
    {
      id: "hotel-pearl-palace",
      name: "Hotel Pearl Palace",
      location: "Jaipur",
      description: "A budget-friendly hotel with colorful Rajasthani decor, known for its popular rooftop restaurant and excellent service.",
      image: "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.3,
      price: "₹3,000",
      priceCategory: "budget",
      amenities: ["Free WiFi", "Restaurant"],
      propertyType: "Hotel"
    }
  ];
  
  const propertyTypes = [
    "All",
    "Heritage",
    "Resort",
    "Hotel"
  ];
  
  const priceCategories = [
    "All",
    "budget",
    "mid-range",
    "luxury"
  ];
  
  const [selectedPropertyType, setSelectedPropertyType] = React.useState("All");
  const [selectedPriceCategory, setSelectedPriceCategory] = React.useState("All");
  const [sortOption, setSortOption] = React.useState("popularity");
  
  const filteredHotels = hotels.filter(hotel => {
    const propertyTypeMatch = selectedPropertyType === "All" || hotel.propertyType === selectedPropertyType;
    const priceCategoryMatch = selectedPriceCategory === "All" || hotel.priceCategory === selectedPriceCategory;
    return propertyTypeMatch && priceCategoryMatch;
  });
  
  const sortedHotels = [...filteredHotels].sort((a, b) => {
    if (sortOption === "popularity") {
      return b.rating - a.rating;
    } else if (sortOption === "priceHighToLow") {
      return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
    } else if (sortOption === "priceLowToHigh") {
      return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
    } else if (sortOption === "nameAsc") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
  
  const amenityIcons = {
    "Free WiFi": <Wifi size={16} />,
    "Swimming Pool": <Coffee size={16} />,
    "Restaurant": <Utensils size={16} />,
    "Breakfast": <Coffee size={16} />,
    "Free Parking": <Car size={16} />
  };

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
            Hotels in {stateInfo.name}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-center px-4">
            Find the perfect accommodation for your stay in {stateInfo.name}, from luxury palaces to cozy havelis
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-xl font-bold text-india-blue mb-6">Filter Hotels</h2>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Property Type</h3>
                <div className="space-y-2">
                  {propertyTypes.map((type) => (
                    <div key={type} className="flex items-center">
                      <input 
                        type="radio" 
                        id={`type-${type}`} 
                        name="propertyType"
                        checked={selectedPropertyType === type}
                        onChange={() => setSelectedPropertyType(type)}
                        className="mr-2"
                      />
                      <label htmlFor={`type-${type}`}>{type}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Price Category</h3>
                <div className="space-y-2">
                  {priceCategories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input 
                        type="radio" 
                        id={`price-${category}`} 
                        name="priceCategory"
                        checked={selectedPriceCategory === category}
                        onChange={() => setSelectedPriceCategory(category)}
                        className="mr-2"
                      />
                      <label htmlFor={`price-${category}`} className="capitalize">{category}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Amenities</h3>
                <div className="space-y-2">
                  {Object.keys(amenityIcons).map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`amenity-${amenity.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="mr-2"
                      />
                      <label 
                        htmlFor={`amenity-${amenity.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center"
                      >
                        <span className="mr-2">{amenityIcons[amenity]}</span>
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                className="w-full bg-india-saffron hover:bg-india-maroon"
                onClick={() => {
                  setSelectedPropertyType("All");
                  setSelectedPriceCategory("All");
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {sortedHotels.length} hotels in {stateInfo.name}
              </p>
              
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                <select
                  className="border rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-india-blue"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="popularity">Popularity</option>
                  <option value="priceHighToLow">Price (High to Low)</option>
                  <option value="priceLowToHigh">Price (Low to High)</option>
                  <option value="nameAsc">Name (A-Z)</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-6">
              {sortedHotels.map((hotel) => (
                <Link to={`/hotels/${hotel.id}`} key={hotel.id} className="block">
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="md:col-span-1 h-60 md:h-auto">
                        <img 
                          src={hotel.image} 
                          alt={hotel.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">{hotel.name}</h3>
                            <p className="flex items-center text-gray-600 mt-1">
                              <MapPin size={14} className="mr-1" />
                              {hotel.location}, {stateInfo.name}
                            </p>
                          </div>
                          <div>
                            <div className="flex items-center bg-india-gold text-white px-2 py-1 rounded">
                              <Star size={14} className="mr-1" />
                              <span className="font-semibold">{hotel.rating}</span>
                            </div>
                            <p className="text-xs text-right mt-1">
                              {hotel.propertyType}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mt-4 mb-4 line-clamp-2">{hotel.description}</p>
                        
                        <div className="flex flex-wrap gap-3 mb-4">
                          {hotel.amenities.slice(0, 5).map((amenity, index) => (
                            <span key={index} className="flex items-center text-sm bg-gray-100 px-2 py-1 rounded">
                              {amenityIcons[amenity] && (
                                <span className="mr-1">{amenityIcons[amenity]}</span>
                              )}
                              {amenity}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-sm text-gray-500">Price per night</p>
                            <p className="text-2xl font-bold text-india-maroon">{hotel.price}</p>
                          </div>
                          <Button className="bg-india-saffron hover:bg-india-maroon">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            
            {filteredHotels.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">No hotels found with the selected filters.</p>
                <Button 
                  className="mt-4 bg-india-saffron hover:bg-india-maroon"
                  onClick={() => {
                    setSelectedPropertyType("All");
                    setSelectedPriceCategory("All");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StateHotels;
