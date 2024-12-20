import Image from 'next/image';
import React from 'react';
import logo from '@/images/logo.jpg';

const HeaderComponent = () => {
  return (
    <header className="w-full bg-gray-100 p-4 flex items-end justify-end sm:justify-between border-b border-gray-300">
      <div className="flex items-center gap-4 rounded-full">
        <Image
          width={50}
          height={50}
          src={logo}
          alt="WebApp Logo"
          className="object-contain rounded-full"
        />
      </div>
    </header>
  );
};

export default HeaderComponent;
