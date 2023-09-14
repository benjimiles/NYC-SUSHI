import React from 'react';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';

const Checkout = () => {
  return (
    <div>
        <NavBar />
        <div className="w-full h-full top-[90%] bg-zinc-900/70">
            <img
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            className="w-full h-full object-cover absolute top-0 left-0 -z-10"
            ></img>

            <div className="w-full h-auto text-center md:py-8 lg:py-10 text-white">
                <h1 className="sm:text-xl md:text-2xl lg:text-3xl pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6">Your Orders:</h1>
                <button className="px-6 py-2 hover:bg-black duration-300 border">Proceed to Checkout</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Checkout