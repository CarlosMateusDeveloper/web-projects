import Button from '../button/button'
import './services.css'
import Carousel from '../carrossel/carrossel.jsx'
export default function Services() {
    return (
        <section className=' d-flex flex-column justify-content-center align-items-center' id="services">
            <div className='services-content container-fluid px-5  d-flex flex-column '>
                <div className='px-5  mx-5 d-flex'>
                    <div className='pe-5'>
                        <h6 className='subtitle-services '>OUR SERVICES</h6>
                        <h1 className='title-services'>High Quality Construction Services</h1>
                    </div>
                     <p className='text-secondary d-services pt-3'>We provide multiple services for you, offering confidence and security in construction.</p>
                     <div className="button-services pt-4"> <Button text={"Contact Now"}/></div>
                </div>
               
              <Carousel className='carrossel-services' />
            </div>
            <div className="back"></div>
        </section>
    )
}