import { Roboto } from "next/font/google";
import Events from "./(pages)/about/Events";
import About from "./(pages)/about/about";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./globals.scss";

const roboto = Roboto({
  weight: ['400', '700'],
  style: [ 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Advay NIT Silchar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className} >
        <Navbar/>
        <Sidebar />
        <About/>
        <Events/>
        
        
        
        {children}
        <Footer id="footer"/>
      </body>
    </html>
  );
}
