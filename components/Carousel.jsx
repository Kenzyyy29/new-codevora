"use client";

import {useEffect, useState} from "react";

const logos = [
 "/Logos/1.png",
 "/Logos/1.png",
 "/Logos/1.png",
 "/Logos/1.png",
 "/Logos/1.png",
];

const LogoCarousel = () => {
 const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
  }, 3000);

  return () => clearInterval(interval);
 }, []);
 return (
  <div className="overflow-hidden relative w-full h-32">
   <div
    className="flex transition-transform duration-500"
    style={{transform: `translateX(-${currentIndex * 100}%)`}}>
    {logos.map((logo, index) => (
     <div
      key={index}
      className="flex-shrink-0 w-full h-full flex items-center justify-center">
      <img
       src={logo}
       alt={`Logo ${index + 1}`}
       className="h-24 object-contain"
      />
     </div>
    ))}
   </div>
  </div>
 );
};

export default LogoCarousel
