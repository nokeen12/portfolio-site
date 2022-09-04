import './style/HeroSection.scss'

function HeroSection(){
    return(
        <div id="hero-section">
            <div id="hero-text">
                <h2>Cordre Payne</h2>
                <h3>Full Stack Web Developer</h3>
                <p>Just a Developer who loves a challenge.</p>
            </div>
            <div id="hero-img">
                {/* replace with image later */}
                <div style={{ width: 300, height: 400, 'background-color': 'darkorange'}}/>
            </div>
        </div>
    )
}
export default HeroSection;