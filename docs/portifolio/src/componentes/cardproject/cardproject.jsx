import './cardproject.css'
export default function CardProject({ title, link}) {
  return (
    <div className='my-card d-flex flex-column justify-content-center align-items-center'>
        <div className='card-content'>
            <h3>{title}</h3>
            <a className='btn btn-danger' href={link} target="_blank" rel="noreferrer">See project  </a>
        </div>
    </div>
  )
}