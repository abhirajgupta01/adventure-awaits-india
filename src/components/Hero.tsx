
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-float">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Adventure Awaits in <span className="text-india-gold">India</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Discover the vibrant culture, ancient monuments, and breathtaking landscapes of incredible India
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-india-saffron hover:bg-india-maroon text-white px-8 py-6 text-lg">
            Explore Hotels
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-india-blue px-8 py-6 text-lg">
            Discover Attractions
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <div className="animate-bounce inline-block">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
