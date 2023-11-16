// pages/contact.js
import styles from '../styles/contact.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import {FaFacebook ,FaTwitter ,FaWhatsappSquare,FaPhone ,FaMailBulk } from 'react-icons/fa';
function Contact(){
  return (
    
    <div className={styles.bg_body}>
      <Navbar />
      
      <section>
      <div className={styles.container}>
      <br />
      <br />
      <br />
      <h1 className={styles.h1_main}>Contact Us</h1>
      <p className={styles.contact_info}>

      <FaMailBulk/><b>  </b> admin@alphanetwork.tech <br /><br />
      <FaPhone />  <b> </b> +92 310710 4146
      </p>
      <img src='footer_pic1.png' className={styles.img1}></img>

      <p className={styles.icons}>
      <a href='' className={styles.whatsapp}><FaWhatsappSquare/></a>
      <a href='' className={styles.facebook}><FaFacebook/></a>
      <a href='' className={styles.twiter}><FaTwitter/></a>
        </p>      

      </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
