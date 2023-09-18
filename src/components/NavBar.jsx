import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useAuth } from '@/AuthContext';
const NavBar = () => {
  const [nav, setNav] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useAuth();
  const [userAvatarURL, setUserAvatarURL] = useState(null);
  const setState = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };
  
  useEffect(() => {
    const fetchAvatar = async () => {
      console.log("Token from LocalStorage: ", localStorage.getItem('token'));


      if (isLoggedIn) {
        try {
          const res = await fetch('http://localhost:8000/users/me/', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,  // Change this to what your API expects
            },
          });
  
          if (res.ok) {
            const data = await res.json();
            setUserAvatarURL(`http://localhost:8000${data.avatar}`);  // Make sure 'avatarURL' is correct
          } else {
            console.error('Failed to fetch avatar, status:', res.status);
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      }
    };
  
    fetchAvatar();
  }, [isLoggedIn]);

  return (
    <div className="w-full h-[70px] bg-black">
      <div className="flex max-w-[1400px] h-full mx-auto px-4 items-center justify-between">
        <div className="cursor-pointer flex font-bold p-2 items-center text-xl">
          <img src="https://cdn-icons-png.flaticon.com/128/2252/2252076.png" className="w-14 mr-4 h-14"></img>
          <h1 className="text-white font-Cinzel text-2xl">
            <Link href="/">NEW YORK CITY SUSHI</Link>
          </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="font-bold flex items-center text-xl text-white">
            <li className="cursor-pointer mx-4">
              <Link href="/About">About</Link>
            </li>
            <li className="cursor-pointer mx-4">
              <Link href="/Order">Order</Link>
            </li>
            <li className="cursor-pointer mx-4">
              <Link href="/Contact">Contact</Link>
            </li>
            <li className="cursor-pointer mx-4">
              <Link href="/Checkout">Checkout</Link>
            </li>
            {isLoggedIn ? (
              <button className="cursor-pointer mx-4" onClick={handleLogout}>
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  {userAvatarURL ? (
              <img src={userAvatarURL} className="w-12 h-12 object-cover"/>

                  ) : (
                    <svg
                      className="absolute w-12 h-12 text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  )}
                </div>
              </button>
            ) : (
              <button className="cursor-pointer mx-4">
                <Link href="/Login">Login</Link>
              </button>
            )}
            {' '}
          </ul>
        </div>

        <div onClick={setState} className="md:hidden block">
          {nav ? (
            <AiOutlineClose size={30} className="cursor-pointer text-white" />
          ) : (
            <AiOutlineMenu size={30} className="cursor-pointer text-white" />
          )}
        </div>

        <div
          className={
            nav
              ? 'duration-300 w-full bg-gradient-to-r bg-black absolute top-[70px] left-0 text-center justify-center flex'
              : 'absolute left-[-100%]'
          }
        >
          <ul className="font-bold items-center text-xl text-white my-10">
            <li className="cursor-pointer my-10">
              <Link href="/About">About</Link>
            </li>
            <li className="cursor-pointer mb-10">
              <Link href="/Order">Order</Link>
            </li>
            <li className="cursor-pointer mb-10">
              <Link href="/Contact">Contact</Link>
            </li>
            <li className="cursor-pointer mb-10">
              <Link href="/Checkout">Checkout</Link>
            </li>
            <li className="cursor-pointer mb-10">
              <Link href="/Checkout">Checkout</Link>
            </li>
            {isLoggedIn ? (
              <button className="cursor-pointer mb-10" onClick={handleLogout}>
                <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                    class="absolute w-12 h-12 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            ) : (
              <button className="cursor-pointer mb-10">
                <Link href="/Login">Login</Link>
              </button>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
