"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link href="./output.css" rel="stylesheet"></link>
      <nav className="fixed top-0 left-0 right-0 bg-black/10 backdrop-filter backdrop-saturate-180 backdrop-blur-sm rounded-3xl mx-9 my-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src="/images/Drama-Logo (Navbar).png"
                    className="w-21 h-20"
                    alt="logo"
                    width="160"
                    height="20"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
