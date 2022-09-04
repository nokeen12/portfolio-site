import './style/Footer.scss'
import email from '../images/email.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
function Footer(){
    return(
        <footer>
            <h2>Cordre Payne</h2>
            <h3>Full Stack Web Developer</h3>
            <div>         
                <img src={email} alt="email"/>
                <a href="https://github.com/nokeen12">
                    <img src={github} alt="github"/>
                </a>
                <a href="https://www.linkedin.com/in/cordre-payne">
                    <img src={linkedin} alt="linkedin"/>
                </a>
            </div>
        </footer>
    )
}
export default Footer;