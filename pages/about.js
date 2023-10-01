
import Styles from '../styles/about.module.css'
function about()
{
    return(
        <div>
            <h1 className={Styles.about_container}>About</h1>
            <p className={Styles.about_text}>This is the about page</p>
        </div>

    );
}

export default about;