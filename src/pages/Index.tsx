
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Hotels from '../components/Hotels';
import Restaurants from '../components/Restaurants';
import Attractions from '../components/Attractions';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Hotels />
      <Restaurants />
      <Attractions />
      <Footer />
    </div>
  );
};

export default Index;
