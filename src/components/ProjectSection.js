import "./style/ProjectSection.scss";
import Projects from '../data/Projects.json'

export default function ProjectSection(){
    return(
        <div className="projectSection">
            {Projects && Projects.map((project, index) => {
                    return(
                        <div className="project-card" key={index}>
                            <p>{project.title}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
                                <img src={require(`../images/${project.image}`)} alt="project"></img>
                            </a>
                            <p>{project.description}</p>
                        </div>
                    )
            })}
        </div>
    )
};