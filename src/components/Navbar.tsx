
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, User, ShoppingBag, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    // If we're on the homepage, scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">Adventure Awaits</span>
          <span className="text-india-green font-bold">India</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="font-medium hover:text-india-saffron transition-colors">
            Home
          </Link>
          <Link to="/explore-states" className="font-medium hover:text-india-saffron transition-colors">
            Explore States
          </Link>
          <Link to="/about" className="font-medium hover:text-india-saffron transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-medium hover:text-india-saffron transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/bookings">
            <Button variant="ghost" className="p-2">
              <ShoppingBag size={20} />
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost" className="p-2">
              <User size={20} />
            </Button>
          </Link>
          <Link to="/login">
            <Button className="bg-india-saffron hover:bg-india-maroon flex items-center">
              <LogIn size={16} className="mr-2" />
              Sign In
            </Button>
          </Link>
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
          <Link to="/" className="font-medium hover:text-india-saffron transition-colors" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/explore-states" className="font-medium hover:text-india-saffron transition-colors" onClick={() => setIsMenuOpen(false)}>
            Explore States
          </Link>
          <Link to="/about" className="font-medium hover:text-india-saffron transition-colors" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="font-medium hover:text-india-saffron transition-colors" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <div className="border-t border-gray-200 pt-4 flex flex-col space-y-2">
            <Link to="/bookings" className="font-medium hover:text-india-saffron transition-colors flex items-center" onClick={() => setIsMenuOpen(false)}>
              <ShoppingBag size={16} className="mr-2" />
              My Bookings
            </Link>
            <Link to="/profile" className="font-medium hover:text-india-saffron transition-colors flex items-center" onClick={() => setIsMenuOpen(false)}>
              <User size={16} className="mr-2" />
              My Profile
            </Link>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-india-saffron hover:bg-india-maroon flex items-center justify-center">
                <LogIn size={16} className="mr-2" />
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
