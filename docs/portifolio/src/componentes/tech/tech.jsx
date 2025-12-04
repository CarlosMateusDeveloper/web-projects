import './tech.css'
export default function Tech({stack , name} ){
  return(
    <div className="tech rounded-3 pt-3">
        {stack}
        <h6 className='text-white'>{name}</h6>
    </div>
  )
     
}