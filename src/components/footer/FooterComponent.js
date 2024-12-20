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
            <a 
              href="/about" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              عن الموقع
            </a>
          </li>
          <li>
            <a 
              href="/contact" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              اتصل بنا
            </a>
          </li>
          <li>
            <a 
              href="/privacy" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              سياسة الخصوصية
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterComponent;
