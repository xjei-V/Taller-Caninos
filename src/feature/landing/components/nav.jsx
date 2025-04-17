import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar bg-light">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand text-dark d-flex align-items-center w-bold" href="#">
            <img
              src="/imagenes/paw.png"
              alt="Caninos SABS"
              width="50"
              className="me-2"
            />
            Canino <span className="w-bold text-warning">SABS</span>
          </a>
          <ul className="navbar-nav d-flex flex-row gap-4">
            <li className="nav-item"><Link className="nav-link text-dark" to="/">Inicio 🏠</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/products">Productos 🛒</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to='/categorias'>Categorías 📂</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>


    </>
  )
}
