import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/AuthContext';

const ProfilePic = () => {
  return (
    <div>
    <NavBar />

    <div className="w-full h-screen top-[90px] bg-zinc-900/70">
      <img
        src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        className="w-full h-full object-cover absolute -z-10"
      ></img>
      <h1 className="font-bold text-6xl pt-10 text-center text-white">Reach out to us!</h1>
      <div className="w-full h-[80%] text-center flex items-center justify-center px-4 text-white">
        <div className="flex flex-col mr-20">
          <label className="text-2xl" htmlFor="">
            Name:
          </label>
          <input className="text-black" type="text" name="" id="" />

          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Profile Picture</label>
          <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"></input>
          
          <button className="bg-black mt-5 p-1 text-xl rounded-lg border-2 border-white">Submit</button>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default ProfilePic