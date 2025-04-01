
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Calendar, 
  Thermometer, 
  Globe, 
  Clock, 
  Users, 
  Utensils, 
  ShoppingBag,
  Camera
} from "lucide-react";

const StateDetails = () => {
  const { stateId } = useParams<{ stateId: string }>();
  
  // This would typically come from an API call based on the stateId
  const stateInfo = {
    id: stateId,
    name: "Rajasthan",
    tagline: "The Land of Kings",
    description: "Rajasthan, the largest state of India, is a land of vibrant colors, magnificent palaces, and a rich cultural heritage. Known for its majestic forts, colorful festivals, and warm hospitality, Rajasthan offers a glimpse into India's royal past while embracing modernity.",
    longDescription: "Rajasthan, the Land of Kings, is a vibrant and colorful state located in northwestern India. It is the largest state in India by area and is known for its diverse geography, which includes the vast Thar Desert and the ancient Aravalli Range. The state is a treasure trove of history, art, and culture, with its origins dating back to the great Rajput kingdoms that ruled the region for centuries. Each city in Rajasthan has its own unique character: Jaipur, the 'Pink City', with its stunning architecture and bustling bazaars; Udaipur, the 'City of Lakes', with its romantic settings and palaces; Jodhpur, the 'Blue City', with its imposing Mehrangarh Fort; and Jaisalmer, the 'Golden City', with its yellow sandstone structures rising from the desert. Rajasthan's rich cultural tapestry is woven with colorful festivals, vibrant folk music and dance, intricate handicrafts, and delicious cuisine. The state's people, known for their warm hospitality and traditional lifestyle, add to its charm. Whether you're exploring ancient forts, shopping for handicrafts, savoring authentic Rajasthani cuisine, or experiencing the thrill of a desert safari, Rajasthan offers a kaleidoscope of experiences that capture the essence of India's royal heritage.",
    capital: "Jaipur",
    language: "Hindi, Rajasthani",
    population: "68.5 million",
    area: "342,239 km²",
    timezone: "UTC+5:30 (IST)",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1613273860313-03a5e1e77694?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1624461080890-9650dd59c6f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1596295156094-9845a4e497ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    bestTimeToVisit: "October to March",
    weather: {
      summer: "40°C - 45°C (April to June)",
      monsoon: "25°C - 35°C with moderate rainfall (July to September)",
      winter: "10°C - 25°C (October to March)"
    },
    majorCities: [
      { name: "Jaipur", description: "The Pink City, capital of Rajasthan" },
      { name: "Udaipur", description: "The City of Lakes" },
      { name: "Jodhpur", description: "The Blue City" },
      { name: "Jaisalmer", description: "The Golden City" },
      { name: "Bikaner", description: "Known for its camel festival and forts" }
    ],
    topAttractions: [
      { name: "Amber Fort", location: "Jaipur", image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
      { name: "City Palace", location: "Udaipur", image: "https://images.unsplash.com/photo-1599661046251-3ffe558d0ab9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
      { name: "Mehrangarh Fort", location: "Jodhpur", image: "https://images.unsplash.com/photo-1598874399428-927fdc2ea449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
      { name: "Jaisalmer Fort", location: "Jaisalmer", image: "https://images.unsplash.com/photo-1581790061114-5880adb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }
    ],
    popularHotels: [
      { name: "The Oberoi Udaivilas", location: "Udaipur", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
      { name: "Taj Lake Palace", location: "Udaipur", image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
      { name: "Rambagh Palace", location: "Jaipur", image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }
    ],
    popularRestaurants: [
      { name: "Spice Court", location: "Jaipur", cuisine: "Rajasthani", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
      { name: "Ambrai", location: "Udaipur", cuisine: "North Indian, Rajasthani", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
      { name: "On The Rocks", location: "Jodhpur", cuisine: "North Indian, Continental", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }
    ],
    culture: {
      festivals: [
        { name: "Pushkar Camel Fair", time: "November", description: "Annual camel and livestock fair held in Pushkar" },
        { name: "Desert Festival", time: "February", description: "Colorful festival in Jaisalmer celebrating Rajasthani culture" },
        { name: "Teej", time: "August", description: "Festival celebrating the onset of monsoon and marital bliss" }
      ],
      dances: ["Ghoomar", "Kalbeliya", "Bhavai", "Kachhi Ghodi"],
      music: ["Manganiyar", "Langa", "Folk songs"],
      crafts: ["Blue Pottery", "Bandhani", "Leheriya", "Meenakari", "Puppetry"]
    },
    cuisine: {
      famous_dishes: [
        { name: "Dal Baati Churma", description: "Baked wheat balls served with lentils and sweet churma" },
        { name: "Laal Maas", description: "Fiery red meat curry with Mathania chilies" },
        { name: "Gatte ki Sabzi", description: "Gram flour dumplings in yogurt gravy" },
        { name: "Ker Sangri", description: "Desert beans and berries dish" }
      ]
    },
    travel_tips: [
      "Carry light cotton clothes for summer and warm clothes for winter nights",
      "Always carry a water bottle and stay hydrated, especially during summer",
      "Respect local customs and dress modestly when visiting temples and religious sites",
      "Bargain when shopping in local markets but do so respectfully",
      "Try to learn a few basic Hindi phrases to connect with locals"
    ],
    itineraries: [
      {
        name: "Classic Golden Triangle",
        duration: "7 days",
        description: "Explore Delhi, Agra, and Jaipur",
        route: "Delhi → Agra → Jaipur → Delhi"
      },
      {
        name: "Rajasthan Heritage Tour",
        duration: "10 days",
        description: "Discover the royal heritage of Rajasthan",
        route: "Jaipur → Pushkar → Jodhpur → Jaisalmer → Udaipur"
      },
      {
        name: "Desert Adventure",
        duration: "5 days",
        description: "Experience the Thar Desert and its culture",
        route: "Jodhpur → Jaisalmer → Sam Sand Dunes → Bikaner"
      }
    ]
  };

  const [selectedImage, setSelectedImage] = React.useState(stateInfo.images[0]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="relative h-[400px] mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${stateInfo.image}')`,
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            {stateInfo.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center">
            {stateInfo.tagline}
          </p>
          <div className="flex gap-4">
            <Link to={`/states/${stateId}/attractions`}>
              <Button className="bg-india-saffron hover:bg-india-maroon">
                Explore Attractions
              </Button>
            </Link>
            <Link to={`/states/${stateId}/hotels`}>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-india-blue">
                Find Hotels
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-india-blue mb-6">About {stateInfo.name}</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              {stateInfo.longDescription}
            </p>
            
            <div className="mb-8">
              <img 
                src={selectedImage} 
                alt={`${stateInfo.name} landscape`} 
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <div className="grid grid-cols-5 gap-2 mt-2">
                {stateInfo.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${stateInfo.name} view ${index + 1}`} 
                    className={`h-20 w-full object-cover rounded cursor-pointer ${selectedImage === image ? 'ring-2 ring-india-maroon' : ''}`}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-india-blue mb-4">Key Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <MapPin className="text-india-maroon mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Capital</p>
                    <p className="text-gray-700">{stateInfo.capital}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="text-india-maroon mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Languages</p>
                    <p className="text-gray-700">{stateInfo.language}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="text-india-maroon mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Population</p>
                    <p className="text-gray-700">{stateInfo.population}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-india-maroon mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Time Zone</p>
                    <p className="text-gray-700">{stateInfo.timezone}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-india-blue mb-4">Major Cities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stateInfo.majorCities.map((city, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold">{city.name}</h4>
                    <p className="text-gray-600 text-sm">{city.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-india-blue mb-4">Weather & Best Time to Visit</h3>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <Calendar className="text-india-maroon mr-3" />
                    <div>
                      <p className="font-medium">Best Time to Visit</p>
                      <p className="text-gray-700">{stateInfo.bestTimeToVisit}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Thermometer className="text-red-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Summer (April to June)</p>
                      <p className="text-gray-700">{stateInfo.weather.summer}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Thermometer className="text-blue-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Monsoon (July to September)</p>
                      <p className="text-gray-700">{stateInfo.weather.monsoon}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Thermometer className="text-green-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Winter (October to March)</p>
                      <p className="text-gray-700">{stateInfo.weather.winter}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-india-blue mb-4">Travel Tips</h3>
              <ul className="space-y-3">
                {stateInfo.travel_tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-india-saffron mr-2">•</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-india-blue mb-4">Suggested Itineraries</h3>
              <div className="space-y-4">
                {stateInfo.itineraries.map((itinerary, index) => (
                  <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <div className="flex justify-between">
                      <h4 className="font-semibold">{itinerary.name}</h4>
                      <span className="text-sm text-india-maroon">{itinerary.duration}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{itinerary.description}</p>
                    <p className="text-sm font-medium">Route: {itinerary.route}</p>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-india-saffron hover:bg-india-maroon">
                Plan Your Trip
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-india-blue mb-4">Cultural Highlights</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold flex items-center mb-2">
                  <Calendar className="text-india-maroon mr-2" size={16} />
                  Famous Festivals
                </h4>
                <div className="space-y-2">
                  {stateInfo.culture.festivals.map((festival, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded">
                      <p className="font-medium">{festival.name} <span className="text-sm font-normal text-gray-500">({festival.time})</span></p>
                      <p className="text-sm text-gray-600">{festival.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold flex items-center mb-2">
                  <Users className="text-india-maroon mr-2" size={16} />
                  Traditional Dances
                </h4>
                <div className="flex flex-wrap gap-2">
                  {stateInfo.culture.dances.map((dance, index) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {dance}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold flex items-center mb-2">
                  <ShoppingBag className="text-india-maroon mr-2" size={16} />
                  Famous Crafts
                </h4>
                <div className="flex flex-wrap gap-2">
                  {stateInfo.culture.crafts.map((craft, index) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {craft}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="attractions" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="attractions">Top Attractions</TabsTrigger>
            <TabsTrigger value="hotels">Popular Hotels</TabsTrigger>
            <TabsTrigger value="restaurants">Popular Restaurants</TabsTrigger>
          </TabsList>
          
          <TabsContent value="attractions">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stateInfo.topAttractions.map((attraction, index) => (
                <Link to={`/attractions/${attraction.name.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={attraction.image} 
                        alt={attraction.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-bold text-lg">{attraction.name}</h4>
                      <p className="text-gray-600 flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {attraction.location}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link to={`/states/${stateId}/attractions`}>
                <Button variant="outline">
                  View All Attractions
                </Button>
              </Link>
            </div>
          </TabsContent>
          
          <TabsContent value="hotels">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stateInfo.popularHotels.map((hotel, index) => (
                <Link to={`/hotels/${hotel.name.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={hotel.image} 
                        alt={hotel.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-bold text-lg">{hotel.name}</h4>
                      <p className="text-gray-600 flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {hotel.location}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link to={`/states/${stateId}/hotels`}>
                <Button variant="outline">
                  View All Hotels
                </Button>
              </Link>
            </div>
          </TabsContent>
          
          <TabsContent value="restaurants">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stateInfo.popularRestaurants.map((restaurant, index) => (
                <Link to={`/restaurants/${restaurant.name.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={restaurant.image} 
                        alt={restaurant.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-bold text-lg">{restaurant.name}</h4>
                      <p className="text-gray-600 flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {restaurant.location}
                      </p>
                      <p className="text-gray-600 text-sm flex items-center">
                        <Utensils size={14} className="mr-1" />
                        {restaurant.cuisine}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link to={`/states/${stateId}/restaurants`}>
                <Button variant="outline">
                  View All Restaurants
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-india-blue mb-8">Explore Cuisine of {stateInfo.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stateInfo.cuisine.famous_dishes.map((dish, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 bg-india-gold/20 w-16 h-16 rounded-full flex items-center justify-center">
                    <Utensils className="text-india-maroon" size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{dish.name}</h4>
                  <p className="text-gray-600 text-sm">{dish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button className="mt-8 bg-india-saffron hover:bg-india-maroon">
            <Camera className="mr-2" size={18} />
            Discover Food Tours
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StateDetails;
