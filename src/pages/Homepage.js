import '../pageStyle/HomePage.scss'
import HeroSection from '../components/HeroSection'
import BioSection from '../components/BioSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import React, { useEffect } from 'react'


function HomePage(){
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        const cursor = document.getElementById("cursor");
        document.addEventListener('mousemove', e =>{
            cursor.style = `top: ${e.pageY-50}px; left: ${e.pageX-50}px`
        })
        for(let j=0; j < window.innerHeight/35; j++){
            document.getElementById("bg-custom").innerHTML += `
            <div id="n${j}" class="bg-row ${j%2? "offset": null}"></div>
            `
            for(let i=0; i < window.innerWidth/75+1; i++){
                document.getElementById(`n${j}`).innerHTML += `
                <div class="lattice"></div>
                `
            }
        }
        document.addEventListener('click', e =>{
            let x = `${e.pageX}px`
            let y = `${e.pageY}px`
            let ripples = document.createElement('span');
            ripples.style.borderColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
            ripples.style.left = x
            ripples.style.top = y
            document.getElementById("homepage").appendChild(ripples)
        }) 
    }, []);
    return(
        <div id="homepage">
            <div id="cursor"></div>
            <div id="bg-custom">
            </div>
            <HeroSection/>
            <BioSection/>
            <ProjectsSection/>
            <ContactSection/>
        </div>
    )
}
export default HomePage;