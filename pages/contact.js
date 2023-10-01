// pages/contact.js
import styles from '../styles/contact.module.css';

function Contact(){
  return (
    <div className={styles.contact_container}>
      <h1>Contact Us</h1>
      <p className={styles.contact_info}>
        Email: admin@alphanetwork.tech <br />
        Phone: +92 310710 4146
      </p>
    </div>
  );
};

export default Contact;
