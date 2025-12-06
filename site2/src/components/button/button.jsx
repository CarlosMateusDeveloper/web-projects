import './button.css'

export default function Button({text , link}) {
    return (            
        <a className="custom-button text-white py-2 px-4" href={link} >
            <strong>{text}</strong>
        </a>
    )
}