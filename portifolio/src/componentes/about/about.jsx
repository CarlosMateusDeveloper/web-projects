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
             Foco Técnico
            </label>
          </div>

          <div className="content d-flex flex-row ">
            <div id="c1" className="tab-content text-start ">
              <p className="about-text text-white  align-content-center fs-4 text-wrap ">
                Dedicado a automação, análise de dados e sistemas web.
                Crio soluções práticas usando JavaScript, Python e IA, com foco na automação e experiência do usuário.
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
                 Busco oportunidades como Estagiário ou
                Desenvolvedor Júnior e estou disponível para atuar
                presencialmente, em modelo híbrido ou remoto.
                <hr />
                Sou inovador e acompanho as tendências do mercado, novas
                tecnologias e boas práticas que geram valor e aumentam a
                produtividade.
              </p>
              <img
                className=" rounded-3 animate-float img"
                src={foto2}
                alt=""
              />
            </div>
            <div id="c3" className="tab-content">
              <p className="about-text text-white pt-2 ps-0 pe-4  align-content-center fs-4">
                Atualmente estou aprofundando conhecimentos em desenvolvimento de sistemas, automação e integração de APIs, com foco em aplicações web e soluções orientadas a dados.
                <hr />
                Tenho interesse em atuar em projetos que envolvam Python, backend, automação de processos e uso prático de IA.
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
