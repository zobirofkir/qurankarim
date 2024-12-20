import Image from "next/image";
import React from "react";
import logo from "@/images/logo.jpg";
import SidebarComponent from "../sidebare/SidebareComponent";

const HeaderComponent = () => {
  return (
    <header className="w-full bg-gray-100 p-4  border-b border-gray-300 flex items-center justify-between w-full">
      <div className="flex items-start justify-end gap-4 rounded-full">
        <Image
          width={50}
          height={50}
          src={logo}
          alt="WebApp Logo"
          className="object-contain rounded-full"
        />
      </div>

      <SidebarComponent />

    </header>
  );
};

export default HeaderComponent;
