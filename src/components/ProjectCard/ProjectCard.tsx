import './ProjectCard.css'
import '../../Shared.css'


type ProjectCardProps = {
    image: string
    name: string
    description: string
    link: string
}

export function ProjectCard({ image, name, description, link }: ProjectCardProps) {
    return (
        <div className="project-card">
            <img className='project-img' src={image} alt="Project Img" />
            <div className='project-info'>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <h4>{name}</h4>
                </a>
                <p>{description}</p>
            </div>
        </div>
    )
}