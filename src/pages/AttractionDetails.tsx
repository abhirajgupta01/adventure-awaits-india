
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const AttractionDetails = () => {
  const { id } = useParams<{ id: string }>();

  // This would typically come from an API call based on the ID
  const attraction = {
    id: id,
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    description: "The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.9,
    entryFee: "1500 INR for foreigners, 200 INR for Indians",
    openingHours: "Sunrise to sunset, closed on Fridays",
    bestTimeToVisit: "October to March",
    suggestedDuration: "2-3 hours",
    tips: [
      "Visit early in the morning to avoid crowds",
      "Hire a guide to learn about the history",
      "Carry water and sunscreen",
      "Photography is allowed but not inside the main mausoleum"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img 
              src={attraction.imageUrl} 
              alt={attraction.name} 
              className="rounded-lg shadow-md w-full h-[400px] object-cover"
            />
            
            <h1 className="india-heading mt-8">{attraction.name}</h1>
            <p className="text-lg text-gray-600 mb-6">{attraction.location}</p>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-india-blue mb-4">Description</h2>
              <p className="text-gray-700">{attraction.description}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-india-blue mb-4">Visitor Tips</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {attraction.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Visitor Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-india-maroon">Entry Fee</h3>
                  <p>{attraction.entryFee}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-india-maroon">Opening Hours</h3>
                  <p>{attraction.openingHours}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-india-maroon">Best Time to Visit</h3>
                  <p>{attraction.bestTimeToVisit}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-india-maroon">Suggested Duration</h3>
                  <p>{attraction.suggestedDuration}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-india-maroon">Rating</h3>
                  <div className="flex items-center">
                    <span className="text-xl font-bold">{attraction.rating}</span>
                    <span className="text-yellow-500 ml-2">★★★★★</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-india-saffron hover:bg-india-maroon">
                  Add to Itinerary
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-[200px] rounded-md flex items-center justify-center">
                  <p className="text-gray-500">Map placeholder</p>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AttractionDetails;
