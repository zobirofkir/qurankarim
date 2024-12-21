import Link from 'next/link';
import React, { useState } from 'react';

const SidebarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative bg-gray-100 z-[900]">

      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="p-4 text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 md:w-64 w-56 bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 bg-gray-100">
          <h1 className="text-lg font-semibold text-gray-800">القرآن الكريم</h1>

          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="px-4 py-2 flex flex-col mt-[20px]">
          <ul className="space-y-8">
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer flex items-center space-x-2">
              <svg
                className="w-5 h-5 ml-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M3 14h18M3 6h18"
                />
              </svg>
              <Link href="/">
                <span>الرئيسية</span>
              </Link>
            </li>

              <li className="text-gray-700 hover:text-gray-900 cursor-pointer flex items-center space-x-2">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 11h4a1 1 0 110 2H8a1 1 0 110-2zm0-4h4a1 1 0 110 2H8a1 1 0 110-2z" />
                </svg>

                <Link href="/interpretations">
                  <span>تفسير القرآن</span>
                </Link>
              </li>

            
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer flex items-center space-x-2">
              <svg
                className="w-5 h-5 ml-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v14m7-7H5"
                />
              </svg>
             <Link href="/radio">
              <span>الراديو</span>
             </Link>
            </li>
            
            {/* Additional List Items */}
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer flex items-center space-x-2">
              <svg
                className="w-5 h-5 ml-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              </svg>
              <span>الآيات</span>
            </li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer flex items-center space-x-2">
              <svg
                className="w-5 h-5 ml-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3h14M5 12h14M5 21h14"
                />
              </svg>
              <span>التفسير</span>
            </li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer flex items-center space-x-2">
              <svg
                className="w-5 h-5 ml-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m-8-8h16"
                />
              </svg>
              <span>الحديث الشريف</span>
            </li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer flex items-center space-x-2">
              <svg
                className="w-5 h-5 ml-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8l4 4-4 4m0-8l-4 4 4 4"
                />
              </svg>
              <span>دليل المستخدم</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SidebarComponent;
