
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ATTRACTIONS_DATA = [
  {
    id: 1,
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    category: "Monument",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.9,
    description: "One of the seven wonders of the world, this ivory-white marble mausoleum is a symbol of eternal love.",
    entryFee: "₹1,100 for foreigners, ₹50 for Indians",
    timings: "Sunrise to Sunset (Closed on Fridays)"
  },
  {
    id: 2,
    name: "Jaipur City Palace",
    location: "Jaipur, Rajasthan",
    category: "Heritage",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.7,
    description: "A stunning blend of Rajasthani and Mughal architecture, showcasing the royal heritage of Jaipur.",
    entryFee: "₹700 for foreigners, ₹250 for Indians",
    timings: "9:30 AM to 5:00 PM"
  },
  {
    id: 3,
    name: "Backwaters of Kerala",
    location: "Alleppey, Kerala",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.8,
    description: "Serene network of lagoons, lakes, and canals, perfect for a houseboat experience.",
    entryFee: "Houseboat rates vary (₹7,000-₹15,000 per day)",
    timings: "Best experienced overnight"
  },
  {
    id: 4,
    name: "Amber Fort",
    location: "Jaipur, Rajasthan",
    category: "Monument",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.6,
    description: "Majestic fort-palace built from red sandstone and marble, known for its artistic design elements.",
    entryFee: "₹550 for foreigners, ₹100 for Indians",
    timings: "8:00 AM to 5:30 PM"
  },
  {
    id: 5,
    name: "Varanasi Ghats",
    location: "Varanasi, Uttar Pradesh",
    category: "Spiritual",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.5,
    description: "Sacred steps leading to the banks of the River Ganges, central to Hindu rituals and ceremonies.",
    entryFee: "Free (Boat rides: ₹300-₹1,500)",
    timings: "Best at sunrise for Ganga Aarti"
  },
  {
    id: 6,
    name: "Ranthambore National Park",
    location: "Sawai Madhopur, Rajasthan",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.7,
    description: "One of the largest national parks in India, famous for its Bengal tiger population.",
    entryFee: "₹1,700 for foreigners, ₹300 for Indians (Safari extra)",
    timings: "Morning and evening safari slots"
  }
];

const Attractions = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredAttractions = activeCategory === "all" 
    ? ATTRACTIONS_DATA 
    : ATTRACTIONS_DATA.filter(attraction => attraction.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="attractions" className="india-section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="india-heading text-center">Magnificent <span className="text-india-blue">Attractions</span></h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Explore the wonders of India, from ancient monuments to natural paradises and spiritual retreats
        </p>
        
        <Tabs defaultValue="all" className="mb-10" onValueChange={setActiveCategory}>
          <TabsList className="bg-white mb-8 flex justify-center flex-wrap">
            <TabsTrigger value="all">All Attractions</TabsTrigger>
            <TabsTrigger value="monument">Monuments</TabsTrigger>
            <TabsTrigger value="heritage">Heritage</TabsTrigger>
            <TabsTrigger value="nature">Nature</TabsTrigger>
            <TabsTrigger value="spiritual">Spiritual</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAttractions.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="monument" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAttractions.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="heritage" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAttractions.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="nature" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAttractions.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="spiritual" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAttractions.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <Button variant="outline" className="border-india-blue text-india-blue hover:bg-india-blue hover:text-white">
            Explore All Attractions
          </Button>
        </div>
      </div>
    </section>
  );
};

const AttractionCard = ({ attraction }: { attraction: typeof ATTRACTIONS_DATA[0] }) => {
  return (
    <Card className="card-hover overflow-hidden">
      <div className="relative h-56">
        <img 
          src={attraction.image} 
          alt={attraction.name} 
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold">
          {attraction.rating} ★
        </div>
        <Badge className="absolute bottom-2 left-2 bg-india-blue">{attraction.category}</Badge>
      </div>
      
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg">{attraction.name}</CardTitle>
        <CardDescription className="text-sm flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-india-maroon mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {attraction.location}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{attraction.description}</p>
        
        <div className="text-xs text-gray-500 space-y-1">
          <div className="flex items-start">
            <span className="font-medium min-w-20">Entry Fee:</span>
            <span>{attraction.entryFee}</span>
          </div>
          <div className="flex items-start">
            <span className="font-medium min-w-20">Timings:</span>
            <span>{attraction.timings}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Button size="sm" variant="outline" className="border-india-blue text-india-blue hover:bg-india-blue hover:text-white">
          View Details
        </Button>
        <Button size="sm" className="bg-india-saffron hover:bg-india-maroon">
          Add to Itinerary
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Attractions;
