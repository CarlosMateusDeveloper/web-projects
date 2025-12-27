import './projects.css'
import CardProject from './cardproject/cardproject'
import buildImg from '../../assets/projectImg1.png'
import sheikhImg from '../../assets/sheik.png'
import painel from '../../assets/paineldedados.png'

export default function Projects() {
    return (
        <section className='project d-flex flex-column justify-content-center align-items-center py-5' id='projects'>
            <div className='container reveal d-flex flex-column justify-content-around align-items-center text-center'>
                <h1 className='text-white mb-5'>Meus Projetos</h1>
                <div className='project-container d-flex flex-row flex-wrap gap-3 px-5 justify-content-center'>
                    <div className="project-content col-12 col-md-6 col-lg-4">
                        {/*Card 1*/}
                       <CardProject 
                       img={buildImg}
                       title="Portifólio de Construtora"
                       description={'Portfólio web desenvolvido para empresa de engenharia civil, adaptação para diferentes dispositivos.'}
                       link=""
                       button="Acessar"
                       />
                    </div>
                    <div className="project-content col-12 col-md-6 col-lg-4">
                        {/*Card 2*/}
                        <CardProject 
                       img={sheikhImg}
                       title="Sistema de Gestão de Poços de Petróleo"
                       link="#"
                       button='Em breve'
                       />
                    </div>
                        {/*Card 3*/}
                    <div className='project-content col-12 col-md-6 col-lg-4'>
                        <CardProject 
                       img={painel}
                       title="Painel de Monitoramento de dados"
                       link=""
                        button='Em breve'
                        />
                    </div>
                </div>
                {/* <div className='d-flex flex-row gap-3'> */}
                    {/* <div className='project-content col-12 col-md-6 col-lg-4'>
                        {/*Card 4*/}
                        {/* <CardProject 
                       img={""}
                       title="Projeto 4"
                       link=""/>
                    </div>
                    <div className='project-content col-12 col-md-6 col-lg-4'>
                        {/*Card 5*/}
                        {/* <CardProject 
                       img={""}
                       title="Projeto 5"
                       link=""/>
                    </div> */} 
                    {/* <div className='project-content col-12 col-md-6 col-lg-4'>
                         {/*Card 6*/}
                        {/* <CardProject 
                       img={""}
                       title="Projeto 6"
                       link=""/>    
                    </div> */}
                 {/* </div>  */}
                    
                       
            </div> 
            
        </section>
    )
}

