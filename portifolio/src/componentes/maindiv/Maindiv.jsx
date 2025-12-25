import './maindiv.css'
import perfil from '../../assets/fotoportifolio.jpg'
export default function Maindiv() {
  return ( 
  <section className="home  d-flex flex-row align-items-center justify-content-center pe-5" id="home">       
        <div className="home-content reveal d-fex flex-column justify-content-center align-items-center mb-5 pe-md-5">
          <h1 className='text-center text-lg-end '><span>Mateus Gonçalves</span> </h1>  
          <h3 className="typing-text text-center text-lg-end">Desenvolvedor de Software</h3>
          <p className='text-secondary fs-5 text-end ms-0 ms-md-auto'>Desenvolvimento de soluções de software. Especialista em React e python  na criação de aplicações web e automações de processos.</p>

          <div className="social d-flex gap-3 justify-content-end  mb-5 pb-4">
            
            <a className='c-btn btn ' href='/Mateus_Goncalves_Estagiario.pdf' target="_blank" rel="noreferrer">Currículo</a>

           <div className="social-icons d-flex gap-2">
             <a className=' d-inline-flex justify-content-center align-items-center border rounded-circle border-danger' href="https://www.linkedin.com/in/carlos-gonçalves-b38701211/" target="_blank"><i class="bi bi-linkedin text-danger w-50 "></i></a>

            <a className='d-inline-flex justify-content-center align-items-center border rounded-circle border-danger ' href="https://github.com/CarlosMateusDeveloper" target="_blank"><i class="bi bi-github text-danger"></i></a>

            <a className='d-inline-flex justify-content-center align-items-center border rounded-circle border-danger ' href="https://www.instagram.com/dev_carlos_mateus" target="_blank"><i class="bi bi-instagram text-danger btn-hover"></i></a>
           </div>
          </div> 
        </div>
        <div className="home-img reveal  pe-5 mb-5 "> <img className='rounded-circle' src={perfil} alt=""/></div>
      </section>)
}