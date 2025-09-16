// src/components/SessionTimeoutModal.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext'; // Import useAuth to access the logout function

const SessionTimeoutModal = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Get the logout function from the AuthContext

  useEffect(() => {
    const timer = setTimeout(() => {
      logout(); // Call the logout function to clear authentication state
      navigate('/register'); // Redirect to the login page
    }, 5 * 60 * 1000); // 5 minutes in milliseconds (5 * 60 seconds * 1000 milliseconds)

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [navigate, logout]);

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(89, 247, 168, 0.9)', // Orange background, more noticeable
      color: 'white',
      padding: '20px 30px',
      borderRadius: '8px',
      textAlign: 'center',
      zIndex: 1000,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      fontSize: '1.2em',
      maxWidth: '80%',
    }}>
      <h3>Session Timeout!</h3>
      <p style={{color: '#121212'}}>For security reasons, your session has expired.
       <br />   Please log in again.
      </p>     
    </div>
  );
};
  
export default SessionTimeoutModal;