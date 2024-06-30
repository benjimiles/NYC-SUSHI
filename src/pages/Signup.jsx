import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const goBack = () => {
    router.back();
  };

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Perform validation here (e.g., check if passwords match)
    if (password !== confirmPassword) {
      console.log("Passwords don't match!");
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password }),
    };

    try {
      const response = await fetch('http://localhost:8000/signup/', requestOptions);
      if (response.ok) {
        const data = await response.json();
        setIsSignupSuccessful(true);
        router.push('Login')
      } else {
        setIsSignupSuccessful(false);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setIsSignupSuccessful(false);
    }
  };


  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="w-full flex-1 bg-neutral-800">
        <div className="flex justify-center items-center h-full">
        <form onSubmit={handleSignup} className="max-w-[400px] border-2 border-white w-full mx-auto bg-white/70 text-black rounded-2xl my-10 p-8">
              <BiArrowBack onClick={goBack} className="text-black relative cursor-pointer text-[20px]" />
              <h2 className="text-4xl font-bold text-center py-8 relative text-black">NYC Sushi Sign Up</h2>
              {isSignupSuccessful === false && (
                <p className="text-red-500 relative mb-2">You already have an account! Please try again.</p>
              )}
              <div className="flex flex-col mb-4">
                <label className="text-black relative mb-2">Email:</label>
                <input className="rounded-xl border relative border-gray-400 p-2" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-black relative mb-2">Username:</label>
                <input className="rounded-xl border relative border-gray-400 p-2" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              {errorMessage && <p className="text-red-500 relative mb-2">{errorMessage}</p>}
              <div className="flex flex-col">
                <label className="text-black relative mb-2">Password:</label>
                <input className="rounded-xl border relative border-gray-400 p-2" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col">
                <label className="text-black relative mb-2">Confirm Password:</label>
                <input className="rounded-xl border relative border-gray-400 p-2" type="password" placeholder="confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              <button type="submit" className="w-full py-3 mt-8 hover:bg-black duration-300 border relative text-black hover:text-white cursor-pointer rounded-xl bg-white/70">
                Sign Up
              </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
