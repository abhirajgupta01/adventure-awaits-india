
import React from 'react';
import Card from './Card';

const CardList = ({ items, title, viewAllLink, category, stateId }) => {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h2>
        {viewAllLink && (
          <a 
            href={viewAllLink} 
            className="text-india-blue hover:text-india-maroon dark:text-india-gold"
          >
            View All
          </a>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card 
            key={index}
            image={item.image}
            title={item.name || item.title}
            description={item.description}
            rating={item.rating}
            location={item.location}
            price={item.price}
            link={item.link}
            stateId={stateId}
            category={category}
            itemId={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
