import './icon.css'
export default function Icon({icone, link}) {
    return (
        <a className='icon d-inline-flex justify-content-center align-items-center border rounded-circle border-danger ' href={link} target="_blank"><i class={icone + " text-danger btn-hover"}></i></a>
    )
}