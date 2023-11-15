import React from "react";
import styled from "styled-components";

function Inicio() {
  return (
    <>
      <InicioCont>
        <h1 id="inicio">
          Preparados para impulsar juntos
          <br />
          el crecimiento de tu negocio
        </h1>
        <p>
          Brindamos a nuestros clientes un sistema de gestión financiera
          <br />
          de alta calidad y seguridad.
        </p>
        <a className="button btn btn-primary btn-lg" href="#contact">
          Contactanos
        </a>
      </InicioCont>
    </>
  );
}

export default Inicio;

const InicioCont = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 250px;
  align-items: center;
  text-align: center;

  h1 {
    color: white;
    padding-top: 100px;
    font-weight: 700;
  }
  p {
    color: white;
    margin-top: -5px;
    font-style: italic;
  }

  .button {
    color: white;
    text-align: center;
    padding: 10px 20px 15px;
    text-decoration: none;
    font-weight: 600;
    transition: 0.5s;
    margin-top: 15px;
  }
  .button:hover {
    padding: 15px;
    cursor: pointer;
  }
`;
