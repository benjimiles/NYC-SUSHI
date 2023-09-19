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
    const fetchData = async () => {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      if (token) {
        setIsLoggedIn(true);

        const res = await fetch('http://localhost:8000/users/me/', {
          headers: {
            Authorization: `Bearer ${token}`,
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
      setLoading(false);  // Set loading to false only after all operations are done
    };

    fetchData();
  }, []);  // Removing the dependency on the token

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userData, setUserData, loginUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
