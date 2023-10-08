import React from 'react';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <NavBar />

      <div className="w-full h-screen top-[90px] bg-zinc-900/70">
        <img
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          className="w-full h-full object-cover absolute -z-10"
        ></img>
        <h1 className="font-bold text-6xl pt-10 text-center text-white">Reach out to us!</h1>
        <div className="w-full h-[80%] text-center flex flex-col sm:flex-row items-center justify-center px-4 text-white">
          <div className="text-[25px] text-left mt-4 text-white">
            <h2>Contact Details:</h2>
            <p className="text-[25px] mt-4 text-white">Phone: 111-222-3333</p>
            <p>Email: support@nycsushi.com</p>
            <p>Address: 456 Park Avenue, New York, NY 10022</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
