"use client";

import HeaderComponent from "@/components/header/HeaderComponent";
import { Provider } from "react-redux";
import "./globals.css";
import FooterComponent from "@/components/footer/FooterComponent";
import MetadataComponent from "@/components/metadata/MetadataComponent";
import ReaderComponent from "@/components/readers/ReaderComponent";
import store from "@/redux/store/store";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">

      <head>
        <MetadataComponent />
      </head>

      <body className="container mx-auto bg-gray-100">
        
      <Provider store={store}>


        {/* Main Wrapper for Header, Sidebar, and Content */}
        <div className="flex flex-col md:flex-row min-h-screen">
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">

          {/* Header */}
          <HeaderComponent />

          {/* Reader */}
          <ReaderComponent />

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-6 bg-gray-100 overflow-y-auto">
                {children}
            </main>

            {/* Footer */}
            <FooterComponent />

          </div>
        </div>

        </Provider>

      </body>

    </html>
  );
}
