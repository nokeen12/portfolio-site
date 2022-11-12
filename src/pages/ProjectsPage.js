import '../pageStyle/ProjectsPage.scss'
import Projects from '../data/Projects.json'
import { useEffect } from 'react';

function ProjectsPage(){
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return(
        <div id="projectspage">
            <h1>My Work</h1>
            {Projects && Projects.map(project => {
                return(
                        <div className="full-project" key={project.id}>
                            <img src={require(`../images/${project.image}`)} alt="project"/>
                            <div className="project-details">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
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