import '../Shared.css'

export function Header(){
    return (
        <header className='article-card'>
            <h1>Leonardo Contrera</h1>

            <h3>Software Developer</h3>
            
            <ul className='header-list'>
                <li><a href='#About-Section'>About</a></li>
                <li><a href='#Experience-Section'>Experience</a></li>
                <li><a href='#Projects-Section'>Projects</a></li>
                <li><a href='#Contacts-Section'>Contacts</a></li>
            </ul>
        </header>
    )
}