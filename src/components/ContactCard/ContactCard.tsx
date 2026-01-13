import './ContactCard.css'

type ContactCardProps = {
    icon: string
    name: string
    link: string
}

export function ContactCard({icon, name, link}: ContactCardProps) {
    return (
        <li className='list-item'>
            <a href={link} target='_blank' rel='noopener noreferrer'>
                <img className='icon' alt={name + ' icon'} src={icon}></img>
                <span>{name}</span>
            </a>
        </li>
    )
}