import React from 'react'
import { Link } from 'react-router-dom'

const AdminButtons = () => {
    return (
        <>

            <hr className="container" />

            <div className="container container-fluid d-flex flex-column flex-grow-1">
                <div className="row">
                    <div className="card mb-3 col-sm-6">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/1605/1605350.png" className="img-small" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <Link to="/clientes">
                                        <h5 className="card-title">Clientes</h5>

                                    </Link>
                                    <p className="card-text">Ver clientes dentro del sistema</p>
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

                                    <Link to="/htransaccionesad">

                                        <h5 className="card-title">Historial de cuentas</h5>
                                    </Link>

                                    <p className="card-text">Ver transacciones de las cuentas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container container-fluid d-flex flex-column flex-grow-1">
                <div className="row">
                    <div class="card mb-3 col-sm-6">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/1149/1149576.png" className="img-small" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <Link to="/agregar">

                                        <h5 className="card-title">Añadir</h5>
                                    </Link>

                                    <p className="card-text">Añadir Clientes al sistema</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 col-sm-6">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/5676/5676146.png" class="img-small" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <Link to="/eliminar">

                                        <h5 class="card-title">Eliminar Clientes</h5>
                                    </Link>

                                    <p class="card-text">Elimina Clientes y cuentas del</p>
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
                                <img src="https://cdn-icons-png.flaticon.com/128/1063/1063809.png" class="img-small" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <Link to="/cuentasad">

                                        <h5 class="card-title">Mi cuenta</h5>
                                    </Link>

                                    <p class="card-text">Personaliza tu cuenta</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 col-sm-6">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/1087/1087080.png" class="img-small" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <Link to="/tarjetas">

                                        <h5 class="card-title">Tarjetas y Asociaciones</h5>
                                    </Link>

                                    <p class="card-text">Administra las tarjetas y asociaciones de los clientes</p>
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

export default AdminButtons
