'use client'
import React, {useState} from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="w-full h-screen top-[90px] bg-zinc-900/70">
        <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full h-full object-cover absolute -z-10"></img>
        
        <div className="w-full h-[90%] text-center flex flex-col items-center justify-center px-4 text-white">
            <h1 className="font-bold text-2xl underline">Welcome to New York City Sushi</h1>
            <h1 className="text-[25px] mt-12 text-white">Indulge in Sushi Heaven: </h1>
            <p className="text-[20px] my-5 font-bold">Embark on a Journey of Flavor.</p>
            <p className="mb-5 font-bold">Satisfy Your Cravings Now</p>
            <div className="text-white">
                <button className="px-6 py-2 hover:bg-black duration-300 border"><Link href="/Specials">Get Specials</Link></button>
                <button className="px-6 py-2 hover:bg-black duration-300 ml-6 border"><Link href="/FAQ">FAQ</Link></button>
            </div>
        </div>

    </div>
  )
}

export default Hero