"use client";

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useSearchParams } from 'next/navigation';
import GetInterpretationInfoAction from '@/redux/actions/GetInterpretationInfoAction';
import PaginationComponent from '@/components/paginations/PaginationComponent';

const Page = () => {
  const pathname = usePathname(); 
  const searchParams = useSearchParams();

  const id = pathname?.split('/').pop(); 

  const dispatch = useDispatch();
  const { loading, error, interpretationInfo } = useSelector(
    (state) => state.interpretationInfo
  );

  const [currentPage, setCurrentPage] = useState(1); 
  const [searchTerm, setSearchTerm] = useState(''); // State for the search term

  const totalPages = interpretationInfo?.soar?.length ? Math.ceil(interpretationInfo.soar.length / 5) : 1;

  useEffect(() => {
    if (id) {
      dispatch(GetInterpretationInfoAction(id));
    }
  }, [id, dispatch]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1)); 
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages)); 
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update the search term
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">جار التحميل...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">خطأ: {error}</div>;
  }

  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 10;
  const filteredSoar = interpretationInfo?.soar?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by name
  );
  const paginatedSoar = filteredSoar?.slice(startIndex, endIndex);

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">{interpretationInfo.name}</h1>
      
      {/* Search input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="ابحث عن طريق اسم القارئ..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Display interpretation content */}
      <div className="space-y-6">
        {paginatedSoar?.length > 0 ? (
          paginatedSoar.map((item, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-md shadow-sm">
              <p className="text-lg font-medium text-gray-800">{item.name}</p>
              <div className="text-gray-600">
                {/* MP3 player for Quran recitation */}
                <audio controls className="w-full mt-2">
                  <source src={item.url} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No data available</p>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-6">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={handlePrevPage}
          onNext={handleNextPage}
        />
      </div>
    </div>
  );
};

export default Page;
