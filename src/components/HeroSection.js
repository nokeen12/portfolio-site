import './style/HeroSection.scss'
import { Link } from 'react-router-dom';

function HeroSection(){
    return(
        <div id="hero-section">
            <div id="hero-text">
                <h2>Co<span>r</span>dre Payne</h2>
                <h3>Full Stack Web Developer</h3>
                <p>Just a developer who loves a challenge.</p>
            </div>
            <div id="hero-buttons">
                <a href="./Resume.pdf" download>Download CV</a>
                <Link to="/portfolio-site/projects">My Work</Link>
            </div>
        </div>
    )
}
export default HeroSection;