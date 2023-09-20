'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  userData: null,
  setUserData: () => {},
  loginUser: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginUser = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    let currentToken = null;
    
    // Check if we're running on the client side
    if (typeof window !== 'undefined') {
      currentToken = localStorage.getItem('token');
    }
  
    const fetchData = async () => {
      if (currentToken) {
        setIsLoggedIn(true);
  
        const res = await fetch('http://localhost:8000/users/1/', {
          headers: {
            Authorization: `Bearer ${currentToken}`,
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
      setLoading(false);
    };
  
    fetchData();
  }, []);  // Dependency array is now empty
  

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userData, setUserData, loginUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
