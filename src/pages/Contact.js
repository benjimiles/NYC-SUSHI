import React from 'react'
import NavBar from '../pages/NavBar'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';

const Contact = () => {
  return (
    <div>
        <NavBar />

        <div className="w-full h-screen top-[90px] bg-zinc-900/70">
        <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full h-full object-cover absolute -z-10"></img>
        
        <div className="w-full h-[90%] text-center flex flex-col items-center justify-center px-4 text-white">
            <h1 className="font-bold text-2xl underline">Contact Sushi Muchi:</h1>
            <h1 className="text-[25px] mt-12 text-white">Fax: 111-222-3333</h1>
            <h1 className="text-[25px] mt-4 text-white">Phone: 111-222-3333</h1>
        </div>

      </div>
    </div>
  )
}

export default Contact