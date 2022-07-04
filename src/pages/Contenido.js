import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/estilosC.css';
import ReactPlayer from 'react-player';
import '../css/corazon.css';
//import './Corazon.js';
const Contenido = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

    return (
      <div>
      <section className="hero_sec">
        <div className="hero_text">
          <p>
          <Typewriter
  options={{
    autoStart:true,
    loop:true,
    cursor: null,
  }}
  onInit={(typewriter) => {
    typewriter
    .typeString(`<span class="text-1">Sé tu verdadero yo</span>`)
    .pauseFor(2000)
    .deleteAll()
    .typeString(`<span class="text-2">Elige tu personaje</span>`)
    .pauseFor(2000)
    .deleteAll()
    .typeString(`<span class="text-3">Y sal con estilo.</span>`)
    .pauseFor(2000)
    .deleteAll()
    .start();
  }}
/>
</p>
          <h1>Descubre tu top ideal</h1>
        </div>
      </section>
      <section className="sec1">
          <div className="sec1_img_group">
            <div className="sec1_img_ sec1_img1">
              <img src="1.PNG" width="300" height="350"/>
            </div>

            <div className="sec1_img_ sec1_img2">
              <img src="2.PNG" alt=""/>
            </div>

            <div className="sec1_img_ sec1_img3">
              <img src="3.PNG" alt=""width="300" height="300"/>
            </div>
          </div>
        </section>


        <section className="sec2 luxy_el">
              <div className="sec_text">
                <h2>Tendencia</h2>
                <div className="sec_text_desc">
                  <div className="sec_text_desc_p">
                    <p>Sencilla, clásica y creada para marcar un hito. El look atemporal de esta camiseta de local oficial adidas Real Madrid se acentúa con detalles en morado claro y el escudo del club repetido en relieve sobre el tejido blanco. Esta versión está diseñada para rendir al máximo en la cancha gracias a la tecnología de ventilación HEAT.RDY.</p>
                    <p>Hecho con materiales 100% reciclados, este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos.</p>
                  </div>
                </div>
              </div>
              <div className="sec_img">
                <ReactPlayer url='video1.mp4'
                loop
                muted
                controls
                />
              </div>
          </section>

          <section className="sec4 luxy_el">
            <h3>Running/ Fútbol/ Outdoor/ Training</h3>
            <div className="sec4_img_group">
              <div className="sec4_img1">
                <img src="9.PNG" width="400" height="500"/>
              </div>
              <div className="sec4_img2">
                <img src="7.PNG" width="400" height="450"/>
              </div>
              <div className="sec4_img3">
                <img src="8.PNG" width="400" height="500"/>
              </div>
            </div>
          </section>

          <section>
          <h6>Nuestros clientes</h6>
        <Slider {...settings}>
          <div>
            <img src="P1.PNG" width="300" height="300"/>
          </div>
          <div>
            <img src="P1.PNG" width="300" height="300"/>
          </div>
          <div>
            <img src="P1.PNG" width="300" height="300"/>
          </div>
          <div>
            <img src="P1.PNG" width="300" height="300"/>
          </div>
          <div>
            <img src="P1.PNG" width="300" height="300"/>
          </div>
          <div>
            <img src="P1.PNG" width="300" height="300"/>
          </div>
          <div>
            <img src="P1.PNG" width="300" height="300"/>
          </div>
          <div>
            <img src="P1.PNG" width="300" height="300"/>
          </div>
          <div>
            <img src="P1.PNG" width="300" height="300"/>
          </div>
        </Slider>
      </section>
      <section className="sec3 luxy_el">
        <div className="sec_img">
        <ReactPlayer url='video2.mp4'
                loop
                muted
                controls
                />
        </div>
        <div className="sec_text">
          <h2 className='nosotrosT'>Nosotros</h2>
          <div className="sec_text_desc">
            <div className="sec_text_desc_p">
              <p className='nosotrosP'>Nuestras victorias son nuestras recompensas. La ropa y las zapatillas de adidas ayudan a que demos nuestra mejor versión. Ese kilómetro extra. Una repetición más. No importa si toca entrenar piernas, salir a correr o descansar todo el día. Tenemos lo que buscas. Camisetas para jugar o para animar a tu equipo. Zapatillas de running para correr o para caminar. Ropa de entrenamiento o polos para relajarse los domingos. Un par de zapatillas blancas que puedes combinar con todo. Tenemos todo lo que necesitas en ropa y zapatillas para hombre.</p>
              <span class="favorite">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 25 25" width="40"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
          </span>
            </div>
            
          </div>
        </div>

      </section>
      </div>



    );
}

export default Contenido;