import './slide.css'
export default function Slide({icon, title, description}) {
    return (
        <div className='slide pt-4 px-4'>
            <div className="c-icon">{icon}</div>
            <h3 className='c-title '>{title}</h3>
            <p className='c-desc'>{description}</p>
        </div>
    )
}