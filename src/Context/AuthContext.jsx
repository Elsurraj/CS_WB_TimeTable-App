// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext(null);

// AuthProvider component to wrap your application
export const AuthProvider = ({ children }) => {
  // Initialize isAuthenticated from localStorage to persist login status
  // It checks if 'isAuthenticated' in localStorage is 'true'.
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('isAuthenticated') === 'true'
  );

  // Use useEffect to update localStorage whenever isAuthenticated changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  // Function to set the user as logged in
  const login = () => {
    setIsAuthenticated(true);
  };

  // Function to set the user as logged out
  const logout = () => {
    setIsAuthenticated(false);
    // You might also want to clear user-specific data from localStorage here if any
    localStorage.removeItem('userCategory'); // Example: clearing stored category
  };

  // Provide the isAuthenticated state and login/logout functions to children
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily access the AuthContext in functional components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};