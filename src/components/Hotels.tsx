
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { CalendarIcon, Users } from "lucide-react";

const HOTEL_DATA = [
  {
    id: 1,
    name: "Taj Lake Palace",
    location: "Udaipur, Rajasthan",
    price: "₹28,000",
    image: "https://images.unsplash.com/photo-1566652471302-9e535b72a964?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.9,
    description: "A luxury hotel located in the middle of Lake Pichola, offering breathtaking views."
  },
  {
    id: 2,
    name: "The Oberoi Amarvilas",
    location: "Agra, Uttar Pradesh",
    price: "₹32,500",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.8,
    description: "Luxury hotel with unparalleled views of the Taj Mahal from every room."
  },
  {
    id: 3,
    name: "Leela Palace",
    location: "New Delhi",
    price: "₹19,800",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.7,
    description: "A magnificent palace-like hotel offering the finest luxury in the capital city."
  },
  {
    id: 4,
    name: "Rambagh Palace",
    location: "Jaipur, Rajasthan",
    price: "₹24,500",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.8,
    description: "Former residence of the Maharaja of Jaipur, now a luxury heritage hotel."
  }
];

const Hotels = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredHotels = HOTEL_DATA.filter(hotel => 
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="hotels" className="india-section bg-india-cream">
      <div className="container mx-auto">
        <h2 className="india-heading text-center">Luxury <span className="text-india-saffron">Stays</span> in India</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Experience the legendary hospitality of India with our handpicked selection of luxury hotels and heritage properties
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Destination</label>
              <Input 
                placeholder="City or region" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Check-in</label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-white">
                <CalendarIcon className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-500">Select date</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Check-out</label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-white">
                <CalendarIcon className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-500">Select date</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Guests</label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-white">
                <Users className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-500">2 Adults, 0 Children</span>
              </div>
            </div>
          </div>
          
          <Button className="w-full mt-4 bg-india-saffron hover:bg-india-maroon text-white">
            Search Hotels
          </Button>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Hotels</TabsTrigger>
            <TabsTrigger value="luxury">Luxury</TabsTrigger>
            <TabsTrigger value="heritage">Heritage</TabsTrigger>
            <TabsTrigger value="boutique">Boutique</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredHotels.map((hotel) => (
                <Card key={hotel.id} className="card-hover overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name} 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold">
                      {hotel.rating} ★
                    </div>
                  </div>
                  
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg">{hotel.name}</CardTitle>
                    <CardDescription className="text-sm flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-india-blue mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {hotel.location}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-gray-600 line-clamp-2">{hotel.description}</p>
                  </CardContent>
                  
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-india-maroon">{hotel.price}</span>
                      <span className="text-xs text-gray-500"> / night</span>
                    </div>
                    <Button size="sm" className="bg-india-blue hover:bg-india-maroon">
                      Book Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="luxury" className="mt-0">
            <div className="text-center py-12">
              <p className="text-gray-500">Select a category to view available hotels</p>
            </div>
          </TabsContent>
          
          <TabsContent value="heritage" className="mt-0">
            <div className="text-center py-12">
              <p className="text-gray-500">Select a category to view available hotels</p>
            </div>
          </TabsContent>
          
          <TabsContent value="boutique" className="mt-0">
            <div className="text-center py-12">
              <p className="text-gray-500">Select a category to view available hotels</p>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <Button variant="outline" className="border-india-saffron text-india-saffron hover:bg-india-saffron hover:text-white">
            View All Hotels
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hotels;
