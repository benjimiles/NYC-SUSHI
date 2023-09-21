'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="w-full h-screen top-[90px] bg-zinc-900/70">
      <img
        src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        className="w-full h-full object-cover absolute -z-10"
      ></img>

      <div className="w-full h-[90%] text-center flex flex-col items-center justify-center px-4 text-white">
        <h1 className="text-6xl mt-12 text-white">Indulge in Sushi Heaven: </h1>
        <p className="mb-5 pt-5 text-2xl font-bold">Satisfy Your Cravings Now</p>
        <div className="text-white">
          <button className="px-6 py-2 active:bg-blue-400 hover:bg-black duration-300 border rounded-xl">
            <Link href="/Specials">Get Specials</Link>
          </button>
          <button className="px-6 py-2 active:bg-blue-400 hover:bg-black duration-300 ml-6 border rounded-xl">
            <Link href="/FAQ">FAQ</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
