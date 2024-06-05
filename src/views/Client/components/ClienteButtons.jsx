import React from 'react'

const ClienteButtons = () => {
    return (
        <>
            <div className="container container-fluid d-flex flex-column flex-grow-1">
                <div className="row">
                    <div class="card mb-3 col-sm-6">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/4222/4222025.png" class="img-small" alt="..." />
                            </div>


                            <div class="col-md-8">
                                <div class="card-body">
                                    <Link to="transacciones">
                                        <h5 class="card-title">Transacciones</h5>
                                    </Link>
                                    <p class="card-text">Hacer una transaccion o una tranferencia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 col-sm-6">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/4208/4208408.png" class="img-small" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <Link to="favoritos"> 
                                        <h5 class="card-title">Favoritos</h5>
                                    </Link>
                                    <p class="card-text">Acá se muestran tus cuentas favoritas</p>
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
                                <img src="https://cdn-icons-png.flaticon.com/128/3732/3732667.png" class="img-small" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <Link to="pagos">
                                        <h5 class="card-title">Pago de servicios</h5>
                                    </Link>
                                    <p class="card-text">Acá pagas tus</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 col-sm-6">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/675/675780.png" class="img-small" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <Link to="configuracion">
                                        <h5 class="card-title">Configuración</h5>
                                    </Link>
                                    <p class="card-text">Personaliza y configura tu cuenta tu cuenta</p>
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
                                    <Link to="micuenta">
                                        <h5 class="card-title">Mi cuenta</h5>
                                    </Link>
                                    <p class="card-text">Mira más detalles de tu cuenta como tu saldo actual, numero de cuenta. Añade más cuentas a tus favs. Banca Virtual</p>
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
                                    <Link to="tarjetas">
                                        <h5 class="card-title">Tarjetas y Asociaciones</h5>
                                    </Link>
                                    <p class="card-text">Administra tus tarjetas, asociaciones y cosas ligadas a tu cuenta como prestamos, pagos, financiamientos, etc</p>
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
                                <img src="https://cdn-icons-png.flaticon.com/128/1584/1584831.png" class="img-small" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <Link to="historialc">
                                        <h5 class="card-title">Historial</h5>
                                    </Link>
                                    <p class="card-text">Acá se muestra el historial de tranferencias y pagos hechas por la Cuenta</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 col-sm-6">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/4712/4712882.png" class="img-small" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <Link to="reportar">
                                        <h5 class="card-title">Reportar un problema</h5>
                                    </Link>
                                    <p class="card-text">Reportar problemas con tu cuenta o solicitar ayuda</p>
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

export default ClienteButtons
