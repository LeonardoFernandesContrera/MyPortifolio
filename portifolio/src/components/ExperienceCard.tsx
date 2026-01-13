import './ExperienceCard.css'

type ExperienceCardProps = {
    position: string
    company: string
    startPeriod: string
    endPeriod: string
    description: string
}


export function ExperienceCard ({ position, company, startPeriod, endPeriod, description}: ExperienceCardProps){
    return (
        <div className='experience-div'>
            <h4>{position}</h4>
            <div className="experience-title">
                <span>{company}</span>
                <span>{startPeriod} - {endPeriod}</span>
            </div>
            
            <p>{description}</p>
        </div>
    )
}