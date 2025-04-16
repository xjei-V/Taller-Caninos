import React from 'react'
import { Nav } from '../landing/components/nav'
import { Footer } from '../landing/components/footer'

export const Register = () => {
  return (
    <>
    <Nav></Nav>
    <form action="">
    <div className='container  mt-5' style={{ maxWidth: '400px' }}>
    <h1 className='h3 mb-3 fw-normal text-center text-primary'>Registrate</h1>
        <div className='mb-2'>
          <label className='form-label' htmlFor='nombre'>Nombre</label>
          <input type='text' className='form-control' id='nombre' placeholder='Nombre' />

        </div>
        <div className='mb-2'>
          <label className='form-label' htmlFor='apellido'>Apellido</label>
          <input type='text' className='form-control' id='apellido' placeholder='Apellido' />
        </div>

        <div className='mb-2'>
          <label className='form-label' htmlFor='email'>Correo electrónico</label>
          <input type='email' className='form-control' id='email' placeholder='Correo electrónico' />
        </div>

        <div className='mb-2'>
          <label className='form-label' htmlFor='password'>Contraseña</label>
          <input type='password' className='form-control' id='password' placeholder='Contraseña' />
        </div>

        <div className='d-grid'>
          <button type='submit' className='btn btn-primary'>Registrarse</button>
        </div>
      </div>
    </form>
    <Footer></Footer>
    </>
  )
}
