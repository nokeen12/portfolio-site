import '../pageStyle/HomePage.scss'
import HeroSection from '../components/HeroSection'
import BioSection from '../components/BioSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'


function HomePage(){
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