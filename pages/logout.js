// components/Logout.js
import React, { useEffect } from 'react';
import styles from '../styles/Logout.module.css'; // Import your CSS module
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  // You can include additional logout logic here

  useEffect(() => {
    // Simulate logout action or perform any cleanup logic
    console.log('User logged out');

    // Redirect to the home page after 2 seconds
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 2000);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className={styles.logoutContainer}>
      <Navbar />
      <br />
      <br />
      <br />
      <div className={styles.logoutContent}>
        <h1 className={styles.logoutHeading}>Logout</h1>
        <p className={styles.logoutMessage}>You have been successfully logged out.</p>
        {/* You can add more content or redirect the user to another page if needed */}
      </div>
      <Footer />
    </div>
  );
};

export default Logout;
