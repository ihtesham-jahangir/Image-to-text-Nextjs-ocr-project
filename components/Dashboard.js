// components/Dashboard.js
import React from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook
import styles from '../styles/Dashboard.module.css'; // Import your CSS module


const Dashboard = ({ username, onLogout }) => {
  const router = useRouter(); // Access the router object

  const handleLogout = () => {
    // Assuming onLogout handles any necessary logic (e.g., clearing user authentication state)
    onLogout();

    // Redirect to the home page or another page after logout
    router.push('/');
  };

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.dashboardHeading}>Welcome, {username}!</h1>
      {/* Add additional information here */}
      <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className={styles.logoutContainer}>
        <p className={styles.logoutText}>Are you sure you want to logout?</p>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
