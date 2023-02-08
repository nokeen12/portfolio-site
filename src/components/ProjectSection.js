import "./style/ProjectSection.scss";
import Projects from '../data/Projects.json'

export default function ProjectSection(){
    return(
        <div className="projectSection">
            {Projects && Projects.map((project, index) => {
                    return(
                        <a className="project-card" href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
                            <h3>{project.title}</h3>
                                <img src={require(`../images/${project.image}`)} alt="project"></img>
                            <p>{project.description}</p>
                        </a>
                    )
            })}
        </div>
    )
};