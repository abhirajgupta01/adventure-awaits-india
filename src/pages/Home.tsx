
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Header from '../components/Header';
import StateSelector from '../components/StateSelector';
import CategorySelector from '../components/CategorySelector';
import CardList from '../components/CardList';
import AuthForm from '../components/AuthForm';
import CustomerSupport from '../components/CustomerSupport';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('popular');

  const categories = [
    { id: 'popular', name: 'Popular' },
    { id: 'beach', name: 'Beaches' },
    { id: 'mountain', name: 'Mountains' },
    { id: 'historical', name: 'Historical' },
    { id: 'pilgrimage', name: 'Pilgrimage' },
    { id: 'wildlife', name: 'Wildlife' }
  ];

  const featuredHotels = [
    {
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Taj Palace',
      description: 'Experience luxury in the heart of Delhi with stunning architecture and world-class amenities.',
      rating: 4.8,
      location: 'New Delhi',
      price: '12,000',
      link: '/hotel/taj-palace'
    },
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Leela Palace',
      description: 'A royal retreat with beautiful gardens and exceptional service.',
      rating: 4.7,
      location: 'Udaipur',
      price: '18,500',
      link: '/hotel/leela-palace'
    },
    {
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Grand Hyatt',
      description: 'Modern comfort with spectacular ocean views and private beach access.',
      rating: 4.6,
      location: 'Goa',
      price: '9,800',
      link: '/hotel/grand-hyatt'
    }
  ];

  const topAttractions = [
    {
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Taj Mahal',
      description: 'One of the world\'s seven wonders, this marble mausoleum is a testament to eternal love.',
      rating: 4.9,
      location: 'Agra, Uttar Pradesh',
      link: '/attraction/taj-mahal'
    },
    {
      image: 'https://images.unsplash.com/photo-1587295656906-b06c9797d2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Jaipur City Palace',
      description: 'Explore the magnificent royal residence with museums and beautiful courtyards.',
      rating: 4.7,
      location: 'Jaipur, Rajasthan',
      link: '/attraction/jaipur-palace'
    },
    {
      image: 'https://images.unsplash.com/photo-1590050752117-08c599c4712b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Varanasi Ghats',
      description: 'Experience the spiritual heart of India along the banks of the sacred Ganges river.',
      rating: 4.8,
      location: 'Varanasi, Uttar Pradesh',
      link: '/attraction/varanasi-ghats'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <Hero />
        
        <section id="explore" className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Explore Incredible India</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <StateSelector onStateChange={setSelectedState} />
            <CategorySelector 
              categories={categories} 
              onSelectCategory={setSelectedCategory} 
            />
          </div>
          
          <CardList 
            items={featuredHotels} 
            title="Featured Hotels" 
            viewAllLink="/hotels" 
          />
          
          <Separator className="my-12" />
          
          <CardList 
            items={topAttractions} 
            title="Top Attractions" 
            viewAllLink="/attractions" 
          />
        </section>
        
        <section id="auth" className="bg-gray-100 py-16 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Join Our Community</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Create an account to save your favorite destinations, get personalized recommendations, and book your trips with ease.
              </p>
            </div>
            <AuthForm />
          </div>
        </section>
        
        <section id="support" className="py-16">
          <CustomerSupport />
        </section>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Home;
