import '../pageStyle/HomePage.scss'
import HeroSection from '../components/HeroSection'
import BioSection from '../components/BioSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import { useEffect } from 'react'


function HomePage(){
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        const cursor = document.getElementById("cursor");
        document.addEventListener('mousemove', e =>{
            cursor.style = `top: ${e.pageY-50}px; left: ${e.pageX-50}px`
        })
    }, []);
    return(
        <div id="homepage">
            <div id="cursor"></div>
            <HeroSection/>
            <BioSection/>
            <ProjectsSection/>
            <ContactSection/>
        </div>
    )
}
export default HomePage;