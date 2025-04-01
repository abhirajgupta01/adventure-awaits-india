
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RESTAURANT_DATA = [
  {
    id: 1,
    name: "Bukhara",
    location: "ITC Maurya, New Delhi",
    cuisine: "North Indian",
    price: "₹₹₹₹",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.8,
    specialties: ["Dal Bukhara", "Tandoori Chicken"],
    description: "Legendary restaurant known for its North-West Frontier cuisine and rustic ambiance."
  },
  {
    id: 2,
    name: "Indian Accent",
    location: "The Lodhi, New Delhi",
    cuisine: "Modern Indian",
    price: "₹₹₹₹",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.9,
    specialties: ["Blue Cheese Naan", "Daulat Ki Chaat"],
    description: "Innovative Indian cuisine with a contemporary twist, consistently ranked among Asia's best restaurants."
  },
  {
    id: 3,
    name: "Karavalli",
    location: "The Gateway Hotel, Bangalore",
    cuisine: "South Indian",
    price: "₹₹₹",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.7,
    specialties: ["Appam with Stew", "Malabar Biryani"],
    description: "Authentic coastal cuisine from Karnataka, Kerala, and Goa in a traditional setting."
  },
  {
    id: 4,
    name: "Peshawri",
    location: "ITC Maratha, Mumbai",
    cuisine: "North Indian",
    price: "₹₹₹₹",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.6,
    specialties: ["Sikandari Raan", "Barrah Kebab"],
    description: "Famous for its succulent kebabs and slow-cooked dishes from the North-West Frontier."
  }
];

const CuisineBadge = ({ type }: { type: string }) => {
  let className;
  
  switch (type) {
    case "North Indian":
      className = "bg-india-saffron text-white hover:bg-india-saffron/80";
      break;
    case "South Indian":
      className = "bg-india-green text-white hover:bg-india-green/80";
      break;
    case "Modern Indian":
      className = "bg-india-blue text-white hover:bg-india-blue/80";
      break;
    default:
      className = "bg-india-terracotta text-white hover:bg-india-terracotta/80";
  }
  
  return <Badge className={className}>{type}</Badge>;
};

const Restaurants = () => {
  return (
    <section id="restaurants" className="india-section bg-white">
      <div className="container mx-auto">
        <h2 className="india-heading text-center">Exquisite <span className="text-india-green">Dining</span> Experiences</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Savor the rich flavors of India's diverse cuisines at our handpicked selection of finest restaurants
        </p>
        
        <div className="mb-12 bg-india-cream p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="india-subheading mb-4">The Taste of India</h3>
              <p className="text-gray-700 mb-4">
                Indian cuisine is as diverse as its culture, varying from region to region and influenced by centuries of history and traditions.
              </p>
              <p className="text-gray-700 mb-6">
                From the rich, buttery curries of the North to the coconut-infused dishes of the South, the street food delights of Mumbai to the royal cuisines of Rajasthan, every meal tells a story.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-india-saffron text-white hover:bg-india-saffron/80">North Indian</Badge>
                <Badge className="bg-india-green text-white hover:bg-india-green/80">South Indian</Badge>
                <Badge className="bg-india-blue text-white hover:bg-india-blue/80">Bengali</Badge>
                <Badge className="bg-india-terracotta text-white hover:bg-india-terracotta/80">Gujarati</Badge>
                <Badge className="bg-india-maroon text-white hover:bg-india-maroon/80">Rajasthani</Badge>
                <Badge className="bg-purple-500 text-white hover:bg-purple-500/80">Mughlai</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Indian Food" 
                className="rounded-lg shadow-md transform -rotate-3"
              />
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Indian Spices" 
                className="rounded-lg shadow-md transform rotate-3 mt-8"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {RESTAURANT_DATA.map((restaurant) => (
            <Card key={restaurant.id} className="card-hover overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 h-48 md:h-auto relative">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name} 
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold">
                  {restaurant.rating} ★
                </div>
              </div>
              
              <div className="md:w-3/5 flex flex-col">
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{restaurant.name}</CardTitle>
                      <CardDescription className="text-sm">{restaurant.location}</CardDescription>
                    </div>
                    <CuisineBadge type={restaurant.cuisine} />
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 pt-0 flex-grow">
                  <p className="text-sm text-gray-600 mb-2">{restaurant.description}</p>
                  <div className="mt-2">
                    <span className="text-xs text-gray-500 block mb-1">Signature Dishes:</span>
                    <div className="flex flex-wrap gap-1">
                      {restaurant.specialties.map((dish, index) => (
                        <span key={index} className="text-xs bg-india-cream text-india-maroon rounded-full px-2 py-1">
                          {dish}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">Price Range: </span>
                    <span className="font-medium">{restaurant.price}</span>
                  </div>
                  <Button size="sm" className="bg-india-saffron hover:bg-india-maroon">
                    Reserve Table
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="border-india-green text-india-green hover:bg-india-green hover:text-white">
            View All Restaurants
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Restaurants;
