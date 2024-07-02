"use client";

import { ChevronUp } from "lucide-react";
import Image from "next/image";


const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ showScroll]);
  return (
    <>
      <link href="./output.css" rel="stylesheet"></link>
      <div
        className="h-screen  w-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url("images/Footerbackground.png")`,
        }}
      >
        <footer
          className=" text-white py-6 flex items-end"
          style={{ height: "550px" }}
        >
          <div className="container mx-auto text-center">
           <Image
            src="/images/Drama-Logo (Navbar).png"
            alt="Advay Logo"
            className="mx-auto mb-2 w-34 h-32"
            width="300"
            height="32"
            />
            <p>All Rights Reserved @Advay, NIT Silchar</p>
          </div>
          {showScroll && (
          <button
            aria-label="Scroll to Top"
            onClick={scrollToTop}
            className="absolute bottom-2 right-4 text-white flex items-center justify-center p-3 rounded-full shadow-lg hover:bg-gray-600"
          >
            <ChevronUp size={55} strokeWidht={150} className="mt-1" />
          </button>)}
        </footer>
      </div>
    </>
  );
};

export default Footer;
