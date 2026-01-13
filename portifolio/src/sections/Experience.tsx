import { ExperienceCard } from '../components/ExperienceCard'
import '../Shared.css'

export function Experience (){
    return (
        <article className="article-card" >
            <h3>Experience</h3>

            <div>
                <ExperienceCard 
                    position='Full Stack Software Engineer' 
                    company='Bk Bank' 
                    startPeriod='June 2024'
                    endPeriod='Nov 2025'
                    description='Full Stack Software Engineer with hands-on experience designing and maintaining secure, scalable web applications for financial environments. Worked across the full stack using C#/.NET, RESTful APIs, SQL Server, and Docker, contributing to high-availability systems such as internet banking, POS, and voucher platforms.'>
                </ExperienceCard>

                <ExperienceCard 
                    position='Software Engineer Internship' 
                    company='Bk Bank' 
                    startPeriod='Jan 2023'
                    endPeriod='May 2024'
                    description='Supported full stack development using C#, .NET, Razor, JavaScript, and SQL Server, contributing to bug fixes, feature enhancements, and internal system improvements within an Agile environment.'>
                </ExperienceCard>
            </div>

        </article>
    )
}

