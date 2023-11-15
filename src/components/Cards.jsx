import React from "react";
import styled from "styled-components";

function Cards({ tittle, imageURL, description }) {
  return (
    // Cuerpo de tomara cada tarjeta que se agregue en servicios.
    <CardStyle>
      <div className="card">
        <img src={imageURL} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </CardStyle>
  );
}

export default Cards;

const CardStyle = styled.div`
  .card {
    width: 13rem;
    height: 18rem;
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.8);
  }
  .card:hover {
    box-shadow: 5px 10px 20px 1px rgba(255, 255, 255, 0.3);
    transition: all 0.4s linear;
  }
  img {
    height: 100px;
  }
  h5 {
    font-weight: 00;
  }
  p {
    font-size: small;
    text-align: justify;
    font-weight: 500;
  }
`;
