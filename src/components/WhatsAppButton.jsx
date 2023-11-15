import React from "react";
import styled from "styled-components";
import icono from "../assets/Whatsapp-Icono.png";

function WhatsAppButton() {
  const phoneNumer = "18095555555";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumer}`, "_blank");
  };

  return (
    <>
      <FloatButton>
        <div className="button-container">
          <div className="" onClick={handleClick}>
            <img src={icono} className="button" alt="" />
          </div>
        </div>
      </FloatButton>
    </>
  );
}

export default WhatsAppButton;

const FloatButton = styled.div`
  .button-container {
    background-color: #2e6329;
    border: 1px solid #fff;
    position: fixed;
    z-index: 999;
    border-radius: 50%;
    bottom: 20px;
    right: 25px;
    padding: 10px;
    transition: ease 0.3s;
    animation: buttonEffect 1.2s infinite;
  }
  .button-container:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
  .button {
    width: 50px;
    transition: ease 1s;
  }
  @keyframes buttonEffect {
    0% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.85);
    }
    100% {
      box-shadow: 0 0 0 25px rgba(0, 0, 0, 0);
    }
  }
`;
