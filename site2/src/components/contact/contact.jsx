import './contact.css'
import Card from './card-contact/c-contact'
import image from '../../assets/contact-img.png'
export default function Contact(){
    return(
        <section className="d-flex flex-column  align-items-center px-4 mx-5" id="contact">
            <div className='contact pt-5'>
                <h6 className='subtitle-contact pt-4'>CONTACT ME</h6>
            <h1>Write To Us & Build</h1>
            <div className='contact-content d-flex justify-content-center flex-wrap pt-5'>
                <img className='contact-image me-5' src={image} alt="" />
                <div className="top d-flex flex-row gap-3 flex-wrap ">
                     <Card 
                     icon={<i class="bi bi-geo-alt-fill"></i>} 
                     title={"I'm Here"} 
                     subtitle={<p>Peru - Lima Av.Moon n°321</p>}/>
                     <Card 
                     icon={<i class="bi bi-telephone"></i>} 
                     title={"Talk to me"} 
                     subtitle={<>+00-987-7654-432 +11-012345</>}/>    
                     <Card 
                     icon={<i class="bi bi-chat-right-dots"></i>}  
                     title={"Chat with me"} 
                     subtitle={<div className='d-flex gap-3 pt-1'> <i class="sub-icon ri-whatsapp-line"></i><i class="sub-icon ri-messenger-line"></i> <i class="sub-icon ri-telegram-line"></i></div>}/> 
                </div>
                 
            </div>
            </div>
            
        </section>
    )
}