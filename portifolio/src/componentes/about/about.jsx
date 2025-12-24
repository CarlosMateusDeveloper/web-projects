import "./about.css";
import foto from "../../assets/fotoportifolio-1.png";
import foto2 from "../../assets/foto2.png";
import fotoesportes from "../../assets/foto-esportes.jpg";
export default function About() {
  return (
    <section className="about p-5 container-fluid" id="about">
      <h1 className="text-center reveal">Sobre mim</h1>
      <div className="about-content reveal d-flex flex-row pt-5 ">
        <div className="tab-container d-flex flex-row justify-content-evenly tab-wrapper">
          <input type="radio" name="tab" id="tab1" defaultChecked hidden />
          <input type="radio" name="tab" id="tab2" hidden />
          <input type="radio" name="tab" id="tab3" hidden />
          <div className="tabs">
            <label className="text-secondary fs-2" htmlFor="tab1">
              Formação
            </label>
            <label className="text-secondary fs-2" htmlFor="tab2">
              Sobre mim
            </label>
            <label className="text-secondary fs-2" htmlFor="tab3">
              Hobbies
            </label>
          </div>

          <div className="content d-flex flex-row ">
            <div id="c1" className="tab-content text-start ">
              <p className="about-text text-white  align-content-center fs-4 text-wrap ">
                Desenvolvedor focado em automação, análise de dados e sistemas web.
                Crio soluções práticas usando JavaScript, Python e IA, com foco em entrega rápida.
                <hr />
                Tenho certificações em plataformas como: <br />
                Cisco Networking Academy; <br />
                Coursera; <br />
                Onebitcode; <br />
                Huawei ICT Academy.
                <br />
              </p>
              <img className="rounded-3 animate-float img" src={foto} alt="" />
            </div>
            <div id="c2" className="tab-content text-end">
              <p className="about-text text-white  ps-0 pe-4  align-content-center text-start fs-4 ">
                Estou em início de carreira focado em entregar soluções práticas
                e evoluir rápido. Busco oportunidades como Estagiário ou
                Desenvolvedor Júnior e estou disponível para atuar
                presencialmente, em modelo híbrido ou remoto.
                <hr />
                Sou inovador e acompanho as tendências do mercado, novas
                tecnologias e boas práticas que geram valor e aumentam a
                produtividade. Busco ambientes que incentivem evolução técnica e
                permitam aplicar ideias atuais para construir soluções mais
                eficientes e modernas.
              </p>
              <img
                className=" rounded-3 animate-float img"
                src={foto2}
                alt=""
              />
            </div>
            <div id="c3" className="tab-content">
              <p className="about-text text-white pt-2 ps-0 pe-4  align-content-center fs-4">
                Meus Hobbies envolvem: <br /> <br /> Leitura e atividades
                fisicas, procuro fazer algo que ocupe a minha mente de forma
                saudável e me elevem fisica e mentalmente como ir à academia,
                praticar Jiu-jitsu e ler.
                <hr />
                Minha meta é ler pelo menos 10 páginas de um livro por dia, ir
                todos os dias a academia e conseguir minha primeira graduação no
                Jiu-jitsu.
              </p>
              <img
                className="rounded-3 animate-float img"
                src={fotoesportes}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
