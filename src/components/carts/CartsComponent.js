import React from 'react';
import Image from 'next/image';


const CartsComponent = () => {
  const cartItems = [
    { id: 1, name: "القارئ محمود علي", imageUrl: "https://via.placeholder.com/50?text=1" },
    { id: 2, name: "القارئ عبد الرحمن السديس", imageUrl: "https://via.placeholder.com/50?text=2" },
    { id: 3, name: "القارئ مشاري العفاسي", imageUrl: "https://via.placeholder.com/50?text=3" },
    { id: 4, name: "القارئ سعد الغامدي", imageUrl: "https://via.placeholder.com/50?text=4" },
    { id: 5, name: "القارئ ماهر المعيقلي", imageUrl: "https://via.placeholder.com/50?text=5" },
    { id: 6, name: "القارئ يوسف القرضاوي", imageUrl: "https://via.placeholder.com/50?text=6" },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Wrapper for the carts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cartItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg flex items-center flex justify-between items-center ">
            <Image
              width={50}
              height={50} 
              src={item.imageUrl} 
              alt={`Cart Image ${item.id}`} 
              className="w-12 h-12 object-cover rounded-full mr-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartsComponent;
