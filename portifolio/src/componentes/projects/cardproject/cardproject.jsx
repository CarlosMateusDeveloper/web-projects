import './cardproject.css'
export default function CardProject({ title, link, img, description, button}) {
  return (
    <div className='my-card d-flex flex-column justify-content-center align-items-center rounded-3'>
        <div className='card-content '>
            <img src={img} alt={title} />
            <div className='ps-2 mt-4 pb-4'>
              <h3 className='title text-start  '>{title}</h3>
              <p className='description text-start fs-6'>{description}</p>
              <a className='btn btn-danger' href={link} target="_blank" rel="noreferrer">{button}  </a>
            </div>
        </div>
    </div>
  )
}