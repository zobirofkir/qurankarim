import GetRecitersAction from '@/redux/actions/GetRecitersAction';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ReciterComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { reciters, loading, error } = useSelector((state) => state.reciters);

  useEffect(() => {
    dispatch(GetRecitersAction());
  }, [dispatch]);

  // Filter reciters based on the search term
  const filteredReciters = reciters.filter((reciter) =>
    reciter.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto grid gap-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">معلومات القراء</h2>
      
      {/* Search input for filtering by name */}
      <input
        type="text"
        placeholder="ابحث عن القارئ"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-md w-full"
      />

      {filteredReciters.map((reciter) => (
        <div key={reciter.id} className="bg-gray-50 p-6 rounded-lg shadow-sm grid gap-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-700">{reciter.name}</h3>
            <span className="text-sm text-gray-500">{reciter.date.slice(0, 10)}</span>
          </div>
          <p className="text-gray-600">الحرف: {reciter.letter}</p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-700">تفاصيل المصحف:</h4>
            {reciter.moshaf.map((moshaf) => (
              <div key={moshaf.id} className="mt-2 p-4 bg-gray-100 rounded-md">
                <p className="text-gray-600">الاسم: {moshaf.name}</p>
                <p className="text-gray-600">إجمالي السور: {moshaf.surah_total}</p>
                <Link
                  href={moshaf.server}
                  target="_blank"
                  className="text-black-500 hover:underline"
                >
                  استمع
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReciterComponent;
