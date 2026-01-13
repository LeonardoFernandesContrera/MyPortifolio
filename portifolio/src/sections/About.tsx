import '../Shared.css'
import {about} from '../data/about'

export function About() {
    return (
        <article className="article-card" id='About-Section'>
            <h3>About</h3>

            <p>{about}</p>
        </article>
    )
}