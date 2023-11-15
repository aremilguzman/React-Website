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
      "https://previews.dropbox.com/p/thumb/ACHe2W-QxVgQN3FxbdIdtQHavARPsqfR1Tzvr6TUuadvZoLQlwhRu-VsnuGj-1s3onl-onN1srVYDnvxoVeE8MRpQ51BqM_qcLzcHUCjG5ZawlXeodYdxC-Qzhm_J6_IxEluDApP3N-RPV3DFyJys2zPDuki6dC7hTlhTz5GWVoI136HCj2Zo1O2qjDty5gTbRL5Q_raPi3M5_XmI5ax1gDp2ing5CG83c0QMmm4GkP8t0QeHD_kCDMQ4EXNaPhjkSLc23HrI4c_4V_xMN0JWXDy8lnWMAFR-eGpZV7XCB-aOWitmfCaUuUJy-IC2a2KJyF_UnBWa9rkV6BR39xXFaMb/p.png",
  },
  {
    id: 2,
    tittle: "Inventario",
    description:
      "Con nuestro sistema, puedes realizar un seguimiento en tiempo real de tu inventario, desde la recepción de productos hasta la venta final.",
    image:
      "https://previews.dropbox.com/p/thumb/ACEOac6eO-YnR5Gt-N1xf-bd5HzFF6bWE02gHZWNb0xawYwsmT2ZsFR-kCXRoprc4scgGBncUt-g0wZKo6t_831udmgXKmcMsBwjSJfAOcpPqQFrgRYOWEo3CHLUKenfINx4-HW4GUGGVjf_4OzS2cF5rxv1YRHCKekUzNqw82Nbx1DOCqIPHIKRlvVSWvEHTciCxjSYDlKf3fgP3Rwu5iDOiKu4jVeOPr4_ajO0SzdnwOAYyPjm9pcm4bl3DNKTShQZORiO1cotDzcGZc8lO-j18QJUR7ZBbfiwd4dS3UIoSs5X0NhSrIXss-8v3ivwchn0460NJIyYvQttdJ-J4VVQ/p.png",
  },
  {
    id: 3,
    tittle: "Cuentas por cobrar/pagar",
    description:
      "Plataforma integral para el seguimiento y la facturación de cuentas pendientes, y control eficiente de tus obligaciones financieras.",
    image:
      "https://previews.dropbox.com/p/thumb/ACHnk5XFpMwXyi3RecBBgVefZ2Ib6aWqfAusTGuJBQdgpCV6yt8CQrNMYlGInt40M0Sui4j5tewScmjQL1v9SkzU6cgzQEF18EOkvt4C2T090ssqxh2lSFZ1p0AtPaR-CYiGx3tBr2ljxw7NJbdqzMlIF9i7AwrGKDSDHbzKAv8K6g9ZNPp4v_x3_J41eQia_SIdDyT-7XTusqGYtClyiBfS9dPlaNA8O3NcyvcViIHsW-0GMkNAnIRtRe8IE1IgW7oMr1KXu3UBydEgmH2YZTlnj4x4lVM89_irlTibm6HyH2TpM8xY5Y1l7MRFf4nHSh4s7hbYibSeaX6M_pZtu1Hg/p.jpeg",
  },
  {
    id: 4,
    tittle: "Contabilidad",
    description:
      "Facilitamos la conciliación bancaria, seguimiento de ingresos y egresos, y cumplimiento fiscal.",
    image:
      "https://previews.dropbox.com/p/thumb/ACGd3KyuQs_Rx9H5hVYL_1YQXzivHA5pAVK6hrFmMeFKUq-hD3JcHjkjVP-vO1PN2UP0fYgcJpcyUNlxRIFvCxL40vfjByPLdxQeUzEqe39YOoQkjvwgs_d0nhNvfrmwOu-_LW0HSsY2mgkUnbSSRY7VSr4Y9cxivDXOzfZ6So2X0LXXeS8FIF4hNq-pOAT2qdMcglaNe_dKQYeow2i8Ig4WV12q5TJ06vH-rPO-hcJXMxRPznkQQPy-MsE5jm0nurWv96ANbURND43BmuOVIVYMQ7xU_41pZaUdIGwrQZGihSvY6-Tyq_hK-TqqPEb8AUlG4BblRgrFgrKK0umAW0rI/p.png",
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
