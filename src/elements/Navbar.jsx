import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Maze Bank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            <a className="nav-link" href="/cambio">Tipo de Cambio</a>
                            <a className="nav-link" href="/cliente">User</a>
                            <a className="nav-link" href="/admin">Admin</a>
                            <a className="nav-link" href="/sadmin">Super Admin</a>
                            <a className="nav-link" href="/login">Login</a>
                            <a className="nav-link" href="#">Logout</a>
                        </div>  
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
