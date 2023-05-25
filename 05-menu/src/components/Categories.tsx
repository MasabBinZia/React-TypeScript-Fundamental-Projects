import React from 'react';

interface CategoriesProps {
  categories: string[];
  filterItems: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ categories, filterItems }) => {
  return (
    <div className="btn-container mb-16 flex justify-center">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
            key={index}
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
