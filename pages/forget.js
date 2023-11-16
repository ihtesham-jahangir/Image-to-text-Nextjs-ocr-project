
import styles from '../styles/forget.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
function Forget()
{
    return(

            <div className={styles.main}>
            <Navbar /> 
            <div className={styles.container}>
            <img src='\logo.png' className={styles.logo}></img>
            <h1>Forget Password</h1>
            <label>
              <input className={styles.input} type='text' placeholder='Enter your email or phone number'></input>  
            </label>
            <br/>
            <button className={styles.btn}>
            Submit
            </button>
            <p> <a href='\login' className={styles.alogin} > Login </a></p>
            </div>   
                <Footer />
         </div>
        
    )
}

export default Forget;