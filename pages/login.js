import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Login.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard'; // Import the Dashboard component
import { useRouter } from 'next/router';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // Access the router object

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      // Simulate a login request using Axios
      const response = await axios.post('/api/login', formData);
      console.log('Login successful:', response.data);

      // Set user as logged in
      setIsLoggedIn(true);
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    // Clear user authentication state
    setIsLoggedIn(false);

    // Redirect to the home page or another page after logout
    router.push('/');
  };

  return (
    <div className={styles.login_main}>
      <Navbar />
      <br />
      <br />
      <br />
      <div className={styles.loginContainer} >
        {isLoggedIn ? (
          <Dashboard username={formData.username} onLogout={handleLogout} />
        ) : (
          <>
            <img src='./logo.png' className={styles.login_logo} alt="Logo"></img>
            <h1 className={styles.loginHeading}>Login</h1>
            {error && <div className={styles.error}>{error}</div>}
            <label className={styles.label}>
              <b>Username:</b>
              <input type="text" name="username" onChange={handleInputChange} className={styles.input} />
            </label>
            <br />
            <label className={styles.label}>
              <b>Password:</b>
              <input type="password" name="password" onChange={handleInputChange} className={styles.input} />
            </label>
            <br />
            <button onClick={handleLogin} className={styles.button}>
              Login
            </button>
            <a href ="\register" className={styles.registertxt}>Register a new one  </a> 
            <a href ="\forget" className={styles.registertxt}>Forget your password or username  </a> 
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
