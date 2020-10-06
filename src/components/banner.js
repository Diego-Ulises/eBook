import React from "react";
import { ReactComponent as RightArrow } from "../assets/icon-download.svg";
import CV from "../resources/CV Cesar E. Escamilla Barrera.pdf"

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>Generando soluciones</span>
            </div>
            <div className='line'>
              <span>innovadoras y originales.</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href={CV} download target="_blank">
              Conoce más <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
