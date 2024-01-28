import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Slide from "../components/Slide";
import lArrow from "../assets/leftarrow.svg";
import rArrow from "../assets/rightarrow.svg";

const sliders = [
  {
    id: 1,
    title: "Misión",
    description:
      "Ofrecer soluciones tecnológicas personalizadas y eficientes que potencien el crecimiento y la estabilidad financiera de pequeños y medianos negocios. Nos comprometemos a brindar un servicio integral, desde la implementación hasta el soporte continuo, para asegurar el éxito y la satisfacción de nuestros clientes.",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/v4xp3xjwwdtbehvhkx84a/mision.jpg?rlkey=p72k9jc716l13k59mfaxta3tl&dl=0",
  },
  {
    id: 2,
    title: "Visión",
    description:
      "Ser reconocidos como líderes en el desarrollo de sistemas de escritorio especializados en soporte financiero, destacándonos por nuestra innovación, calidad y compromiso con el éxito de nuestros clientes. Buscamos ser la opción preferida para aquellos que buscan optimizar sus procesos financieros a través de la tecnología.",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/zfalr9q4793kvupfih2ev/vision.jpg?rlkey=6ytukvxjxygbzjwpjs51uhpi0&dl=0",
  },
  {
    id: 3,
    title: "Valores",
    description:
      "Buscamos la excelencia, actuamos con integridad, fomentamos la innovación, nos comprometemos con el éxito de nuestros clientes, y practicamos la empatía en cada interacción. Estos valores fundamentales guían nuestro trabajo diario y definen nuestra relación con clientes y socios.",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/ft1m9kpcrgn3j78p7vnfp/valores.jpg?rlkey=awcib7vv485di3fatpyh8smcf&dl=0",
  },
];

function Nosotros() {
  //Hook para hacer referencia a los elementos.
  const sliderRef = useRef();

  //Hook para manejar los elementos por su indice
  const [currentIndex, setcurrentIndex] = useState(0);

  //Hook para desplazar la vista hacia el elemento correspondiente.
  useEffect(() => {
    //referencia directa al elemento actual.
    const sliderNode = sliderRef.current;
    //selecciona el elemento correspondiente al indice actual
    const allNode = sliderNode.querySelectorAll(".slider-effect")[currentIndex];

    if (allNode) {
      //devuelve el tamaño de un elemento y su posición relativa al viewport 
      const containerRect = sliderNode.getBoundingClientRect();
      //obtener coordenadas tanto del contenedor como el slider
      const targetRect = allNode.getBoundingClientRect();

      // Ajustamos el desplazamiento para centrar el slide en el contenedor
      sliderNode.scroll({
        top: targetRect.top - containerRect.top,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  //Funcion para la direccion del slider.
  const scrollToImage = (direction, event) => {
    event.preventDefault();

    setcurrentIndex((curr) => {
      if (direction === "prev") {
        return curr === 0 ? sliders.length - 1 : curr - 1;
      } else {
        return curr === sliders.length - 1 ? 0 : curr + 1;
      }
    });
  };

  return (
    <>
      <AboutCont>
        <div className="about" id="nosotros">
          <div className="about-container">
            {/*UseRef para el acceso directo a los elementos dentro del div */}
            <div ref={sliderRef}>
              {sliders.map((slider, index) => {
                //Map para recorrer el arreglo de sliders por su id.
                return (
                  <div className="slider-effect" key={slider.id}>
                    <div className="slider-picture">
                      {currentIndex === index && ( //condicional para mostrar solo un elemento a la vez dentro del slider
                        <Slide
                          title={slider.title}
                          description={slider.description}
                          imgURL={slider.image}
                        />
                      )}
                    </div>
                    {/*Flechas del slider*/}
                    <img
                      src={lArrow}
                      alt=""
                      className="left-arrow"
                      onClick={(e) => scrollToImage("prev", e)}
                    />
                    <img
                      src={rArrow}
                      alt=""
                      className="right-arrow"
                      onClick={(e) => scrollToImage("next", e)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </AboutCont>
    </>
  );
}

export default Nosotros;

const AboutCont = styled.div`
  margin-top: 50px;
  padding: 20px 20px 200px;
  margin-bottom: 60px;

  .about-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 45px;
    margin-bottom: -30px;
  }

  .left-arrow,
  .right-arrow {
    width: 5%;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .left-arrow {
    left: 0;
  }

  .right-arrow {
    right: 0;
  }

  @media (max-width: 768px) {
    .left-arrow,
    .right-arrow {
      width: 9%;
    }
  }
`;
