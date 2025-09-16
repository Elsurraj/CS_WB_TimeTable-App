// src/components/AuthRequiredAlert.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthRequiredAlert = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/register'); // <--- CHANGE THIS TO /register
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(255, 0, 0, 0.8)', // Red background with some transparency
      color: 'white',
      padding: '20px 30px',
      borderRadius: '8px',
      textAlign: 'center',
      zIndex: 1000,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      fontSize: '1.2em',
      maxWidth: '80%',
    }}>
      <h3>Login Required!</h3>
      <p>You must be logged in to access this page.</p>
      <p>Redirecting to Login page...</p> {/* <--- Update the message as well */}
    </div>
  );
};

export default AuthRequiredAlert;