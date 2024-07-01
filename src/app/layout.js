import "./globals.scss";
import Sidebar from "./components/sidebar";


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
