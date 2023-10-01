import ImageUpload from '../components/ImageUpload';
import styles from '../styles/styles.module.css';
const Home = () => {
  return (
    <div>
      <h1 className={styles.h1_main}>Image To Text Conversion</h1>
      <ImageUpload />
      <p className={styles.h1_footer}>Powered by Alpha Networks</p>
    </div>
  );
};

export default Home;
