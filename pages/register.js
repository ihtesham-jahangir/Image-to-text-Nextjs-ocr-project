import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/registration.module.css'; // Import the CSS module
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import {FaEye , FaEyeSlash} from 'react-icons/fa';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleCheckboxChange = () => {
    setCheckboxChecked(!isCheckboxChecked);
    // Clear checkbox error when checkbox is checked
    if (isCheckboxChecked) {
      setError(null);
    }
  };
  const getPasswordType = () => (showPassword ? 'text' : 'password');

  const getPasswordIcon = () => (showPassword ? <FaEye /> : <FaEyeSlash /> );

  const handleRegistration = async () => {
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      // You can display an error message to the user if needed
      return;
    }
  
    // Check if the email already exists
    try {
      const emailExistsResponse = await axios.get(`/api/check-email?email=${formData.email}`);
      if (emailExistsResponse.data.exists) {
        setError('Email already exists');
        // You can display an error message to the user if needed
        return;
      }
    } catch (error) {
      setError('Error checking email:', error);
      // Handle the error, maybe show a generic error message to the user
      return;
    }
    if (!isCheckboxChecked) {
      setError('Please accept the terms and conditions');
      return;
    } else {
      setError(null); // Clear checkbox error if checkbox is checked
    }
    setError(null);
    console.log('FormData:', formData);
  
    try {
      const response = await axios.post('/api/register', formData);
      setError('Registration successful:', response.data);
    } catch (error) {
      setError('Registration failed:', error.response.data);
    }
  };
  
  
  

  return (
    <div className={styles.main}>
      <Navbar />
      <br />
      <br />
      <br />
      <div className={styles.container}>
      {error && <div className={styles.error}>{error}</div>}
      <img src="/logo.png" className={styles.logo} />
      

        <h1 className={styles.h1}>Register</h1>
        <img src='/register.jpg' className={styles.register_pic }></img>
        <label className={styles.label}>
          <b>Firstname:</b>
          <input type="text" name="firstname" onChange={handleInputChange} className={styles.input} />
        </label>
        <br />
        <label className={styles.label}>
          <b>Lastname:</b>
          <input type="text" name="lastname" onChange={handleInputChange} className={styles.input} />
        </label>
        <br />
        <label className={styles.label}>
          <b>Username:</b>
          <input type="text" name="username" onChange={handleInputChange} className={styles.input} />
        </label>
        <br />
        <label className={styles.label}>
          <b>Email:</b>
          <input type="email" name="email" onChange={handleInputChange} className={styles.input1} />
        </label>
        <br />
        <label className={styles.label}>
          <b>Password:</b>
          <input
            type={getPasswordType()}
            name="password"
            onChange={handleInputChange}
            className={styles.input}
          />
          <span onClick={handleTogglePassword} className={styles.passwordToggle}>
            {getPasswordIcon()}
          </span>
        </label>
        <br />
   <label className={styles.label1}>
  <b>Confirm Password:</b>
  <input 
    type={getPasswordType()}
    name="confirmPassword"
    onChange={handleInputChange}
    className={styles.input3}
  />
</label>

        <p className={styles.p_register}>
          <input type="checkbox" onChange={handleCheckboxChange} checked={isCheckboxChecked}></input> Yes! I agree the terms and conditions of <a href="/terms">Examify</a>
        </p>
        <button onClick={handleRegistration} className={styles.button}>
          Register
        </button>
        <p className={styles.p_text}>
          Already have an account? <a href="/login" className={styles.p_login}>Login</a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationForm;
