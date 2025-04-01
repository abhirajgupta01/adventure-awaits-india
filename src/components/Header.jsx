
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Home, User, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-india-blue">
          Travel India
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-india-maroon dark:text-gray-300">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/hotels" className="text-gray-700 hover:text-india-maroon dark:text-gray-300">Hotels</Link>
          <Link to="/restaurants" className="text-gray-700 hover:text-india-maroon dark:text-gray-300">Restaurants</Link>
          <Link to="/attractions" className="text-gray-700 hover:text-india-maroon dark:text-gray-300">Attractions</Link>
          <Link to="/profile" className="flex items-center space-x-1 text-gray-700 hover:text-india-maroon dark:text-gray-300">
            <User size={18} />
            <span>Profile</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button className="md:hidden text-gray-700 dark:text-gray-300">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
