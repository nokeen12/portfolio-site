import './style/ProjectsSection.scss'
import Projects from '../data/Projects.json'
function ProjectsSection(){
    return(
        <div id="projects-section">
            <h1>Projects</h1>
            <div id="projects-scroll">
                {Projects && Projects.map((project, index) => {
                    if(project.image.length > 3){
                        return(
                            <a href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
                                <div className="project">
                                    <img src={require(`../images/${project.image}`)} alt="project"></img>
                                    <p>{project.title}</p>
                                </div>
                            </a>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default ProjectsSection;