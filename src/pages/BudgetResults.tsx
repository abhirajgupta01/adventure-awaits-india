
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const BudgetResults = () => {
  // Sample budget data
  const tripDetails = {
    destination: "Golden Triangle (Delhi-Agra-Jaipur)",
    duration: 7,
    travelers: 2,
    travelStyle: "Mid-range",
    startDate: "Sep 15, 2024",
    endDate: "Sep 22, 2024",
    totalBudget: 150000, // in INR
  };

  const budgetBreakdown = [
    { name: 'Accommodation', value: 55000, color: '#FFA500' },
    { name: 'Transportation', value: 30000, color: '#4299E1' },
    { name: 'Food & Dining', value: 25000, color: '#48BB78' },
    { name: 'Activities', value: 20000, color: '#9F7AEA' },
    { name: 'Shopping', value: 15000, color: '#F56565' },
    { name: 'Miscellaneous', value: 5000, color: '#718096' },
  ];

  const recommendedAccommodations = [
    {
      name: "Taj Palace New Delhi",
      location: "New Delhi",
      price: "₹18,000 per night",
      totalCost: "₹36,000 (2 nights)",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "The Oberoi Amarvilas",
      location: "Agra",
      price: "₹24,000 per night",
      totalCost: "₹24,000 (1 night)",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Rambagh Palace",
      location: "Jaipur",
      price: "₹16,000 per night",
      totalCost: "₹32,000 (2 nights)",
      image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto py-16 px-4 md:px-8">
        <h1 className="india-heading text-center mb-10">Your Trip Budget</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold text-india-blue mb-4">Trip Summary</h2>
              <div className="grid grid-cols-2 gap-y-4">
                <div>
                  <p className="text-gray-500">Destination</p>
                  <p className="font-medium">{tripDetails.destination}</p>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">{tripDetails.duration} Days</p>
                </div>
                <div>
                  <p className="text-gray-500">Travelers</p>
                  <p className="font-medium">{tripDetails.travelers} People</p>
                </div>
                <div>
                  <p className="text-gray-500">Travel Style</p>
                  <p className="font-medium">{tripDetails.travelStyle}</p>
                </div>
                <div>
                  <p className="text-gray-500">Start Date</p>
                  <p className="font-medium">{tripDetails.startDate}</p>
                </div>
                <div>
                  <p className="text-gray-500">End Date</p>
                  <p className="font-medium">{tripDetails.endDate}</p>
                </div>
              </div>
            </div>
            
            <div className="col-span-1 flex flex-col justify-center items-center bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Total Budget</h3>
              <p className="text-3xl font-bold text-india-maroon mb-2">₹{tripDetails.totalBudget.toLocaleString()}</p>
              <p className="text-gray-500">for {tripDetails.travelers} people, {tripDetails.duration} days</p>
              <p className="mt-4 text-md font-medium text-india-blue">
                ₹{Math.round(tripDetails.totalBudget / tripDetails.duration).toLocaleString()} per day
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-india-blue mb-6">Budget Breakdown</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={budgetBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {budgetBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-india-blue mb-6">Detailed Expenses</h2>
            <div className="space-y-4">
              {budgetBreakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full mr-3" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">₹{item.value.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">
                      {Math.round((item.value / tripDetails.totalBudget) * 100)}% of total
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-india-blue mb-6">Recommended Accommodations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {recommendedAccommodations.map((hotel, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={hotel.image} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{hotel.name}</CardTitle>
                <p className="text-gray-500">{hotel.location}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Per Night</span>
                  <span className="font-semibold">{hotel.price}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-600">Total</span>
                  <span className="font-semibold">{hotel.totalCost}</span>
                </div>
                <Button className="w-full mt-4 bg-india-saffron hover:bg-india-maroon">
                  View Hotel
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button className="bg-india-saffron hover:bg-india-maroon px-6">
            Save Budget Plan
          </Button>
          <Button variant="outline" className="ml-4">
            Adjust Budget
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BudgetResults;
