import React from 'react'

import '../../../../resources/styles/estilosUser.css';

const ClienteCard = () => {
  return (
    <>
      <img src="https://cdn-icons-png.flaticon.com/128/921/921347.png" class="card-img-top img-small " alt="..."/>
            <div class="card-body">
                <h5 class="card-title"><strong>Walter Reyes</strong></h5>
                <p class="card-text"><strong>No. Cuenta:</strong> 28945374 <br/> <strong>No. Telefono:</strong> 53650592 <br/>
                    <strong> Dpi:</strong> 2387623874234 <br/> <strong>Departamento:</strong> Guatemala <br/><strong> Direccion:</strong> Zona 14
                 </p>
                <a href="#" class="btn btn-secondary">Editar</a>
            </div>
       
    </>
  )
}

export default ClienteCard
