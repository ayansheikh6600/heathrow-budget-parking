// components/TestimonialCard.js
import React from 'react';

const TestimonialCard = ({ name, text, image }:any) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm mx-auto">
      <img 
        src={image} 
        alt={`${name}'s profile picture`}
        className="w-16 h-16 rounded-full mx-auto"
      />
      <h2 className="text-lg font-semibold mt-4">{name}</h2>
      <div className="flex justify-center mt-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 fill-current text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568L24 9.75l-6 5.845 1.417 8.262L12 18.896l-7.417 4.961L6 15.595 0 9.75l8.332-1.595L12 .587z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-600 mt-4">{text}</p>
    </div>
  );
};

export default TestimonialCard;
