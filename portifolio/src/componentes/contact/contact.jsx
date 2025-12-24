import perfil from '../../assets//fotocontatoultima.png'
import './contact.css'
import Contactcard from '../contact-card/contact-card.jsx'
export default function Contact() {
    return (
        <section className="contact d-flex flex-column align-itens-center pb-md-0 pt-5" id='contact'>
            <h1 className='text-center reveal text-white pb-3  pt-md-0'>Contate-me</h1>
            <div className='reveal d-flex flex-row justify-content-center align-items-center flex-wrap'>
                <div className='pe-0 pe-md-5 d-flex flex-column justify-content-center flex-wrap'>
                    <div className='d-flex flex-row flex-wrap '>
                        <div className="col-12 col-md-6 d-flex justify-content-center "> 
                            <Contactcard 
                            icon={"bi bi-geo-alt-fill"} 
                            title={"Localização"} 
                            local={"Natal, RN - Brasil"} />         
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center ">
                            <Contactcard 
                            icon={"bi bi-telephone-fill"}
                            link={'https://wa.me/5584992039516?'}
                            title={"Telefone"} 
                            local={"+55 84 99203-9516"}/>
                        </div>
                    </div>
                    <div className='d-flex flex-row'>
                        <div className="col-12 col-md-6 text-white d-flex justify-content-center">
                            <Contactcard 
                            icon={"bi bi-envelope-fill"} 
                            link={'https://mail.google.com/mail/u/0/?view=cm&to=mateusdev33@gmail.com'}
                            title={"Email"} 
                            local={"mateusdev33@gmail.com"}/>  
                        </div>
                    </div>
                </div>
               <div className="contact-img me-5 pt-3 "> <img className='img-fluid rounded-4 ps-0 ms-0' src={perfil} alt=""/></div>
            </div>
            
        </section>
   
    )
}