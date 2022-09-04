import { colours } from 'nodemon/lib/config/defaults';
import { Link } from 'react-router-dom';
import './style/BioSection.scss'

function BioSection(){
    return(
        <div id="bio-section">
            <div id="bio-buttons">
                <a href="./Resume.pdf" download>Download CV</a>
                <Link to="/projects">My Work</Link>
            </div>
            <div id="bio-details">
                <div id="bio-img" style={{width: 400, height: 300, 'background-color': 'darkorange'}}/>
                <div id="bio-text"><p>random rnadom random random random random random</p></div>
            </div>
        </div>
    )
}
export default BioSection;