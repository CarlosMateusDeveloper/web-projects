import './footer.css'
export default function Footer(){
    return(
        <section className='container-fluid pt-5 d-flex flex-column justify-content-center align-items-center' id='footer'>
            <div className='container d-flex justify-content-between gap-5'>
                <div>
                    <div className='d-flex'>
                        <i className='ri-building-3-line text-danger'></i> <h5 className='text-white'>Construct</h5>
                    </div>
                    <p className='text-secondary'>We build security <br /> and trust in homes.</p>
                    <p className='text-secondary'>Email: construct123@gmail.com</p>
                </div>
                <div>
                    <h5 className='title-footer text-white'>Company</h5>
                    <div className='link-footer d-flex flex-column'>
                        <a className='text-decoration-none text-secondary' href="">About Us</a>
                        <a className='text-decoration-none text-secondary' href="">Services</a>
                        <a className='text-decoration-none text-secondary' href="">Projects</a>
                    </div>
                    
                </div>
                <div>
                    <h5 className='title-footer text-white'>Information</h5>
                    <p className='text-secondary'>Peru - Lima <br /> Av.Moon#321</p>
                    <p className='text-secondary'>9AM-11PM</p>
                </div>
                <div className='media'>
                    <h5 className='title-footer text-white'>Social Media</h5>
                    <div className='social d-flex gap-2 ps-2'>
                        <i className="bi bi-instagram text-danger"></i>
                        <i className="bi bi-facebook text-danger"></i>
                        <i className="bi bi-twitter-x text-danger"></i>
                    </div>
                </div>
            </div>
            <br />
            <hr /><br />
            <p className='text-secondary'>All right reserved By Mateus.code</p>

        </section>
    )
}