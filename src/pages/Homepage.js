import '../pageStyle/HomePage.scss'
import HeroSection from '../components/HeroSection'
import BioSection from '../components/BioSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import { useEffect } from 'react'


function HomePage(){
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return(
        <div id="homepage">
            <HeroSection/>
            <BioSection/>
            <ProjectsSection/>
            <ContactSection/>
        </div>
    )
}
export default HomePage;