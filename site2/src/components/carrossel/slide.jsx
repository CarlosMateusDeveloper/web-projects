export default function Slide({icon, title, description}) {
    return (
        <div>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}