"use client"
import React , {useState} from 'react'
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';


const Navbar=()=>{
  const[isClick, setisClick]=useState(false);
  const toggleNavbar=()=>{
    setisClick(!isClick);
  };
  return(
    <>
    <link href="./output.css" rel="stylesheet"></link>
    <nav className="bg-black/10 backdrop-filter backdrop-saturate-180 backdrop-blur-sm rounded-3xl mx-9 my-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
           <div className="flex-shrink-0"><a href="/" className="text-white">
            <img className="w-21 h-20 " src="./images/Drama-Logo (Navbar).png" alt="logo" />
           </a>
           </div>
           
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a href="/" className="text-white font-semibold hover:bg-white hover:text-black rounded-lg p-2">Home</a>
              <a href="/" className="text-white font-semibold hover:bg-white hover:text-black rounded-lg p-2">About Us</a>
              <a href="/" className="text-white font-semibold hover:bg-white hover:text-black rounded-lg p-2">Events</a>
              <a href="/" className="text-white font-semibold hover:bg-white hover:text-black rounded-lg p-2">Sponsors</a>
              <a href="/" className="text-white font-semibold hover:bg-white hover:text-black rounded-lg p-2">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}>
               {isClick ?( 
                <X/>
               ) : (
                <Menu/>
               )}
            </button>
          </div>
         </div>    
      </div>
         {isClick &&(
          <div className="md-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">Home</a>
              <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">About Us</a>
              <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">Events</a>
              <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">Sponsors</a>
              <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">Contact Us</a>
            </div>
          </div>
         )}
    </nav>
    </>
  )
}


export default Navbar