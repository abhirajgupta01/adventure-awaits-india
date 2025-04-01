
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';

const Card = ({ image, title, description, rating, location, price, link, stateId, category, itemId }) => {
  // Construct the proper link URL based on the available data
  const getDetailLink = () => {
    if (link) return link;
    
    if (stateId && category && itemId) {
      return `/state/${stateId}/${category}/${itemId}`;
    }
    
    return '#';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 dark:bg-gray-800">
      <img 
        src={image || "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <div className="flex items-center mb-2">
          <MapPin size={16} className="text-gray-500 mr-1" />
          <span className="text-sm text-gray-500 dark:text-gray-400">{location}</span>
        </div>
        <div className="flex items-center mb-3">
          <Star size={16} className="text-yellow-500 mr-1" />
          <span className="text-sm text-gray-700 dark:text-gray-300">{rating}/5</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2 dark:text-gray-400">{description}</p>
        {price && (
          <div className="font-bold text-indigo-600 mb-3 dark:text-indigo-400">₹{price} / night</div>
        )}
        <Link 
          to={getDetailLink()} 
          className="block w-full text-center py-2 bg-india-blue text-white rounded hover:bg-india-maroon transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
