
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const ExploreStates = () => {
  const statesList = [
    {
      id: "rajasthan",
      name: "Rajasthan",
      description: "The Land of Kings, famous for its majestic forts, vibrant culture, and desert landscapes.",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      attractions: 45,
      hotels: 120,
      restaurants: 85
    },
    {
      id: "kerala",
      name: "Kerala",
      description: "God's Own Country with serene backwaters, lush green landscapes, and pristine beaches.",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      attractions: 38,
      hotels: 95,
      restaurants: 78
    },
    {
      id: "goa",
      name: "Goa",
      description: "India's beach paradise known for its golden shores, vibrant nightlife, and Portuguese heritage.",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      attractions: 30,
      hotels: 145,
      restaurants: 115
    },
    {
      id: "himachal-pradesh",
      name: "Himachal Pradesh",
      description: "The Abode of Snow with breathtaking mountain views, hill stations, and adventure opportunities.",
      image: "https://images.unsplash.com/photo-1626621934595-c4fbce95d027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      attractions: 42,
      hotels: 105,
      restaurants: 68
    },
    {
      id: "tamil-nadu",
      name: "Tamil Nadu",
      description: "Land of Temples with rich cultural heritage, ancient architecture, and classical arts.",
      image: "https://images.unsplash.com/photo-1616166358812-aa7b14b79d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      attractions: 55,
      hotels: 88,
      restaurants: 92
    },
    {
      id: "gujarat",
      name: "Gujarat",
      description: "The Jewel of Western India with diverse landscapes from the Rann of Kutch to sacred temples.",
      image: "https://images.unsplash.com/photo-1609948543911-6c7bd88c4c02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      attractions: 36,
      hotels: 75,
      restaurants: 65
    },
    {
      id: "maharashtra",
      name: "Maharashtra",
      description: "Home to Mumbai, with historical caves, forts, and beautiful Western Ghats landscapes.",
      image: "https://images.unsplash.com/photo-1566552881560-02559a8a9c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      attractions: 48,
      hotels: 135,
      restaurants: 115
    },
    {
      id: "karnataka",
      name: "Karnataka",
      description: "From tech hub Bangalore to ancient Hampi ruins, a blend of modernity and heritage.",
      image: "https://images.unsplash.com/photo-1600507086942-b479c31b1d54?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      attractions: 40,
      hotels: 95,
      restaurants: 88
    },
    {
      id: "uttarakhand",
      name: "Uttarakhand",
      description: "The Land of Gods with spiritual retreats, wildlife sanctuaries, and Himalayan vistas.",
      image: "https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      attractions: 35,
      hotels: 80,
      restaurants: 55
    }
  ];

  const regionGroups = {
    "North India": ["rajasthan", "himachal-pradesh", "uttarakhand"],
    "South India": ["kerala", "tamil-nadu", "karnataka"],
    "West India": ["goa", "gujarat", "maharashtra"],
  };

  const getStatesInRegion = (region) => {
    return statesList.filter(state => regionGroups[region].includes(state.id));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="relative h-[300px] mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1523544465127-a24efd648bab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Explore India's States
          </h1>
          <p className="text-xl text-white text-center max-w-3xl px-4">
            Discover the diverse cultures, landscapes, and experiences across India's magnificent states
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-india-blue mb-6">Browse by Region</h2>
          
          {Object.keys(regionGroups).map((region) => (
            <div key={region} className="mb-12">
              <h3 className="text-2xl font-semibold text-india-maroon mb-6">{region}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getStatesInRegion(region).map((state) => (
                  <Link to={`/states/${state.id}`} key={state.id}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={state.image} 
                          alt={state.name} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{state.name}</h3>
                        <p className="text-gray-600 mb-4">{state.description}</p>
                        <div className="flex justify-between text-sm">
                          <span>
                            <span className="font-semibold text-india-blue">{state.attractions}</span> Attractions
                          </span>
                          <span>
                            <span className="font-semibold text-india-blue">{state.hotels}</span> Hotels
                          </span>
                          <span>
                            <span className="font-semibold text-india-blue">{state.restaurants}</span> Restaurants
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-india-blue mb-6">All States</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {statesList.map((state) => (
              <Link to={`/states/${state.id}`} key={state.id} className="block">
                <div className="relative h-40 rounded-lg overflow-hidden group">
                  <img 
                    src={state.image} 
                    alt={state.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{state.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExploreStates;
