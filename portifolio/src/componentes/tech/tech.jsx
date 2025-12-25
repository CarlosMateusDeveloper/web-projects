// import './tech.css'
// export default function Tech({stack , name} ){
//   return(
//     <div className="tech rounded-3 pt-3">
//         {stack}
//         <h6 className='text-white'>{name}</h6>
//     </div>
//   )
     
// }

import Marquee from "react-fast-marquee";
import "./tech.css";

export default function TechMarquee() {
  return (
    <div className="marquee-wrapper">
      <Marquee speed={60} gradient={false} pauseOnHover>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
          
        <i className="devicon-bootstrap-plain colored" />
        <i className="devicon-tailwindcss-plain colored" />
        <i className="devicon-sass-original colored"></i>
        <i className="devicon-react-original colored" />
        <i class="devicon-nodejs-plain-wordmark colored"></i>
        <i classNamo="devicon-mysql-plain-wordmark colored"></i>
        <i className="devicon-postgresql-plain-wordmark colored"></i>
        <i className="back-icon devicon-docker-plain-wordmark colored"></i>
        <i className="devicon-git-plain-wordmark colored"></i>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" />
        
      </Marquee>
    </div>
  );
}
