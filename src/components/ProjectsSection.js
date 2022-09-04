import './style/ProjectsSection.scss'
import Projects from '../data/Projects.json'
function ProjectsSection(){
    return(
        <div>
            ProjectsSection
            {Projects && Projects.map(project => {
                return(
                    <div className="project" key={project.id}>
                    <p>{project.title}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default ProjectsSection;