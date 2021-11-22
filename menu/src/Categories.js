import React from 'react';

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button 
            type='button' 
            className='filter-btn' 
            key={index}  // No pareceria ser necesario
            onClick={() => filterItems(category)}
            >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
