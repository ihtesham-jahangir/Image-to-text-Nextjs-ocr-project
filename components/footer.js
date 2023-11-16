import styles from "../styles/footer.module.css";
function Footer()
{

    return(
        
            <div className={styles.footer}>
            
                <h1 className={styles.h1_footer}></h1>
                <div className={styles.menu}>
                    <div className={styles.pic_section}>
                <img src="./footer_pic.png" className={styles.pics} ></img>
                <img src="./footer_pic2.png" className={styles.pics} ></img>
                <img src="./footer_pic1.png" className={styles.pics} ></img>
                <img src="./footer_pic3.png" className={styles.pics} ></img>
                
                </div>
                <img src="/logo.png" className={styles.logo} />
                <div className={styles.a_link}>
                <a href="/social" >Social<br></br>Links</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                </div>
                <div className={styles.footer_content}>
                    <p className={styles.content_p}>This is Footer information<br></br>so there is </p>
                    <p className={styles.content_p}>This is about information</p>
                    <p className={styles.content_p}>This is Contact Information</p>
                    
                </div>
            </div>
                <p className={styles.p_footer}>Copyright@2023-Alphanetworks</p>
            </div>
        
    );
  
}
export default Footer;  