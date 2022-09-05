import './style/ProjectsSection.scss'
import Projects from '../data/Projects.json'
function ProjectsSection(){
    return(
        <div id="projects-section">
            <h1>Projects</h1>
            <div id="projects-scroll">
                {Projects && Projects.map(project => {
                    return(
                        <a href={project.link}>
                            <div className="project" key={project.id}>
                                <img src={project.image} alt="project"></img>
                                <p>{project.title}</p>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
export default ProjectsSection;