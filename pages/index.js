import ImageUpload from '../components/ImageUpload';
import styles from '../styles/styles.module.css';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className={styles.bg_body}>
        <Navbar />
      <h1 className={styles.h1_main}>Image To Text Conversion</h1>
      <ImageUpload />
      <div className={styles.footer}><p className={styles.h1_footer}>Powered by Alpha Networks</p></div>
    </div>
  );
};

export default Home;
