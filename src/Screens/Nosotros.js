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
      "https://previews.dropbox.com/p/thumb/ACGxVzjsmUinE651hsRs2lwRBh62nPTc-Wp7qGwgOuvby6U8LRMTKQXV_FRnKIMh6Qn-0-n-EhouwNggFc1733w22itil6pW_sp8tmTu57feUYtrQtMQHHbSMxdLLgCfinrbXW0gxzQ6fFC1EYyaDAVD9Ua_FR4lj_OZb-pF03-HGByXVqSk5jO-azc4q0Qb4ypidFDQH-05iG-bTOQtL84d2hhNaEluGzm9PS6c5h66VjBF8L6EhHMlcyWlfLgDcDJXYWszRSBc9UzXKIpuueLF-FlyCFlQgMmN889yT-FBXyH_iPg2vLWbq2TZrCF_AmxP2ePiPqdawQIuQfJorAxF/p.jpeg",
  },
  {
    id: 2,
    title: "Visión",
    description:
      "Ser reconocidos como líderes en el desarrollo de sistemas de escritorio especializados en soporte financiero, destacándonos por nuestra innovación, calidad y compromiso con el éxito de nuestros clientes. Buscamos ser la opción preferida para aquellos que buscan optimizar sus procesos financieros a través de la tecnología.",
    image:
      "https://previews.dropbox.com/p/thumb/ACGAsjSvDITISPKHDOWxcQRqfeepfS-tjE8z3DrIAcaw3pFpW7OOP7lK9Pa6Zljfk0co10Sw6UM4j4w7rgl1k1xdN-AgJvlGxLzWfQvrSCdrTZIgTREmOS82A9wDqNUeEtr0O8-k61mGBxui7vjf_qCaeEA15Y0GiQEVglFZnCBO3AKJDjg5GWp1an-ox_25ljDuG1vXO-_g-Npw76BQtI7A2Qb03aQ60-Zihv9Ir0vUZUSkNrD0OhwfE8EmwB4gy0Mm_a80KdsvVTwOGYUlD1gOzFzaNpyLTHug8qxQUnInkcH3UEa-qY_VvK0Pk8jArYpqrz54LWPA_bPtgBWp9mMt/p.jpeg",
  },
  {
    id: 3,
    title: "Valores",
    description:
      "Buscamos la excelencia, actuamos con integridad, fomentamos la innovación, nos comprometemos con el éxito de nuestros clientes, y practicamos la empatía en cada interacción. Estos valores fundamentales guían nuestro trabajo diario y definen nuestra relación con clientes y socios.",
    image:
      "https://previews.dropbox.com/p/thumb/ACH-inSzhGeJx69wEVZ6W3xlalqSBl7ZkhQOhx2lJFmBKyTUpOYKMDKYSEvg43uABIhT5ER1WoJVLWGVoAXeuf7oP76noIyWTyE24lHIsqUGgBimjpoqBIOwwAOi4qHJYifHqmsJFH3Ae5cnTggfLXVH1Zdmr4uhIXXh7VjVKpgNDtIcuf-HBOvOpNMArVGBbVm87t3qlxHuGcg3M5faKuFaNWJEI53akNkMcPou-KKVGwaUGunOHj3MGarboy2rjw_NypMJzD8BrZcXm1cFClsrjd2CFmrkLM1RnuA8CfZmDk1pJwDK6oTRsYZueAW5NTmW8Fc6dCO1jhdqIINqmGxU/p.jpeg",
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
