import './contact-card.css'
export default function ContactCard({icon, title, local , link}) {
    return (
        <div className='card-contact text-white rounded-4    fade-in'>
            <a className='text-reset d-flex flex-column align-items-center justify-content-center' link={link}>
                <i class={icon}></i>
                <h3>{title}</h3>
                <p>{local}</p> 
            </a>
           
        </div> 
    )
}   