import Link from 'next/link';
import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 text-center rtl">
      <div className="mb-4">
        <p className="text-sm">© 2024 موقع القرآن الكريم. جميع الحقوق محفوظة.</p>
      </div>
      <div>
        <ul className="list-none flex justify-center gap-6 m-0 p-0">
          <li>
            <Link
              href="" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              عن الموقع
            </Link>
          </li>
          <li>
            <Link
              href="" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              اتصل بنا
            </Link>
          </li>
          <li>
            <Link
              href="" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              سياسة الخصوصية
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterComponent;
