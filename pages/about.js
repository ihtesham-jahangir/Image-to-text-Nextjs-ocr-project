
import Styles from '../styles/about.module.css'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { FiMessageCircle } from 'react-icons/fi';
function about()
{
    return(
        <div className={Styles.bg_body}>
            <Navbar />
            <br />
            <br />
            <br />
            
                
                <h1 className={Styles.h1_ab }> <FiMessageCircle />  Message from CEO</h1>
        <h4>Hello Visitor!</h4>
        <p>i am <b>ihtesham jahangir </b>, i am cheif exective officer of Alpha networks.</p>
        <p> i am glad to tell you about that i am also founder of Alpha networks</p>
        <h2>So what we can do in Alpha networks</h2>
        <p>Alpha networks is a private company which aims to bulid innovative tools  that are based on Artificial intellegence</p>
        <p>we are also work in many projects like</p>
        <ul>
           <b> <li>Web Development</li></b>
           <b> <li>Andriod & IOS Development</li></b>
           <b> <li>Mern Full Stack  Development</li></b>
        </ul>
        <p>So in our company we can work togather in Agile Development Model</p>
        
        
                

            <Footer />
        </div>

    );
}

export default about;