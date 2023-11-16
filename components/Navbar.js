// Navbar.js
import { FaHome, FaSignInAlt, FaUserPlus, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi'; // You can replace this with the search icon you prefer
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo.png" className={styles.logoImage} alt="Logo" />
      </div>
      <div className={styles.menu}>
        <a href="/">
          <FaHome />
          Home
        </a>
        <a href="/login">
          <FaSignInAlt />
          Login
        </a>
        <a href="/register">
          <FaUserPlus />
          Register
        </a>
        <a href="/about">
          <FaInfoCircle />
          About
        </a>
        <a href="/contact">
          <FaPhone />
          Contact
        </a>
      </div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
        <button type="button">
          <FiSearch />
        </button>
      </div>
      <div className={styles.mobileMenuIcon}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
