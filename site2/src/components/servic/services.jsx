import Button from '../button/button'
import './services.css'
import Carousel from '../carrossel/carrossel.jsx'
export default function Services() {
    return (
        <section className=' d-flex flex-column' id="services">
            <div className='services-content container-fluid px-5 pt-5 mt-5  d-flex flex-column '>
                <div className='px-5 mt-5 me-5 d-flex'>
                    <div>
                        <h6 className='subtitle-services'>OUR SERVICES</h6>
                        <h1>High Quality Construction Services</h1>
                    </div>
                     <p className='text-secondary '>We provide multiple services for you, offering confidence and security in construction.</p>
                      <Button text={"Contact Now"}/>
                </div>
               
              <Carousel className='carrossel-services' />
            </div>
            <div className="back"></div>
        </section>
    )
}