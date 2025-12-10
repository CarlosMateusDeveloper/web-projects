import './list.css'

export default function List({title}) {
    return (
        <div className='d-flex flex-row'>
            <i className="bi bi-check-circle"></i>
            <p className='text-secondary ms-2'>{title}</p>
        </div>)
}