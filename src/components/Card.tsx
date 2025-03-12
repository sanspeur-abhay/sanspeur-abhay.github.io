import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4">
      {imageUrl && (
        <img 
          className="w-full h-48 object-cover" 
          src={imageUrl} 
          alt={title}
        />
      )}
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card; 