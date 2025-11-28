import './Maindiv.css'
import perfil from '../../assets/fotoportifolio.jpg'
export default function Maindiv() {
  return ( 
  <section className="home  d-flex flex-row align-items-center justify-content-center container-fluid pe-5" id="home">       
        <div className="home-content reveal d-fex flex-column justify-content-center align-items-center mb-5 pe-md-5">
         <h1 className='text-center text-lg-end '><span>Mateus Gonçalves</span> </h1>  
         <h3 className="typing-text text-center text-lg-end">Desenvolvedor de Software</h3>
         <p className='text-secondary fs-5 text-end ms-0 ms-md-auto  w-75 '>Desenvolvimento de soluções de software com foco em performance, escalabilidade. Especialista em React e python  para criar aplicações web que impulsionam resultados.</p>
         <div className="social-icons d-flex justify-content-end gap-3 fs-3 mb-5 ">
            <a className=' d-inline-flex justify-content-center align-items-center border rounded-circle border-danger' href="https://www.linkedin.com/in/carlos-gonçalves-b38701211/" target="_blank"><i class="bi bi-linkedin text-danger w-50"></i></a>
            <a className='d-inline-flex justify-content-center align-items-center border rounded-circle border-danger ' href="https://github.com/CarlosMateusDeveloper" target="_blank"><i class="bi bi-github text-danger"></i></a>
            <a className='d-inline-flex justify-content-center align-items-center border rounded-circle border-danger ' href="https://www.instagram.com/dev_carlos_mateus" target="_blank"><i class="bi bi-instagram text-danger btn-hover"></i></a>
          </  div> 
        </div>
        <div className="home-img reveal me-5 pe-5 mb-5 "> <img className='rounded-circle' src={perfil} alt=""/></div>
      </section>)
}