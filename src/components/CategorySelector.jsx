
import React, { useState } from 'react';

const CategorySelector = ({ categories, onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || '');
  
  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    onSelectCategory(categoryId);
  };
  
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === category.id
              ? 'bg-india-saffron text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
          }`}
          onClick={() => handleCategorySelect(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
