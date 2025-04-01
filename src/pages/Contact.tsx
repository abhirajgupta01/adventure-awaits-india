
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto py-16 px-4 md:px-8">
        <h1 className="india-heading text-center mb-4">Contact Us</h1>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Have questions about planning your trip to India? Our travel experts are here to help you create the perfect itinerary.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-india-gold/20 flex items-center justify-center mb-4">
                  <Phone className="text-india-maroon" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">We're available Monday to Saturday, 9am to 6pm IST</p>
                <a href="tel:+911234567890" className="text-india-blue font-medium hover:underline">
                  +91 123 456 7890
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-india-gold/20 flex items-center justify-center mb-4">
                  <Mail className="text-india-maroon" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">We'll respond to your inquiry within 24 hours</p>
                <a href="mailto:info@adventureawaits.com" className="text-india-blue font-medium hover:underline">
                  info@adventureawaits.com
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-india-gold/20 flex items-center justify-center mb-4">
                  <MessageSquare className="text-india-maroon" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with our travel experts in real-time</p>
                <Button className="bg-india-saffron hover:bg-india-maroon">
                  Start Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-india-blue mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Please provide details about your inquiry..." 
                  rows={6}
                />
              </div>
              
              <Button type="submit" className="w-full bg-india-saffron hover:bg-india-maroon">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-india-blue mb-6">Visit Our Office</h2>
            <div className="bg-gray-200 h-[300px] rounded-lg mb-6 flex items-center justify-center">
              <p className="text-gray-500">Map placeholder</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 text-india-maroon flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">123 Travel Plaza, Connaught Place, New Delhi, India - 110001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="mr-3 text-india-maroon flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-india-blue text-center mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I book a custom tour?</h3>
              <p className="text-gray-600">
                You can book a custom tour by contacting our travel experts through phone, email, or by using our contact form. We'll work with you to create a personalized itinerary.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept credit/debit cards, PayPal, bank transfers, and UPI payments for domestic customers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Is travel insurance included?</h3>
              <p className="text-gray-600">
                Travel insurance is not included in our packages, but we strongly recommend purchasing it. We can suggest reliable insurance providers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What is your cancellation policy?</h3>
              <p className="text-gray-600">
                Our cancellation policy varies depending on the package and timing. Please refer to the terms and conditions of your specific booking for details.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
