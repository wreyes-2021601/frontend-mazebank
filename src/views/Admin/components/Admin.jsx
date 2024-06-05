import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AdminButtons from './AdminButtons'
import Footer from '../../../elements/Footer'
import { AuthContext } from '../../../auth'

const Admin = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">   
                        <div className="container overflow-hidden">
                            <div className="row gx-5">
                                <div className="col">
                                    <div className=" p-3" >
                                        <h2 className="mt-4">Cuenta de Administrador</h2>
                                        <hr />
                                        <div className="user-details mt-4">
                                            <p className="text-start"><strong>User: {user.name}</strong> </p>
                                            <p className="text-start"><strong>Correo Electrónico: {user.email}</strong> </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="p-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container overflow-hidden">
                            <div className="row gx-5">
                                <div className="col">
                                    <div id="carouselExampleDark" className="carousel carousel-dark slide">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-bs-interval="10000">
                                                <img src="https://i.ytimg.com/vi/fsf01xD8sjg/maxresdefault.jpg" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/9/9f/GTAV.PS4.1080P.1232.jpg" className="d-block w-100" alt="..." />
                                                <div className="carousel-caption d-none d-md-block">
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://i1.modland.net/i/632ec5b944432/1507426285_enb_2017_10_02_22_43_20_84-lg_modland.webp" className="d-block w-100" alt="..." />
                                                <div className="carousel-caption d-none d-md-block">
                                                </div>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
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

export default Admin
