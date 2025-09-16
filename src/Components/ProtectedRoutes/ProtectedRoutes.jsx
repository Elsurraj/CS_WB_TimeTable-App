// src/components/ProtectedRoute.js
import React, { useState, useEffect } from 'react';
//import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext'; // Adjust path if needed
import AuthRequiredAlert from '../AuthRequiredAlert/AuthRequiredAlert'; // <--- IMPORT THE NEW ALERT COMPONENT

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      // If not authenticated, show the alert
      setShowAlert(true);
      // The AuthRequiredAlert component itself will handle the redirect after a delay
    } else {
      setShowAlert(false); // Hide alert if user somehow becomes authenticated while on this route
    }
  }, [isAuthenticated]); // Rerun when authentication status changes

  if (!isAuthenticated) {
    // If not authenticated, render the alert
    return <AuthRequiredAlert />;
  }

  // If authenticated, render the children (the protected page)
  return children;
};

export default ProtectedRoute;