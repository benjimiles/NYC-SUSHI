'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Initialize the context with the same type of data you plan to put in it.
const AuthContext = createContext([false, () => {}]);

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This is just for debugging, to ensure the provider is working as expected
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
  }, []);

  return <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>{children}</AuthContext.Provider>;
}
