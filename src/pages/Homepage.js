import '../pageStyle/HomePage.scss'
import HeroSection from '../components/HeroSection'
import BioSection from '../components/BioSection'
import ContactSection from '../components/ContactSection'
import React, { useEffect } from 'react'
import ProjectCarousel from '../components/ProjectCarousel'

function HomePage(){
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        const cursor = document.getElementById("cursor");
        document.addEventListener('mousemove', e =>{
            cursor.style = `top: ${e.pageY-50}px; left: ${e.pageX-50}px`
        })
        // for(let j=0; j < window.innerHeight/35; j++){ //creates lattice background pattern
        //     document.getElementById("bg-custom").innerHTML += `
        //     <div id="n${j}" class="bg-row ${j%2? "offset": null}"></div>
        //     `
        //     for(let i=0; i < window.innerWidth/75+1; i++){
        //         document.getElementById(`n${j}`).innerHTML += `
        //         <div class="lattice"></div>
        //         `
        //     }
        // }
    }, []);
    return(
        <div id="homepage">
            {/* <div id="cursor"></div> */}
            {/* <div id="bg-custom"> */}
            {/* </div> */}
            <HeroSection/>
            <BioSection/>
            <span>Projects</span>
            <ProjectCarousel/>
            <ContactSection/>
            <div id="next-section">V</div>
        </div>
    )
}
export default HomePage;