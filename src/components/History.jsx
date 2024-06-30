'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="w-full h-full top-[100%] bg-neutral-800">

      <div className="w-full h-[100%] px-12 md:px-80 text-center flex flex-col items-center justify-center py-40 text-white">
        <h2 className="text-3xl sm:text-6xl mt-4 text-white">Interested In Our Story? </h2>
        <p className="text-md sm:text-2xl pb-6 my-6">Embark on a Journey of Sushi Enchantment!</p>
        <p className="text-white sm:text-2xl lg:text-xl">
          {' '}
          Nestled in the heart of the city that never sleeps, New York City Sushi is not just a restaurant; it is a
          testament to the innovative spirit and gastronomic passion that define our bustling metropolis. Our story
          began with a vision to reimagine sushi – not merely as a dish, but as an experience that captures the vibrancy
          of the city itself.
        </p>
        <p className="text-white pt-5 sm:pt-10 text-lg sm:text-2xl lg:text-xl">
          The fusion of diverse cultures, the boldness of urban creativity, and the precision of culinary craftsmanship
          converge within our walls. From the moment you step in, you are not just dining; you are becoming part of a
          legacy where each roll is a canvas, and every bite is an exploration of flavors as dynamic as the city that
          inspired them. At New York City Sushi, every dish tells a story – a story of how tradition and modernity dance
          in perfect harmony, offering you a symphony of tastes that can only be found in the heart of the Big Apple.
          Welcome to a culinary journey that celebrates the spirit of New York and the artistry of sushi like never
          before.
        </p>
      </div>
    </div>
  );
};

export default Hero;
