import React, { useState, useEffect } from 'react';
import allinone from "../assets/allinone.png";
import laptop from "../assets/laptop.png";
import laptops from "../assets/laptopes.png";
import print from "../assets/print.png";

function Hero() {
  const images = [
    
    allinone,
    laptop,
    laptops,
    print,

    print,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white h-screen flex flex-col md:flex-row justify-evenly items-center p-4">
      <div className="text-center md:text-left md:w-[370px] items-center mb-6 md:mb-0">
        <h1 className="text-3xl md:text-5xl mb-4 font-bold">Electronics</h1>
        <p className="mb-4 text-sm md:text-base">
          Discover the latest tech gadgets and take your lifestyle to the next level!
        </p>
        <button className="bg-black px-8 py-2 rounded text-white">
          Shop Now
        </button>
      </div>

      {/* Image Slider */}
      <div className="flex justify-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-[300px] h-[220px] md:w-[500px] md:h-[350px] lg:w-[550px] lg:h-[400px] rounded transition-opacity"
        />
      </div>
    </div>
  );
}

export default Hero;
