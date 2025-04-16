import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <>
    <nav className="navbar py-3" style={{ backgroundColor: '#F5F5F5' }}>
  <div className="container d-flex justify-content-between align-items-center">
    <a className="navbar-brand text-dark d-flex align-items-center 'w-bold" href="#">
      <img
        src="/imagenes/paw.png"
        alt="Caninos SABS"
        width="50"
        className="me-2"
      />
      Canino
      <span className='w-bold text-warning'>SABS</span>
    </a>
    <div className="d-flex flex-row">
      <ul className="navbar-nav d-flex flex-row gap-4">
        <li className="nav-item"><Link className="nav-link text-dark" to='/'>Inicio 🏠</Link></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">Nosotros 👤</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">Productos 🛒</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">Servicios 💼</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">Categorías 📂</a></li>
        <li className="nav-item"><Link className="nav-link text-dark" to='/login'>Login</Link></li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
