
import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CustomerSupport = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Need Help with Your Trip?</h2>
        <p className="text-lg mb-8 text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
          Our customer support team is available 24/7 to assist you with any questions or issues related to your bookings.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center dark:bg-gray-800">
            <div className="bg-india-blue bg-opacity-10 p-3 rounded-full mb-4">
              <Phone className="h-8 w-8 text-india-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Call Us</h3>
            <p className="text-gray-600 mb-4 dark:text-gray-400">Speak directly with our support team</p>
            <a href="tel:+918001234567" className="text-india-blue font-semibold hover:underline dark:text-india-gold">
              +91 800 123 4567
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center dark:bg-gray-800">
            <div className="bg-india-maroon bg-opacity-10 p-3 rounded-full mb-4">
              <Mail className="h-8 w-8 text-india-maroon" />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Email Us</h3>
            <p className="text-gray-600 mb-4 dark:text-gray-400">Send us your queries anytime</p>
            <a href="mailto:support@travelindia.com" className="text-india-maroon font-semibold hover:underline dark:text-india-gold">
              support@travelindia.com
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center dark:bg-gray-800">
            <div className="bg-india-saffron bg-opacity-10 p-3 rounded-full mb-4">
              <MessageCircle className="h-8 w-8 text-india-saffron" />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Live Chat</h3>
            <p className="text-gray-600 mb-4 dark:text-gray-400">Chat with our support team</p>
            <Button className="bg-india-saffron hover:bg-india-gold text-white">
              Start Chat
            </Button>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-india-blue bg-opacity-5 rounded-lg dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-3 dark:text-white">Frequently Asked Questions</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Check our <a href="#" className="text-india-blue hover:underline dark:text-india-gold">FAQ section</a> for quick answers to common questions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
