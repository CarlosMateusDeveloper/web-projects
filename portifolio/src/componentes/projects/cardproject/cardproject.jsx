import './cardproject.css'
export default function CardProject({ title, link, img, description, button}) {
  return (
    <div className='my-card d-flex flex-column justify-content-start align-items-center rounded-3'>
        <div className='card-content '>
            <img src={img} alt={title} />
            <div className='px-2 mt-2 mt-lg-4 '>
              <h3 className='title text-start  '>{title}</h3>
              <p className='description text-start mt-0 mt-lg-4'>{description}</p>
              <a className='btn btn-danger' href={link} target="_blank" rel="noreferrer">{button}  </a>
            </div>
        </div>
    </div>
  )
}