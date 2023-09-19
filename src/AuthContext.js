'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Initialize the context with the same type of data you plan to put in it.
const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => { },
  userData: null,
  setUserData: () => { },
});

export function useAuth() {
  return useContext(AuthContext);

}
async function loginUser(token) {
  localStorage.setItem('token', token);
  setIsLoggedIn(true);
}
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  // This is just for debugging, to ensure the provider is working as expected
  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token) {
          setIsLoggedIn(true);

          const res = await fetch('http://localhost:8000/users/me/', {
            headers: {
              Authorization: `Bearer ${token}`, // Using the previously retrieved token
            },
          });

          if (res.ok) {
            const data = await res.json();
            setUserData(data);
          } else {
            console.error('Failed to fetch user data, status:', res.status);
          }
        } else {
          setIsLoggedIn(false);
        }
      }
    };
    fetchData();
    setLoading(false);
  }, [typeof window !== 'undefined' ? localStorage.getItem('token') : null]); // Added the token as a dependency


  return <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, userData, setUserData,loginUser}}>
    {!loading && children}</AuthContext.Provider>;
}
