import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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

    {/* Botón hamburguesa */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Contenido que se colapsa */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto d-flex gap-4">
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/">Inicio 🏠</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/products">Productos 🛒</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/categorias">Categorías 📂</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
