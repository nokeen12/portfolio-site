import './style/ProjectsSection.scss'
import Projects from '../data/Projects.json'
function ProjectsSection(){
    return(
        <div id="projects-section">
            <h1>Projects</h1>
            <div id="projects-scroll">
                {Projects && Projects.map(project => {
                    return(
                        <div className="project" key={project.id}>
                        <p>{project.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ProjectsSection;