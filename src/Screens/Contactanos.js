import React from "react";
import styled from "styled-components";

function Contactanos() {
  return (
    <>
      <ContactCont>
        <h2>
          ¿Requieres de nuestros servicios
          <br />o mas información?
        </h2>
        <div className="container mt-4" id="contacto">
          <form
            action="https://formsubmit.co/example@gmail.com"
            method="POST"
            className="d-flex flex-column align-items-center"
          >
            <div className="form-group col-12 col-md-6">
              <label
                htmlFor="YourName"
                className="form-label mt-4 text-start fw-semibold"
              >
                Ingrese su nombre
              </label>
              <input
                type="text"
                className="form-control mb-1 fst-italic"
                name="name"
                placeholder="Nombre y Apellido"
                id="YourName"
              />
            </div>
            <div className="form-group col-12 col-md-6">
              <label
                htmlFor="YourEmail"
                className="form-label mt-4 text-start fw-semibold"
              >
                Ingrese su Email
              </label>
              <input
                type="email"
                className="form-control mb-1 fst-italic"
                name="email"
                placeholder="email@dominio.com"
                id="YourEmail"
              />
            </div>
            <div className="form-group col-12 col-md-6">
              <label
                htmlFor="YourContact"
                className="form-label mt-4 text-start fw-semibold"
              >
                Ingrese su numero de contacto
              </label>
              <input
                type="tel"
                className="form-control mb-1 fst-italic"
                name="telefono"
                placeholder="809-555-5555"
                id="YourContact"
              />
            </div>
            <div className="form-group col-12 col-md-6">
              <label
                htmlFor="YourShop"
                className="form-label mt-4 text-start fw-semibold"
              >
                Nombre de su negocio o empresa
              </label>
              <input
                type="text"
                className="form-control mb-1 fst-italic"
                name="negocio"
                placeholder="Negocio o empresa"
                id="YourShop"
              />
            </div>
            <div className="form-group col-12 col-md-6">
              <label
                htmlFor="Comment"
                className="form-label mt-4 text-start fw-semibold"
              >
                Comentario o solicitud
              </label>
              <textarea
                className="form-control mb-1 fst-italic"
                name="comments"
                id="Comment"
                placeholder="Ej: requiero sus servicios / información"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              Enviar
            </button>
          </form>
        </div>
      </ContactCont>
    </>
  );
}

export default Contactanos;

const ContactCont = styled.div`
  margin-top: -15px;
  padding: 20px 20px 50px;
  background-color: white;

  h2 {
    font-weight: 800;
    text-align: center;
  }
  .form-control {
    border: 2px solid #222;
    border-radius: 8px;
    padding: 8px;
  }
`;
