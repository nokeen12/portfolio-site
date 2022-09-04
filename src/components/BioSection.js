import { Link } from 'react-router-dom';
import './style/BioSection.scss'

function BioSection(){
    return(
        <div id="bio-section">
            <div id="bio-buttons">
                <a href="../data/Resume.pdf" download>Download CV</a>
                <Link to="/projects">My Work</Link>
            </div>
        </div>
    )
}
export default BioSection;