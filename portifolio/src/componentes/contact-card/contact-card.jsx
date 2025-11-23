import './contact-card.css'
export default function ContactCard({icon, title, local}) {
    return (
        <div className='card-contact text-white rounded-4   d-flex flex-column align-items-center justify-content-center fade-in'>
            <a href='{}'>
                <i class={icon}></i>
                <h3>{title}</h3>
                <p>{local}</p> 
            </a>
           
        </div> 
    )
}   