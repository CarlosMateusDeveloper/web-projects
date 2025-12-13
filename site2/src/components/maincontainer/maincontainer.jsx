import './maincontainer.css'
import Button from '../button/button.jsx'
import homeimage1 from '../../assets/home-img-1.png';
import homeimage2 from '../../assets/home-img-2.png';
export default function maincontainer() {
    return (
        <section className="maincontainer container-fluid pt-5 px-5 d-flex flex-row" id='maincontainer'>
            <div className='d-flex flex-column justify-content-start align-items-start pt-4 mt-3 ms-5 ps-5'>
                <h1 className="title text-white w-75 ">Create The <br /> Constructions <br /> You Want Here</h1>
                <p className='text-secondary fs-6 w-75'>We provide the best home design, construction and maintenance services for you and your family.</p>
                <div className="buttons d-flex gap-3 justify-content-center">
                    <Button text="Our Services"/>
                    <button className='v-projects bg-transparent'>View Projects <i className="bi bi-arrow-right text-danger"></i></button>
                </div>
                <div className="numbers d-flex gap-5 pt-4 me-5">
                    <div>
                    <h3 className='number fs-1 '><strong>10+</strong> </h3>
                    <p className='text-white '>Years of <br />Experience</p>
                </div>
                <div className='numbers ps-5'>
                    <h3 className='number fs-1'> <strong>200</strong> </h3>
                    <p className='text-white fs-6'>Complete <br /> Projects</p>
                </div>
                </div>
            </div>
            <div className='d-flex justify-content-center pt-5'>
                <img src={ homeimage1 } className='mcimg-1 pe-5 me-5' alt="home-image-1" />
                <img src={homeimage2} className='mcimg-2 w-25' alt="home-image-2" />
            </div>
        </section>
    )
}