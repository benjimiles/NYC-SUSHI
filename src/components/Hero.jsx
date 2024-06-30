'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="w-full h-screen top-[90px] bg-zinc-900/70">
      <img
        src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        className="w-full h-full absolute -z-10"
      ></img>

      <div className="w-full h-[90%] text-center flex flex-col items-center justify-center px-4 text-white">
        <h1 className="text-4xl mt-6 text-white">Indulge in Sushi Heaven: </h1>
        <p className="mb-5 pt-5 text-2xl">Satisfy Your Cravings Now</p>
        <div className="text-white flex justify-center my-10">
            <Link className="py-3 px-4 mx-3 rounded-md border cursor-pointer hover:bg-black duration-300" href="/Specials">Get Specials</Link>
            <Link className="bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-4 mx-3 rounded-md" href="/Reservation">Book a Reservation</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
