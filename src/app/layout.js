import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.scss";


export const metadata = {
  title: "Advay NIT Silchar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Sidebar />
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
