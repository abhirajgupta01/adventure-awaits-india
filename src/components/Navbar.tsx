
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">Adventure Awaits</span>
          <span className="text-india-green font-bold">India</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection('home')}
            className="font-medium hover:text-india-saffron transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('hotels')}
            className="font-medium hover:text-india-saffron transition-colors"
          >
            Hotels
          </button>
          <button 
            onClick={() => scrollToSection('restaurants')}
            className="font-medium hover:text-india-saffron transition-colors"
          >
            Restaurants
          </button>
          <button 
            onClick={() => scrollToSection('attractions')}
            className="font-medium hover:text-india-saffron transition-colors"
          >
            Attractions
          </button>
        </div>
        
        <div className="hidden md:block">
          <Button className="bg-india-saffron hover:bg-india-maroon">Plan Your Trip</Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-india-saffron"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('home')}
            className="font-medium hover:text-india-saffron transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('hotels')}
            className="font-medium hover:text-india-saffron transition-colors"
          >
            Hotels
          </button>
          <button 
            onClick={() => scrollToSection('restaurants')}
            className="font-medium hover:text-india-saffron transition-colors"
          >
            Restaurants
          </button>
          <button 
            onClick={() => scrollToSection('attractions')}
            className="font-medium hover:text-india-saffron transition-colors"
          >
            Attractions
          </button>
          <Button className="bg-india-saffron hover:bg-india-maroon">Plan Your Trip</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
