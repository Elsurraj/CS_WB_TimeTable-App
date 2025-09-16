// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import LoginImg from '../assest/images/hero4.jpeg';

import '../styles/form.css';
import { useAuth } from '../Context/AuthContext'; // IMPORT THE useAuth HOOK

const Register = () => {
  // You might consider moving this dataBase to a more secure place or fetching from an API in a real app
  const dataBase = [
    {
      RegNo: '17/1111u/1',
      password: 'password',
      // You could also add a 'role' here if you want more granular control beyond 'Student'/'Staff'
    },
    {
      RegNo: '17/47110u/1',
      password: 'password',
      // You could also add a 'role' here if you want more granular control beyond 'Student'/'Staff'
    },
    {
      RegNo: '17/0000u/1',
      password: 'password',
      // You could also add a 'role' here if you want more granular control beyond 'Student'/'Staff'
    },    
    {
      RegNo: '17/50065u/1',
      password: 'password',
    },
    {
      RegNo: '17/47113u/1',
      password: 'password',
    },
    {
      RegNo: '17/47114u/1',
      password: 'password',
    },
    {
      RegNo: '17/47042u/1',
      password: 'password',
    },
  ];

  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth(); // GET THE login FUNCTION FROM AUTH CONTEXT

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = dataBase.find((user) => user.RegNo === regNo && user.password === password);

    if (user) {
      // Successful login
      login(); // <-- CALL THE LOGIN FUNCTION HERE TO SET AUTHENTICATED STATE

      // Now, navigate based on category as before
      if (category === 'Student') {
        navigate('/timetable');
      } else if (category === 'Staff') {
        navigate('/adminpanel');
      } else {
        setErrorMessage('Please select a valid category.');
        // If successful login but category is invalid, we should ideally still set isAuthenticated to true
        // then perhaps redirect to a default authenticated page or prompt for category.
        // For now, let's assume category is always selected on successful credential match.
        // If you want more robust handling, consider a "default" page after login if category is not selected.
      }
    } else {
      // Error - Invalid credentials
      setErrorMessage('Invalid Registration Number or Password');
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <div className="account-page">
            <div className="container">
              <div className="row">
                <div className="col-2 account">
                  <img src={LoginImg} className="bg-image" alt="imag" />
                </div>
                <div className="col-2">
                  <div className="form-container">
                    <div className="form-btn">
                      <span>Login</span>
                      <hr id="Indicator" />
                    </div>
                    <form id="RegForm" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="ID"
                        value={regNo}
                        onChange={(e) => setRegNo(e.target.value)}
                        required
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div className="options-select">
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          required
                        >
                          <option value="">Select Category</option>
                          <option value="Student">Student</option>
                          <option value="Staff">Staff</option>
                        </select>
                      </div>
                      <div className="remember-me">
                        <input type="checkbox" />
                        <span>Remember Me</span>
                      </div>
                      <button type="submit" className="btnn">Login</button>
                    </form>
                    <br />
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Register;