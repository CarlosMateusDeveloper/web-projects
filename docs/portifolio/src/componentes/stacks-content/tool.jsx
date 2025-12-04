import './tool.css'
export default function Tool({ icon , title, tech }){
    return(
        <div className='tool p-4 rounded-4'>
          <div className="d-flex  mb-3">
            <div className='stack-icon rounded-circle text-white'>{icon}</div>
            <h1 className='text-white d-flex align-items-center '>{title}</h1>
          </div>
          
          <div className='tech-icon'>{tech}</div>
        </div>
    )   
}