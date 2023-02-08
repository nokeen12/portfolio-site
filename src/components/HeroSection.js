import './style/HeroSection.scss'
function HeroSection(){
    return(
        <div id="hero-section">
            <div id="hero-text">
                <h2>Co<span>r</span>dre Payne</h2>
                <h3>Full Stack Web Developer</h3>
                <p>Just a developer who loves a challenge.</p>
            </div>
            <div className='hero-bubble'>Download CV</div>
        </div>
    )
}
export default HeroSection;