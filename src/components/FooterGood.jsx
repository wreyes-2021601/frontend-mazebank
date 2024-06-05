import React from 'react'
import MAZEBANK from "../IMG/MazeBankLogo.webp"

export const Footer = () => {
  return (
    <>
      <div id='footer' className='container'>
        <div className='row'>
          <div id='footer-content' className='col'>
            <h1 id='titulo-footer'>Banca</h1>
          <p>Personas <br /> Privada <br /> Empresas <br /> Seguro MazeBank <br /><br /></p> 
            <img id='footer-img' src={MAZEBANK}/> <br /> <br /> <br />
          </div>
          <div className='col'>
            <h1 id='titulo-footer'>Acceso rapidos  </h1>
            <p>Mazevirtual Personas <br /> Mazeapp Personas <br /> Mazempresas <br />Preguntas frecuentes</p>
          </div>
          <div className='col'>
            <h1 id='titulo-footer'>Informacion legal</h1>
            <p>CRS <br /> FATCA <br /> Politicas de privacidad <br />Informacion Corporativa</p>
          </div>
          <div className='col'>
            <h1 id='titulo-footer'>MazeBank</h1>
            <p>Acerca de nostros <br /> Trabaja con nosotros <br /> Servicios <br />Agencias <br /> Eventos</p>
          </div>
          <div className='col'>
            <h1 id='titulo-footer'>Contáctanos </h1>
            <p>Ciudad de Guatemala <br />Telefono: +502 2210 2210<br /> Mazempresas <br />Contactanos</p>
          </div>
        </div>
      </div>
    </>
  )
}
