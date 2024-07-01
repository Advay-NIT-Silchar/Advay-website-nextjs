import Sidebar from "./components/Sidebar";
import "./globals.scss";


export const metadata = {
  title: "Advay NIT Silchar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        
        {children}
      </body>
    </html>
  );
}
