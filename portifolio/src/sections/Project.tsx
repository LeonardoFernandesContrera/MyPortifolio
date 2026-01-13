import "../Shared.css";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { projects } from "../data/projects";


export function Project() {
    return (
        <article className="article-card" id="Projects-Section">
            <h3 className="centered-text">Projects</h3>

            <div>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.name}
                        image={project.image}
                        name={project.name}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>

            <br></br>
            
            <h4><a href="https://github.com/LeonardoFernandesContrera">View all projects</a></h4>
        </article>
    )
}