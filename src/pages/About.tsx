
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto py-16 px-4 md:px-8">
        <h1 className="india-heading text-center">About Adventure Awaits India</h1>
        
        <div className="max-w-4xl mx-auto mt-10">
          <div className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-india-blue mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              Adventure Awaits India was founded with a simple yet powerful mission: to help travelers discover the 
              incredible beauty, rich culture, and breathtaking experiences that India has to offer. We believe that 
              travel in India should be accessible, enjoyable, and memorable for everyone.
            </p>
            
            <h2 className="text-2xl font-bold text-india-blue mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-6">
              We are a team of passionate travelers, local experts, and technology enthusiasts who have come together 
              to create the ultimate travel planning platform for India. Our team has explored every corner of this 
              diverse country, from the snow-capped Himalayas to the tropical beaches of Kerala, and we're excited 
              to share our knowledge with you.
            </p>
            
            <h2 className="text-2xl font-bold text-india-blue mb-4">What We Offer</h2>
            <p className="text-gray-700">
              Our platform provides comprehensive information on hotels, restaurants, and attractions across India. 
              We carefully curate our recommendations to ensure you have access to authentic experiences that showcase 
              the true spirit of India. Whether you're planning a luxurious getaway or an adventure on a budget, 
              we have resources to help you create the perfect itinerary.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-india-blue mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-4">
              <li><span className="font-semibold">Authenticity:</span> We promote genuine Indian experiences and support local businesses.</li>
              <li><span className="font-semibold">Sustainability:</span> We encourage responsible travel practices that respect local communities and the environment.</li>
              <li><span className="font-semibold">Inclusivity:</span> We believe travel should be accessible to everyone and strive to provide options for all budgets and needs.</li>
              <li><span className="font-semibold">Excellence:</span> We maintain high standards in all our recommendations and services.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
