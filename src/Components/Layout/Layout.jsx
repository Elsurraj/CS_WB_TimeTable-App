// src/App.js
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header'; // Adjust path if needed
import Footer from '../Footer/Footer'; // Adjust path if needed
import Routers from '../routes/Routers'; // Adjust path if needed

import { useAuth } from '../../Context/AuthContext'; // Import useAuth to get authentication status
import SessionTimeoutModal from '../SessionTimeoutModal/SessionTimeoutModal'; // Import the SessionTimeoutModal

const Layout = () => { // Renamed 'layout' to 'App' for clarity, assuming this is your main App component
  const { isAuthenticated } = useAuth(); // Get authentication status from AuthContext
  const [showTimeoutModal, setShowTimeoutModal] = useState(false); // State for modal visibility
  const [lastActivity, setLastActivity] = useState(Date.now()); // Track last activity time

  // Function to reset the activity timer
  const resetTimer = () => {
    setLastActivity(Date.now());
  };

  useEffect(() => {
    let timeoutCheckInterval; // Declare the interval ID

    // Add event listeners for user activity *only if authenticated*
    if (isAuthenticated) {
      // Add event listeners for user activity to reset the timer
      window.addEventListener('mousemove', resetTimer);
      window.addEventListener('keydown', resetTimer);
      window.addEventListener('scroll', resetTimer);
      window.addEventListener('click', resetTimer);

      // Set up the session timeout check interval
      timeoutCheckInterval = setInterval(() => {
        const now = Date.now();
        const timeDifference = now - lastActivity;
        const SEVEN_MINUTES = 7 * 60 * 1000; // 7 minutes in milliseconds

        // If 7 minutes of inactivity have passed AND the user is still authenticated
        if (timeDifference > SEVEN_MINUTES && isAuthenticated) {
          setShowTimeoutModal(true); // Show the modal
          // The SessionTimeoutModal component itself will handle the logout and redirection
        }
      }, 1000); // Check every second

    } else {
      // If not authenticated, ensure the modal is hidden and no listeners are active
      setShowTimeoutModal(false);
    }

    // Cleanup function for useEffect:
    // This runs when the component unmounts OR when dependencies (isAuthenticated, lastActivity) change
    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
      window.removeEventListener('scroll', resetTimer);
      window.removeEventListener('click', resetTimer);
      if (timeoutCheckInterval) { // Clear the interval if it was set
        clearInterval(timeoutCheckInterval);
      }
    };
  }, [isAuthenticated, lastActivity]); // Dependencies: re-run if isAuthenticated or lastActivity changes

  return (
    <div>
      {/* Conditionally render the SessionTimeoutModal */}
      {showTimeoutModal && <SessionTimeoutModal />}

      <Header />
      <Routers />
      <Footer />
    </div>
  );
};

export default Layout; // Export as App, as it's typically the root of your functional app