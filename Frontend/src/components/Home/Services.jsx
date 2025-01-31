import React from "react";
import footwear from "../../assets/footwear.jpg"
import clothes from "../../assets/clothes.jpg"
import books from "../../assets/books.jpg"
import toys from "../../assets/toys.jpg"
import utensils from "../../assets/utensils.jpg"
import bags from "../../assets/bags.jpg"

const Services = () => {
  return (
  
    <div className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg bg-gray-800 p-6 transform hover:scale-105 transition duration-300">
          <img 
  src={footwear} 
  alt="Footwear" 
  className="mb-4 rounded-lg w-full h-49 object-cover"
/>
            <h3 className="text-xl font-semibold mb-2">Footwear</h3>
            <p className="text-lg">
              Gift Shoes, guide steps.Your soles can uplift another's soul.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6 transform hover:scale-105 transition duration-300">
          <img 
  src={clothes} 
  alt="Clothes" 
  className="mb-4 rounded-lg w-full h-49 object-cover"
/>
            <h3 className="text-xl font-semibold mb-2">Clothes</h3>
            <p className="text-lg">
              Give warmth and style, donate clothes to clothe those in need.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6 transform hover:scale-105 transition duration-300">
          <img 
  src={toys} 
  alt="Toys" 
  className="mb-4 rounded-lg w-full h-49 object-cover"
/>
            <h3 className="text-xl font-semibold mb-2">Toys</h3>
            <p className="text-lg">
              Spread joy, donate toys to light up a child's world with happiness.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6 transform hover:scale-105 transition duration-300">
          <img 
  src={utensils} 
  alt="Utensils" 
  className="mb-4 rounded-lg w-full h-48 object-cover"
/>
            <h3 className="text-xl font-semibold mb-2">Utensils</h3>
            <p className="text-lg">
              Cherish the joy of giving utensils that serve love in every meal.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6 transform hover:scale-105 transition duration-300">
          <img 
  src={books} 
  alt="Books" 
  className="mb-4 rounded-lg w-full h-48 object-cover"
/>
            <h3 className="text-xl font-semibold mb-2">Books</h3>
            <p className="text-lg">
              Ignite minds, donate books to open doors to knowledge and endless adventures.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6 transform hover:scale-105 transition duration-300">
          <img 
  src={bags} 
  alt="Bags" 
  className="mb-4 rounded-lg w-full h-48 object-cover"
/>
            <h3 className="text-xl font-semibold mb-2">Bags</h3>
            <p className="text-lg">
              Carry hope, donate bags to lighten the load and empower someone journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
