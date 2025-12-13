import './slide.css'
export default function Slide({icon, title, description}) {
    return (
        <div className='slide p-4 mx-3'>
            <div className="c-icon ">{icon}</div>
            <h3 className='c-title pt-3'>{title}</h3>
            <p className='c-desc text-secondary'>{description}</p>
        </div>
    )
}