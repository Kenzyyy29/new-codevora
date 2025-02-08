"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypewriterText = () => {
  return (
   <div className="text-2xl font-mono text-center">
    <Typewriter
     words={[
      "The Best Digital Solution for all of your own bussiness needs.",
      "Enjoy your stay!"
     ]}
     loop={5} // jumlah pengulangan
     cursor
     cursorStyle="_"
     typeSpeed={90}
     deleteSpeed={90}
     delaySpeed={1200}
    />
   </div>
  );
};

export default TypewriterText;
