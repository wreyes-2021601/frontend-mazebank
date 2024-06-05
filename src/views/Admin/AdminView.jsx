import React from 'react'
import Admin from './components/Admin'
import AdminButtons from './components/AdminButtons'
import Footer from '../../elements/Footer'

const AdminView = () => {
  return (
    <div>
      <Admin/>
      <AdminButtons/>
      <Footer/>
    </div>
  )
}

export default AdminView
