import Cards from './cards/cards'
import image1 from '../../assets/projects-img-1.png'
import image2 from '../../assets/projects-img-2.png'
import image3 from '../../assets/projects-img-3.png'
import '../projects/projects.css'
export default function Projects() {
    return (
        <section className='d-flex flex-column align-items-center pt-4' id='projects'>
            <h5 className='pt-5 fs-6 mt-2'>OUR PROJECTS</h5>
            <h3 className='text-white text-center '>Latest Completed Projects</h3>
            <div className="cards-projects d-flex justify-content-center gap-4 pt-5">
                <Cards subtitle={'House construction'} title={'Two Story House'} date={'January 15, 2024'} image={image1}/>
                <Cards subtitle={'Maintenance & Repair'} title={'Stairs & Columns'} date={'May 21, 2024'} image={image2}/>
                <Cards subtitle={'Construction Of Home Areas'} title={'Kitchen Home'} date={'July 03,2025'} image={image3}/>
            </div>
        </section>
    )
}