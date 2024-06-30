import React from 'react';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/AuthContext';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {isLoggedIn, loginUser} = useAuth();
  const router = useRouter(); // Initialize useRouter hook
  // Check if user is already logged in
 
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(process.env.AUTHENTICATE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (res.status === 200) {
      loginUser(data.access);  // Call the loginUser method from your AuthContext
      router.push('/Order');  // Navigate to another page
      console.log('Token:', data.access);
    } else {
      setErrorMessage(data.error || 'Authentication failed.');
      console.log('Error:', data.error);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="w-full flex-1 bg-neutral-800">
        <div className="flex justify-center items-center h-full p-20">
          {isLoggedIn ? (
            <p className="text-4xl font-bold text-center py-8 text-white">You are already logged in.</p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-[400px] w-full h-full my-10 p-8 border-2 rounded-2xl bg-white/60 text-black drop-shadow-2xl"
            >
              <h2 className="text-4xl font-bold text-center pb-5">Client Login</h2>
              <div className="flex flex-col mb-4">
                <label className="font-bold">Username:</label>
                <input
                  className="border-2 border-gray-400 bg-white p-3 rounded-xl"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Password:</label>
                <input
                  className="border-2 border-gray-400 bg-white p-3 rounded-xl"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}

              <button className="w-full py-3 mb-2 mt-8 hover:bg-black duration-300 border-2 border-white text-black font-bold hover:text-white cursor-pointer rounded-xl bg-white/70">
                Sign in
              </button>
              <p className="text-black text-left pb-5">
                <input className="mr-1.5" type="checkbox"></input>Remember this account
              </p>
              <p className="text-black text-center">
                <span className="text-blue-700 font-bold cursor-pointer">
                  <Link href="/Signup">Sign up</Link>
                </span>{' '}
                to become a member
              </p>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
