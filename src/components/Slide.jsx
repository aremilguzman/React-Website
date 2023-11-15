import React from "react";
import styled from "styled-components";

function Slide({ title, description, imgURL }) {
  return (
    <>
      <SlideCont>
        {/*Cuerpo de los sliders*/}
        <div className="about-body about-body-show">
          <div className="about-texts">
            <h3 className="subtitle">{title}</h3>
            <p className="description">{description}</p>
          </div>
          <figure className="about-picture">
            <img src={imgURL} className="about-img" alt="" />
          </figure>
        </div>
      </SlideCont>
    </>
  );
}

export default Slide;

const SlideCont = styled.div`
  .about-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }
  .about-body-show {
    pointer-events: unset;
    opacity: 1;
    transition: opacity 1.5s ease-in-out;
  }
  .about-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
  .about-texts {
    max-width: 700px;
    color: white;
  }
  h3 {
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
  }
  p {
    font-weight: 400;
    text-align: justify;
  }
  @media (max-width: 768px) {
    .about-img {
      width: 80px;
      height: 80px;
    }

    .about-texts {
      max-width: 40vw;
    }
    p {
      text-align: start;
    }
  }
`;
