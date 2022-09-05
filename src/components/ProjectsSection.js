import './style/ProjectsSection.scss'
import Projects from '../data/Projects.json'
function ProjectsSection(){
    return(
        <div id="projects-section">
            <h1>Projects</h1>
            <div id="projects-scroll">
                {Projects && Projects.map(project => {
                    return(
                        <>
                            {project.image.length > 3 &&
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div className="project" key={project.id}>
                                    <img src={project.image} alt="project"></img>
                                    <p>{project.title}</p>
                                </div>
                            </a>
                            }
                        </>
                    )
                })}
            </div>
        </div>
    )
}
export default ProjectsSection;