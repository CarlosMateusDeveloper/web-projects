import "./about.css";
import foto from "../../assets/fotoportifolio-1.png";
import foto2 from "../../assets/foto2.png";
export default function About() {
  return (
    <section className="about p-4 container-fluid" id="about">
      <h1 className="text-center reveal">Sobre mim</h1>
      <div className="about-content reveal d-flex flex-row pt-4 ">
        <div className="tab-container d-flex flex-row justify-content-evenly tab-wrapper">
          <input type="radio" name="tab" id="tab1" defaultChecked hidden />
          <input type="radio" name="tab" id="tab2" hidden />
          <input type="radio" name="tab" id="tab3" hidden />
          <div className="tabs">
            <label className="text-secondary fs-2" htmlFor="tab1">
               Sobre mim
            </label>
            <label className="text-secondary fs-2" htmlFor="tab2">
              Foco Técnico
            </label>
          </div>

          <div className="content d-flex flex-row ">
            <div id="c1" className="tab-content text-start ">
              <p className="about-text text-white  align-content-center fs-4 text-wrap ">
                Estou cursando Tecnólogo em Sistemas para Internet no IFRN. <br />
                Me dedico a automações, sistemas web e mobile. <hr />
                Crio soluções que organizam processos e aumentam a eficiencia numa instituição.
              </p>
              <img className="rounded-3 animate-float img" src={foto} alt="" />
            </div>
            <div id="c2" className="tab-content text-end">
              <p className="about-text text-white  ps-0 pe-4  align-content-center text-start fs-4 ">
                Meu foco técnico está em desenvolvimento web com React e NodeJS, além de usar Python para
                automações e analise de dados. <br />
                <hr />
                Busco oportunidades como Estagiário ou
                Desenvolvedor Júnior e estou disponível para atuar
                de forma presencial,no modelo híbrido ou remoto.
              </p>
              <img
                className=" rounded-3 animate-float img"
                src={foto2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
