import React, { useState } from "react";
import styled from "styled-components";
import BurguerMenu from "./BurguerMenu";

function Navbar() {
  // Hook para guardar el estado de los botones (activo/no activo).
  const [clicked, setClicked] = useState(false);
  // Funcion para cambiar el estado de los botones, de false a true y viceversa.
  const handleClick = () => {
    //condicional para que no se abra el menu hamburg. al presionar algun elementos de nav. en tamaño escritorio.
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      setClicked(!clicked);
    } else {
    }
  };
  return (
    <>
      <NavContainer>
        <img
          src="https://previews.dropbox.com/p/thumb/ACGw1_2UIUX1LKKhFsdmO5WuSiZrDd0nPZFno6VpW56dnLUp9LxuAxLckitDJNtwgEuNLOkGwKqe2X-qOrnWfmkQMs-juaM75-bONfOrSlrovFLjelpVlGZmEjlfG5JKhcGUM20pUKuwlRozF_vcC538nW3j4jlBmO0xS0ySZ5Hk-ps_auRYH54ha9on43rMjwk0qAMZEWpd6DVNBn5M-SWJq7NJAhVTEnCE86xBYt5yaj3xRmB8BLYD61ElhXbnBFGIJIxff3DK2F955yCkRvEQDzRXo_HOlPy6czURXEYWPyu-wTbC8xrUmzVhAbmn8RrVHLBxMkGzFHLLAl33CBSF/p.png"
          alt=""
        />
        {/* asignacion de clase "clicked" para asignarle valor active cuando su estado sea true y mostrar los elementos de nav.*/}
        <div className={`links ${clicked ? "active" : ""}`}>
          <a onClick={handleClick} href="#inicio">
            Inicio
          </a>
          <a onClick={handleClick} href="#servicios">
            Servicios
          </a>
          <a onClick={handleClick} href="#contacto">
            Contactanos
          </a>
          <a onClick={handleClick} href="#nosotros">
            Nosotros
          </a>
        </div>
        <div className="burguer">
          {/*Props para abrir y cerrar boton hamburg.*/}
          <BurguerMenu clicked={clicked} handleClick={handleClick} />
        </div>
        {/* div de styled para crear background del menu hamburg. */}
        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  img {
    width: 200px;
  }

  a {
    color: white;
    text-decoration: none;
    margin-right: 25px;
    font-size: 20px !important;
  }
  .links a:hover {
    color: rgba(255, 215, 0, 0.7);
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;

  // animacion de elementos de navegacion (parezca estan entrando).
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    //diseño elementos de nav. en menu hamburg.
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }

  // llevar elementos de nav. al centro al pres. menu hamburg.
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
    a:hover {
      color: rgba(255, 215, 0, 0.7);
    }
  }

  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
const BgDiv = styled.div`
  position: absolute;
  background-color: #222;
  top: -700px;
  left: -2000px;
  width: 100%;
  height: 100%;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
