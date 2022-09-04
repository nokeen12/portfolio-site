import '../pageStyle/ProjectsPage.scss'
import Projects from '../data/Projects.json'

function ProjectsPage(){
    return(
        <div id="projectspage">
            <h1>My Work</h1>
            {Projects && Projects.map(project => {
                return(
                        <div className="full-project" key={project.id}>
                            <img src={project.image} alt="project"/>
                            <div className="project-details">
                                <a href={project.link}>
                                    <h2>{project.title}</h2>
                                </a>
                                <p>{project.description}</p>
                                <p><em>{project.tech}</em></p>
                            </div>
                        </div>

                )
            })}
        </div>
    )
}

export default ProjectsPage;