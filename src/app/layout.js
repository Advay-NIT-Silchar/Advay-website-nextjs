import Sidebar from "./components/Sidebar";
import "./globals.scss";
import Events from "./(pages)/about/Events";
import bg1 from "./components/spacebg.jpg";
import About from "./(pages)/about/about";



export const metadata = {
  title: "Advay NIT Silchar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
        <Sidebar />
        <About/>
        <Events/>
        
        
        
        {children}
      </body>
    </html>
  );
}
