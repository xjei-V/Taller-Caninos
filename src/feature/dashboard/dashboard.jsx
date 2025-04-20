import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

export const Dashboard = () => {

const {logout} =useContext(AuthContext)

const navegate=useNavigate()

const handleLogout = () => {
  logout()
  navegate('/login')
}


  
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      {/* Barra superior */}
      <nav className="navbar navbar-dark bg-primary px-4">
        <span className="navbar-brand mb-0 h1">Dashboard</span>
        <button onClick={handleLogout} className="btn btn-outline-light">Salir</button>
      </nav>

      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <aside className="bg-dark text-white p-3" style={{ width: '250px' }}>
          <h4 className="text-center mb-4">Dashboard</h4>
          <ul className="nav flex-column gap-3">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admin">
                <i className="bi bi-house-door-fill me-2"></i>Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admin/usuarios">
                <i className="bi bi-people-fill me-2"></i>Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admin/products_dash">
                <i className="bi bi-cart-fill me-2"></i>Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admin/companies">
                <i className="bi bi-building me-2"></i>Compañías
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admin/roles">
                <i className="bi bi-diagram-3-fill me-2"></i>Roles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admin/categories_dash">
                <i className="bi bi-tags-fill me-2"></i>Categorías
              </Link>
            </li>
          </ul>
        </aside>

        {/* Contenido principal */}
        <main className="flex-grow-1 bg-light p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}