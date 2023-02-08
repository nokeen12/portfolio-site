import '../pageStyle/HomePage.scss'
import HeroSection from '../components/HeroSection'
import BioSection from '../components/BioSection'
import ContactSection from '../components/ContactSection'
import React, { useEffect } from 'react'
import ProjectSection from '../components/ProjectSection'

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
            <HeroSection/>
            <BioSection/>
            <h1>My Work</h1>
            <ProjectSection/>
            <ContactSection/>
            <div id="next-section">V</div>
        </div>
    )
}
export default HomePage;