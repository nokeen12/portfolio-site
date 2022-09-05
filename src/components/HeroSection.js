import './style/HeroSection.scss'
import Cordre from '../images/cordre.png'
function HeroSection(){
    return(
        <div id="hero-section">
            <div id="hero-text">
                <h2>Cordre Payne</h2>
                <h3>Full Stack Web Developer</h3>
                <p>Just a developer who loves a challenge.</p>
            </div>
            <div id="hero-img">
                <img src={Cordre} alt="cordre"/>
            </div>
        </div>
    )
}
export default HeroSection;