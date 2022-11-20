import "./style/ProjectCarousel.scss";
import { useEffect } from "react";
import Projects from '../data/Projects.json'
function ProjectCarousel(){
    useEffect(() => {
        const buttons = document.querySelectorAll("[data-carousel-button]")
        console.log(buttons)
        buttons.forEach(button =>{
            button.addEventListener("click", ()=>{
                const offset = button.dataset.carouselButton === "next" ? 1 : -1
                const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
                const activeSlide = slides.querySelector("[data-active]")
                let newIndex = [...slides.children].indexOf(activeSlide) + offset
                if (newIndex < 0) newIndex = slides.children.length - 1
                if (newIndex >= slides.children.length) newIndex = 0
                slides.children[newIndex].dataset.active = true
                delete activeSlide.dataset.active
            })
        })
    }, [])
    return(
        <div className="carousel" data-carousel>
            <button className="carousel-button prev" data-carousel-button="prev">&#8249;</button>

            <ul data-slides>
                {Projects && Projects.map((project, index) => {
                    if(project.image.length > 3){
                        return(
                            <>
                                {project.id === 1 ? 
                                    <li className="slide"  key={index} data-active>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
                                            <img src={require(`../images/${project.image}`)} alt="project"></img>
                                        </a>
                                        <p>{project.title}</p>
                                    </li>
                                    :
                                    <li className="slide">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
                                            <img src={require(`../images/${project.image}`)} alt="project"></img>
                                        </a>
                                        <p>{project.title}</p>
                                    </li>
                                }</>    
                        )
                    }
                })}
            </ul>
            <button className="carousel-button next" data-carousel-button="next">&#8250;</button>
        </div>
    )
}
export default ProjectCarousel;