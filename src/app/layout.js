import { Roboto } from "next/font/google";


import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./globals.scss";
import Landing from "./components/Landing/Landing";
import About from "./(pages)/about/about";
import Sponsor from "./components/Sponsors/Sponsors";
import Events from "./(pages)/about/Events";

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
        <Landing/>
        <About/>
        <Events/>
        <Sponsor/>
        {children}
        
        
        <Footer id="footer"/>
      </body>
    </html>
  );
}