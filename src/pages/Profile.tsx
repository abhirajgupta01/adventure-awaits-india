
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Globe, 
  CreditCard, 
  Shield, 
  Edit, 
  Save, 
  Camera 
} from "lucide-react";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  
  // Mock user data
  const [userData, setUserData] = useState({
    name: "Alexandra Smith",
    email: "alexandra.smith@example.com",
    phone: "+91 9876543210",
    address: "123 Traveler's Lane, Mumbai, Maharashtra, India",
    dateJoined: "May 2022",
    bio: "Passionate traveler exploring the diverse cultures and landscapes of India. Love authentic experiences, local cuisine, and photography.",
    interests: ["Cultural Heritage", "Nature", "Food & Cuisine", "Photography", "Adventure"],
    upcomingTrips: [
      { id: 1, destination: "Rajasthan", dates: "October 15-25, 2024", status: "Confirmed" }
    ],
    recentTrips: [
      { id: 1, destination: "Kerala Backwaters", dates: "February 5-12, 2024", status: "Completed" },
      { id: 2, destination: "Varanasi", dates: "November 10-15, 2023", status: "Completed" }
    ]
  });
  
  const handleSaveProfile = () => {
    // In a real app, you would save to a database here
    setEditMode(false);
    // Show success toast
    console.log("Profile saved:", userData);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="md:w-1/3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt={userData.name} />
                      <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    {editMode && (
                      <div className="absolute bottom-0 right-0 bg-india-saffron rounded-full p-2 cursor-pointer">
                        <Camera size={16} className="text-white" />
                      </div>
                    )}
                  </div>
                  
                  <h2 className="mt-4 text-2xl font-bold">{userData.name}</h2>
                  <p className="text-gray-500">Travel Enthusiast</p>
                  
                  <div className="mt-6 w-full space-y-4">
                    <div className="flex items-center">
                      <Mail className="text-gray-500 mr-3" size={18} />
                      <span className="text-gray-700">{userData.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-gray-500 mr-3" size={18} />
                      <span className="text-gray-700">{userData.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="text-gray-500 mr-3 mt-1" size={18} />
                      <span className="text-gray-700">{userData.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="text-gray-500 mr-3" size={18} />
                      <span className="text-gray-700">Member since {userData.dateJoined}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 w-full">
                    <h3 className="font-semibold mb-2">Travel Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {userData.interests.map((interest, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-100">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 w-full">
                    {!editMode ? (
                      <Button 
                        className="w-full" 
                        variant="outline"
                        onClick={() => setEditMode(true)}
                      >
                        <Edit size={16} className="mr-2" />
                        Edit Profile
                      </Button>
                    ) : (
                      <Button 
                        className="w-full bg-india-saffron hover:bg-india-maroon" 
                        onClick={handleSaveProfile}
                      >
                        <Save size={16} className="mr-2" />
                        Save Changes
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-2/3">
            <Tabs defaultValue="trips" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="trips">My Trips</TabsTrigger>
                <TabsTrigger value="profile">Profile Details</TabsTrigger>
                <TabsTrigger value="settings">Account Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="trips" className="space-y-6 pt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Trips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {userData.upcomingTrips.length === 0 ? (
                      <p className="text-gray-500">You don't have any upcoming trips.</p>
                    ) : (
                      <div className="space-y-4">
                        {userData.upcomingTrips.map(trip => (
                          <div key={trip.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h3 className="font-semibold">{trip.destination}</h3>
                              <p className="text-gray-500 text-sm">{trip.dates}</p>
                            </div>
                            <div className="flex items-center">
                              <Badge className="bg-green-500">{trip.status}</Badge>
                              <Button variant="ghost" size="sm" className="ml-2">
                                View
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <Button className="mt-4 bg-india-saffron hover:bg-india-maroon">
                      Plan New Trip
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Trips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {userData.recentTrips.length === 0 ? (
                      <p className="text-gray-500">You haven't taken any trips yet.</p>
                    ) : (
                      <div className="space-y-4">
                        {userData.recentTrips.map(trip => (
                          <div key={trip.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h3 className="font-semibold">{trip.destination}</h3>
                              <p className="text-gray-500 text-sm">{trip.dates}</p>
                            </div>
                            <div className="flex items-center">
                              <Badge variant="outline">{trip.status}</Badge>
                              <Button variant="ghost" size="sm" className="ml-2">
                                Details
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Saved Itineraries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">You don't have any saved itineraries yet.</p>
                    <Button variant="outline" className="mt-4">
                      Create Itinerary
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="profile" className="pt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your personal information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Full Name
                          </label>
                          <Input 
                            id="name" 
                            name="name"
                            value={userData.name} 
                            onChange={handleChange}
                            disabled={!editMode}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email Address
                          </label>
                          <Input 
                            id="email" 
                            name="email"
                            type="email" 
                            value={userData.email} 
                            onChange={handleChange}
                            disabled={!editMode}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <Input 
                            id="phone" 
                            name="phone"
                            value={userData.phone} 
                            onChange={handleChange}
                            disabled={!editMode}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="address" className="text-sm font-medium">
                            Address
                          </label>
                          <Input 
                            id="address" 
                            name="address"
                            value={userData.address} 
                            onChange={handleChange}
                            disabled={!editMode}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="bio" className="text-sm font-medium">
                          Bio
                        </label>
                        <Textarea 
                          id="bio" 
                          name="bio"
                          rows={4} 
                          value={userData.bio} 
                          onChange={handleChange}
                          disabled={!editMode}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Travel Interests
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {userData.interests.map((interest, index) => (
                            <Badge key={index} variant={editMode ? "secondary" : "outline"} className={editMode ? "cursor-pointer" : ""}>
                              {interest}
                              {editMode && <span className="ml-1">×</span>}
                            </Badge>
                          ))}
                          {editMode && (
                            <Badge variant="outline" className="bg-gray-100 cursor-pointer">
                              + Add Interest
                            </Badge>
                          )}
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    {editMode && (
                      <Button className="bg-india-saffron hover:bg-india-maroon" onClick={handleSaveProfile}>
                        Save Changes
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings" className="pt-6">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Email Notifications</h3>
                        <p className="text-sm text-gray-500">Receive updates about your trips and promotions</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="email-notif" className="rounded text-india-blue" defaultChecked />
                        <label htmlFor="email-notif" className="text-sm">Enabled</label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">SMS Notifications</h3>
                        <p className="text-sm text-gray-500">Receive text messages for booking confirmations</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="sms-notif" className="rounded text-india-blue" />
                        <label htmlFor="sms-notif" className="text-sm">Disabled</label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                      </div>
                      <Button variant="outline" className="flex items-center">
                        <Shield size={16} className="mr-2" />
                        Enable
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <CreditCard className="mr-3 text-gray-500" />
                        <div>
                          <h3 className="font-semibold">Visa ending in 4242</h3>
                          <p className="text-sm text-gray-500">Expires 05/2025</p>
                        </div>
                      </div>
                      <div>
                        <Button variant="ghost" size="sm">Remove</Button>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-4">
                      Add Payment Method
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Language and Currency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="language" className="text-sm font-medium">
                          Language
                        </label>
                        <div className="flex items-center border rounded-md p-2">
                          <Globe className="mr-2 text-gray-500" size={16} />
                          <select id="language" className="w-full bg-transparent focus:outline-none">
                            <option value="en">English</option>
                            <option value="hi">Hindi</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="currency" className="text-sm font-medium">
                          Currency
                        </label>
                        <div className="flex items-center border rounded-md p-2">
                          <CreditCard className="mr-2 text-gray-500" size={16} />
                          <select id="currency" className="w-full bg-transparent focus:outline-none">
                            <option value="inr">Indian Rupee (₹)</option>
                            <option value="usd">US Dollar ($)</option>
                            <option value="eur">Euro (€)</option>
                            <option value="gbp">British Pound (£)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <Button className="mt-6 bg-india-saffron hover:bg-india-maroon">
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
