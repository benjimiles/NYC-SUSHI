import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useAuth } from '@/AuthContext';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(0);
  const { isLoggedIn, setIsLoggedIn, userData } = useAuth();
  const [userAvatarURL, setUserAvatarURL] = useState(null);
  const setState = () => {
    setNav(!nav);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
  };
  useEffect(() => {
    if (userData && userData.avatar) {
      setUserAvatarURL(`${userData.avatar}`);
    }
  }, [userData, userAvatarURL]);
  return (
    <div className="w-full h-[70px] bg-[#001C30] border-b-2 py-10">
      <div className="flex max-w-[1400px] h-full mx-auto px-4 items-center justify-between">
        <div className="cursor-pointer flex font-bold p-2 items-center text-xl">
          <img src="https://cdn-icons-png.flaticon.com/128/2252/2252076.png" className="w-14 mr-4 h-14"></img>
          <h1 className="text-white font-Cinzel text-2xl">
            <Link href="/">NEW YORK CITY SUSHI</Link>
          </h1>
        </div>

        <div className="hidden md:flex">
          <ul className="font-bold flex items-center text-xl text-white">
            <li className="cursor-pointer active:text-blue-400 mx-4">
              <Link href="/About">About</Link>
            </li>
            <li className="cursor-pointer active:text-blue-400 mx-4">
              <Link href="/Order">Menu</Link>
            </li>
            <li className="cursor-pointer active:text-blue-400 mx-4">
              <Link href="/Contact">Contact</Link>
            </li>
            <div className="relative  mx-5 mr-5">
            <Link href="/Checkout">
              <div className="t-0 absolute left-3">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                  0
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="file: mt-4 h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Link>
            </div>
            {isLoggedIn ? (
              <>
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    {userAvatarURL ? (
                      <img src={userAvatarURL} className="w-12 h-12 object-cover" />
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
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/Profile-settings"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Account settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Support
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              License
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                onClick={handleLogout}
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block w-full px-4 py-2 text-left text-sm'
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </>
            ) : (
              <button className="cursor-pointer active:text-blue-400 mx-4">
                <Link href="/Login">Login</Link>
              </button>
            )}{' '}
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
              ? 'duration-300 w-full bg-gradient-to-r bg-[#001C30] absolute top-[70px] left-0 text-center justify-center flex'
              : 'absolute left-[-100%]'
          }
        >
          <ul className="font-bold items-center text-xl text-white my-10">
            <li className="cursor-pointer active:text-blue-400 my-10">
              <Link href="/About">About</Link>
            </li>
            <li className="cursor-pointer active:text-blue-400 mb-10">
              <Link href="/Order">Order</Link>
            </li>
            <li className="cursor-pointer active:text-blue-400 mb-10">
              <Link href="/Contact">Contact</Link>
            </li>
            <li className="cursor-pointer active:text-blue-400 mb-10">
              <Link href="/Checkout">Checkout</Link>
            </li>
            <li className="cursor-pointer active:text-blue-400 mb-10">
              <Link href="/Checkout">Checkout</Link>
            </li>
            {isLoggedIn ? (
              <>
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    {userAvatarURL ? (
                      <img src={userAvatarURL} className="w-12 h-12 object-cover" />
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
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/Profile-settings"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Account settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Support
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              License
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                onClick={handleLogout}
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block w-full px-4 py-2 text-left text-sm'
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </>
            ) : (
              <button className="cursor-pointer active:text-blue-400 mx-4">
                <Link href="/Login">Login</Link>
              </button>
            )}{' '}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
