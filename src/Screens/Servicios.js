import React from "react";
import styled from "styled-components";
import Cards from "../components/Cards";

const cards = [
  {
    id: 1,
    tittle: "Facturación",
    description:
      "Optimiza el proceso de cobro y gestión financiera. Con una interfaz fácil de usar, facilitamos la emisión de facturas y tickets de venta.",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/0a8ft014w0i7j26dfg8pb/facturacion.png?rlkey=rjt5a82jcihpcdwfabitcjz34&dl=0",
  },
  {
    id: 2,
    tittle: "Inventario",
    description:
      "Con nuestro sistema, puedes realizar un seguimiento en tiempo real de tu inventario, desde la recepción de productos hasta la venta final.",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/5fc5qfv3u5mipt5decljl/mal-control-inventarios.webp?rlkey=aapn7djbaem6e8h21svx34xp5&dl=0",
  },
  {
    id: 3,
    tittle: "Cuentas por cobrar/pagar",
    description:
      "Plataforma integral para el seguimiento y la facturación de cuentas pendientes, y control eficiente de tus obligaciones financieras.",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/ffl9x5lzm0zoe4icbah55/activos_fijos_software_niif.png?rlkey=y4piu22e0txtn5gwrnsz97x67&dl=0",
  },
  {
    id: 4,
    tittle: "Contabilidad",
    description:
      "Facilitamos la conciliación bancaria, seguimiento de ingresos y egresos, y cumplimiento fiscal.",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/uncxsomypryt36mt1ivxd/descarga.jpg?rlkey=9zqykwz40jw3q7pel5ovmpebq&dl=0",
  },
];

function Servicios() {
  return (
    <>
      <ServiceCont>
        <h2 id="servicios">Servicios del Sistema</h2>
        <div className="container d-flex justify-content-center align-items-center mt-4">
          <div className="row justify-content-center">
            {/* Se recorre el arreglo con map por id y se extraen las propiedades para reflejarlas en el cuerpo del card.*/}
            {cards.map((card) => (
              <div
                className="col-md-3 mb-3 d-flex justify-content-center"
                key={card.id}
              >
                <Cards
                  tittle={card.tittle}
                  imageURL={card.image}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </div>
      </ServiceCont>
    </>
  );
}

export default Servicios;

const ServiceCont = styled.div`
  color: white;
  margin-top: 50px;
  padding: 20px 20px 250px;
  text-align: center;

  h2 {
    font-weight: 800;
  }
`;
