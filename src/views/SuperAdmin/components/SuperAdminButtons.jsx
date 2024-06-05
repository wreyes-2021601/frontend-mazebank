import React from 'react'
import { Link } from 'react-router-dom'

const SuperAdminButtons = () => {
    return (
        <>
            <div className="container container-fluid d-flex flex-column flex-grow-1">
                <div className="row">
                    <div className="card mb-3 col-sm-6">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/1605/1605350.png" className="img-small" alt="..." />
                            </div>
                            <div className="col-md-8">


                                <div className="card-body">
                                    <Link to="/admins">

                                        <h5 className="card-title">Administradores</h5>
                                    </Link>
                                    <p className="card-text">Ver administradores dentro del sistema</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 col-sm-6">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/6478/6478301.png" className="img-small" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <Link to="/hcuentas">

                                        <h5 className="card-title">Historial de cuentas</h5>
                                    </Link>
                                    <p className="card-text">Ver actividades de las cuentas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container container-fluid d-flex flex-column flex-grow-1">
                <div className="row">
                    <div class="card mb-3 col-sm-6">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/1149/1149576.png" className="img-small" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <Link to="agregarAd">

                                        <h5 class="card-title">Añadir</h5>
                                    </Link>
                                    <p class="card-text">Añadir Administradores al sistema</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 col-sm-6">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/5676/5676146.png" className="img-small" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <Link to="eliminarAd">
                                        <h5 class="card-title">Eliminar Clientes</h5>
                                    </Link>
                                    <p class="card-text">Elimina administradores y cuentas del sistema</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container container-fluid d-flex flex-column flex-grow-1">
                <div className="row">
                    <div className="card mb-3 col-sm-6">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/1063/1063809.png" className="img-small" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <Link to="mySAD">
                                        <h5 className="card-title">Mi cuenta</h5>
                                    </Link>
                                    <p className="card-text">Personaliza tu cuenta</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 col-sm-6">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/8964/8964949.png" className="img-small" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <Link to="rolesycuentas">
                                    <h5 className="card-title">Roles y cuentas</h5>
                                    </Link >
                                    <p className="card-text">Administra las cuentas, permisos y roles dentro dentro del sistema</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />


        </>
    )
}

export default SuperAdminButtons
