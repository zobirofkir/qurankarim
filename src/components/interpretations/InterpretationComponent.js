import Link from 'next/link';
import React from 'react';

const InterpretationComponent = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">

      {/* Cards Section */}
        <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">سورة {index + 1}</h3>
              <p className="text-gray-600 mb-4">تفسير موجز للسورة {index + 1}.</p>
              <Link href="/interpretations">
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  قراءة المزيد
                </button>
              </Link>
            </div>
          ))}
        </section>

    </div>
  );
};

export default InterpretationComponent;
