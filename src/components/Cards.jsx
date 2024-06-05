import React from 'react'
import TARJETA from '../IMG/tarjeta.jfif'
import PRESTAMO from '../IMG/prestamo.jfif'
import CUENTA from '../IMG/cuenta.jfif'
import SEGURO from '../IMG/seguro.jfif'

export const Cards = () => {
    return (
        <>
            <div className='card-container'>

                <div className="card" >
                    <img src={TARJETA} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Quiero una tarjeta</h5>
                    </div>
                </div>
                <div className="card" >
                    <img src={PRESTAMO} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Necesito un prestamo</h5>
                    </div>
                </div>
                <div className="card" >
                    <img src={CUENTA} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Quiero una cuenta</h5>
                    </div>
                </div>
                    <div className="card" >
                        <img src={SEGURO} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Necesito un préstamo</h5>
                        </div>
                </div>
            </div>
        </>
    )
}
