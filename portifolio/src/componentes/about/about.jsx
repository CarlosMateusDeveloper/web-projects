import './about.css'
import foto from '../../assets/fotoportifolio-1.png'
import foto2 from '../../assets/foto2.png'
import fotoesportes from '../../assets/foto-esportes.jpg'
export default function About() {
    return (
        <section className="about py-5 px-5 container-fluid" id='about'>
            <h1 className='text-center reveal'>Sobre mim</h1>
            <div className='reveal d-flex flex-row '>
                <div className="tab-container d-flex flex-row justify-content-between">

                <input type="radio" name="tab" id="tab1" defaultChecked hidden />
                 <input type="radio" name="tab" id="tab2" hidden />
                <input type="radio" name="tab" id="tab3" hidden />
             <div className="tabs">
                 <label className='text-secondary fs-2' htmlFor="tab1">Formação</label>
                 <label className='text-secondary fs-2' htmlFor="tab2">Eu</label>
                <label className='text-secondary fs-2' htmlFor="tab3">Hobbies</label>
             </div>

             <div className="content d-flex flex-row ps-5">
                <div id="c1" className="tab-content text-start ">
                <p className="about-text text-white pt-2 px-4 align-content-center fs-4 ">
                 Desenvolvedor Fullstack em formação no Instituto Federal do Rio Grande do Norte (IFRN), campus Parnamirim. Atualmente, curso Tecnologia em Sistemas para Internet e estou no 4º semestre, com previsão de conclusão em dezembro de 2027.
                <br />
                 <br /> {/*em Desenvolvimento fullstack, banco de dados, Cloud Computing, machine learning, Deep Learning e Visão Computacional */}
                Tenho certificações em plataformas como: <br /> 
                Cisco Networking Academy; <br />
                 Coursera; <br />
                 Onebitcode; <br /> 
                 Huawei ICT Academy.
                <br /> 
               
                </p>
                <img className='rounded-3 animate-float img ' src={foto} alt="" />  
            </div>
             <div id="c2" className="tab-content text-end">
                <p className='about-text text-white pt-2 px-4 align-content-center text-start fs-4 '>  Sou homem, heterossexual, tenho 23 anos e atualmente estou morando no Município de Nisia Floresta e trabalho em todas as modalidades, presencial, Híbrido ou remoto,  ocupo vagas de Desenvolvedor de Software e analista de TI.</p>
                    <img className=' rounded-3 animate-float img' src={foto2} alt="" />
                    
            </div>
                    <div id="c3" className="tab-content">
                        <p className='about-text text-white pt-2 px-4 align-content-center fs-4'>
                            Meus Hobbies envolvem leitura e atividades fisicas, busco fazer algo que ocupe a minha mente de forma saudável e me elevem fisica e mentalmente como ir à academia, praticar Jiu-jitsu e caminhar. Minha meta é ler pelo menos 10 páginas de um livro por dia, ir todos os dias a academia e conseguir minha primeira graduação no Jiu-jitsu.
                        </p>
                        <img className='rounded-3 animate-float img' src={fotoesportes} alt="" />
                    </div>
                </div>
            </div>
            </div>
            
    </section>
    )
}