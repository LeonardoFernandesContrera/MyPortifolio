import { ContactCard } from '../components/ContactCard/ContactCard'
import { contacts } from '../data/contacts'
import '../Shared.css'

export function Contact() {
    return (
        <article className='article-card' id='Contacts-Section'>
            <h3>Contacts</h3>

            <ul>
                {contacts.map((contact, index) => (
                    <ContactCard
                        key={index}
                        icon={contact.icon}
                        name={contact.name}
                        link={contact.link}>
                        
                    </ContactCard> 
                ))}
            </ul>

        </article>
    )
}