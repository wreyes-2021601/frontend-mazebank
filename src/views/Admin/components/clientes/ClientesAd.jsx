import React from 'react'
import Admin from '../Admin'
import ClienteCard from './ClienteCard'

const ClientesAd = () => {
  return (
    <div>
      <Admin />
      <div>
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
          </div>
        </nav>
      </div>
      
      <ClienteCard />
    </div>
  )
}

export default ClientesAd
