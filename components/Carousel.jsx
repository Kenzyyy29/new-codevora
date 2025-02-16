"use client"

import React from 'react';
import Slider from 'react-slick';

const LogoCarousel = () => {
  const logos = [
   {src: "/logos/1.png", alt: "Logo 1"},
   {src: "/logos/1.png", alt: "Logo 2"},
   {src: "/logos/1.png", alt: "Logo 3"},
   {src: "/logos/1.png", alt: "Logo 4"},
   {src: "/logos/1.png", alt: "Logo 5"},
   {src: "/logos/1.png", alt: "Logo 6"},
   {src: "/logos/1.png", alt: "Logo 7"},
   {src: "/logos/1.png", alt: "Logo 8"},
  ];

  const settings = {
   slidesToShow: 5,
   slidesToScroll: 1,
   infinite: true,
   speed: 7000,
   autoplay: true, 
   autoplaySpeed: 0,
   cssEase: "Linear",
   arrows: false
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center px-1 lg:px-0">
            <img src={logo.src} alt={logo.alt} className="h-50 lg:h-20" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;