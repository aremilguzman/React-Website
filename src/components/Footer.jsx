import React from 'react'
import styled from 'styled-components'


function Footer() {
  return (
    <>
    <FootCont>
        <footer>
            <div className='waves'>
                <div className='wave' id='wave1'></div>
                <div className='wave' id='wave2'></div>
                <div className='wave' id='wave3'></div>
                <div className='wave' id='wave4'></div>
            </div>
            <div className='footer-logo'>
                <img src="https://previews.dropbox.com/p/thumb/ACEgJixovikyM9BoGyJXVNWOjrweR7Ga0FLL4MfIPqVdnXRMtL9kV1YOpV97ihYyhE5OcOqTFxWdbjvmJQbK_SAdJkB4n9Fdx-RhwqJCJ5wY7vrZo1AIrbUIAv4Js-kXLpbnsIt6yMIjfpP9M_JIQpyApOGUUhBDBJkE2eCwDkiw367Oz_39M1_1Bs_DfWg286YM_ao6EejTsheNmHcMR9lvnHrYblPtrfdBgYpCO04U2iYTitiCsxjAQbex19DlexSZx9gIE5Cyw_lOE3WPQQISbfI-sTGWxV3EJWEb_anlqDwDDYzoubZlX-MGGPwG-bhZ1AKh1yr53360ERomAddP/p.png" alt="" />
            </div>
            <p className='rnc'>RNC: 225-0004338-9 </p>
            <ul className='menu'>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contacto">Contactanos</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
            </ul>
            <p className='copyright'>Copyright © Fullpos Logic. All Rights Reserved</p>
            </footer>
    </FootCont>    
    </>
  )
}

export default Footer

const FootCont = styled.footer`
    footer {
        position:relative;
        width: 100%;
        background-color: #333;
        min-height: 100px;
        padding: 20px 50px ;
        display: flex;
        justify-content: center;
        align-items: center ;
        flex-direction: column;
        
    } 
    .footer-logo img {
        width: 90px;
        height: 100px;
    }
    .rnc {
        color: #a1a1a1;
        margin-top: 10px;
        text-align: center;
    }
    .menu {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        flex-wrap: wrap;  
    }
    .menu li {
        list-style: none;
    }
    .menu li a {
        font-size: 20px;
        color: white;
        margin: 0 10px;
        display: inline-block;
        transition: 0.5s;
        text-decoration: none;
        opacity: 0.75;
    }
    .menu li a:hover {
        color: rgba(255, 215, 0, 0.7);
        opacity: 1;
    }
    .copyright  {
        color: #a1a1a1;
        margin-top: 10px;
        font-size: smaller;
    }
    footer .wave {
        position: absolute;
        top: -100px;
        left: 0;
        width: 100%;
        height: 100px;
        background: url("https://previews.dropbox.com/p/thumb/ACH85ZfLPM_nfHhVTvew-eI_pa5VvfRyzanqzqi5R011_sINvV8Y45fth3bO07T5ftccdMyBqb0g8a4BW8JHfp4nnlEAvdNaxk8HddKLEyu00ek6P7I01Hgg0Rzrh4GQZifDXZX8uHJeNxK_CsqGu4hDzu2K12ST_hqhsDYLyQWTf52hfdfsFGHxAuZW0ht8vhZkEZ0OBKItI0o3jCa0zePr978s_CPVpSnuJ4MZz-x2pPeFolMao-UtIt8oK8yTSmkcwGexg7GXbO-YTPxXcel9-xQmluSQmWzL6Lcu88GBWjiHVOZgxHt9cqI9AfjZtlNb8xE0x7p4FTbkgz4M1MRe/p.png") repeat-x;
        background-size: 1000px 100px;
    }
    footer .wave#wave1 {
        z-index: 1000;
        opacity: 1;
        bottom: 0;
        animation: animateWaves 4s linear infinite;
    }
    footer .wave#wave2 {
        z-index: 999;
        opacity: 0.5;
        bottom: 10px;
        animation: animateWaves2 4s linear infinite;
    }
    footer .wave#wave3 {
        z-index: 1000;
        opacity: 0.2;
        bottom: 15px;
        animation: animateWaves 3s linear infinite;
    }
    footer .wave#wave4 {
        z-index: 999;
        opacity: 0.7;
        bottom: 20px;
        animation: animateWaves2 3s linear infinite;
    }
    @keyframes animateWaves {
        0% {
        background-position-x: 1000px;
        }
        100% {
        background-position-x: 0px;
        }
    }
    @keyframes animateWaves2 {
        0% {
        background-position-x: 0px;
        }
        100% {
        background-position-x: 1000px;
        }
    }
@media(max-width: 700px) {
    .menu {
    flex-direction: column;
    margin-right: 35px;
    
    }
    .menu li a{
        width: 100%;
        text-align: center;
        margin: 5px;
    }
    .copyright {
        text-align: center;
    }
}
`