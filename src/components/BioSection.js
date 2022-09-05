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
                <p>
                    <img src='./me-and-abe.JPG' alt="cordre"/>
                    The tech industry has always been interesting and a love of mine, and influenced my decision heavily in joining Ironhack. Now that I've graduated from the Ironhack bootcamp, I am looking to start working as a Front end, Back end, or Full Stack Web Developer.
                    I have 2.5 years of experience in cooking, cleaning, and customer service meaning that I know how to follow directions, pay attention to detail, and the ability to explain to, guide, and answer customers. While working at Panda Express, I contributed to increasing our received donations by ~10% through having short conversations with the customers and making them feel more welcomed. As I was put into a leadership role as a Cook/Shift Lead, I participated in training new side cooks and associates at 4 store locations. I'm thankful for the opportunities I received and happy to say that I'm shifting my career towards an area I feel eager about and ready to apply my past experiences to excel. Whether I'm bug-fixing, solving algorithms, creating a site from scratch, or anything else, I'm always looking for ways to improve and better myself.
                    <br/>
                    <br/>
                    Specialties: JavaScript, Node.js, React.js, MongoDB, Express, HTML, CSS, SCSS
                </p>

            </div>
        </div>
    )
}
export default BioSection;