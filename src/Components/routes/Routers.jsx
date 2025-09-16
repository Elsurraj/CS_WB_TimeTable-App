// src/routes/Routers.js (or wherever your Routers component is)
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Register from '../../pages/Register'; // This is your login page
import GenerateTT from '../../pages/GenerateTT';
import OneHLPage from '../../pages/OneHL';
import TwoHLPage from '../../pages/TwoHL';
import ThreeHLPage from '../../pages/ThreeHL';
import FourHLPage from '../../pages/fourHL';
import FiveHLPage from '../../pages/fiveHL';
import AdminPanel from '../../pages/AdminPanel';
import ProtectedRoute from '../ProtectedRoutes/ProtectedRoutes'; // IMPORT THE PROTECTED ROUTE COMPONENT

const Routers = () => {
  return (
    <Routes>
      {/* Public Routes - Accessible without login */}
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} /> {/* Your login page should be public */}

      {/* Protected Routes - Require login */}
      <Route
        path='/about'
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />
      <Route
        path='/timetable'
        element={
          <ProtectedRoute>
            <GenerateTT />
          </ProtectedRoute>
        }
      />
      <Route
        path="/oneHL"
        element={
          <ProtectedRoute>
            <OneHLPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/twoHL"
        element={
          <ProtectedRoute>
            <TwoHLPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/threeHL"
        element={
          <ProtectedRoute>
            <ThreeHLPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/fourHL"
        element={
          <ProtectedRoute>
            <FourHLPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/fiveHL"
        element={
          <ProtectedRoute>
            <FiveHLPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/adminpanel"
        element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;