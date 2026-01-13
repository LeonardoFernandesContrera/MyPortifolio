import { ExperienceCard } from '../components/ExperienceCard/ExperienceCard'
import '../Shared.css'
import { experiences } from '../data/experiences'

export function Experience (){
    return (
        <article className="article-card" id='Experience-Section'>
            <h3>Experience</h3>

            <div>
                {experiences.map((experience, index) => (
                    <ExperienceCard 
                        key={index}
                        position={experience.position}
                        company={experience.company}
                        startPeriod={experience.startPeriod}
                        endPeriod={experience.endPeriod}
                        description={experience.description}
                    />
                ))}
            </div>

            <h4><a href='https://www.linkedin.com/in/leonardo-contrera/' target='_blank' rel='noopener noreferrer'>View all experiences</a></h4>

        </article>
    )
}
