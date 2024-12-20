import HeaderComponent from "@/components/header/HeaderComponent";
import "./globals.css";
import FooterComponent from "@/components/footer/FooterComponent";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body>

        <header>
          <HeaderComponent />
        </header>

        {children}

        <footer>
          <FooterComponent />
        </footer>

      </body>

    </html>
  );
}
