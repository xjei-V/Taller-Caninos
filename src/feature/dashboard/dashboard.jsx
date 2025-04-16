import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {


  return (
    <>

    <div className='container-fluid'> 

        <div className='row'>
            <div className='col-md-3 vh-100 bg-dark text-white'>

                <h2 className='fw-bold text-center mt-3'>Dashboard</h2>
                <ul className='navbar-nav d-flex flex-column gap-3 text-white py-3 p-4'>
                    <li className='nav-item'><Link className='nav-link' to='/admin-dashboard'>Inicio 🏠</Link></li>
                    <li className='nav-item'><Link className='nav-link' to='/'>Usuarios</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/'>Productos 🛒</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/'>compañias 💼</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/'>Roles 📂</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/'>Categorías 📂</Link></li>
                </ul>

            </div>
        </div>

    </div>


    
    </>

  )
}