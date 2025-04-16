import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Nav } from '../landing/components/nav'
import { Footer } from '../landing/components/footer'
import axios from 'axios'
import  { AuthContext } from './authContext'

export const Login = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/login', {
        
        email,
        password
      })
      console.log(response)

      const token = response.data.token
      login(token) // Usamos la función del contexto para guardar el token
      alert("Login exitoso")
      navigate('/admin-dashboard')
    } catch (error) {
      console.error("Error al iniciar sesión:", error)
      alert("Error en el login. Verifica tus datos.")
    }
  }

  return (
    <>
      <Nav />
      
      <form onSubmit={handleSubmit}>
        <div className='container-fluid mt-5' style={{ maxWidth: '400px' }}>
          <h1 className='mb-4 fw-normal text-primary text-center'>Iniciar sesión</h1>
          
          <div className='mb-3'>
            <label className='form-label' htmlFor='email'>Correo electrónico</label>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='Correo electrónico'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          
          <div className='mb-3'>
            <label className='form-label' htmlFor='password'>Contraseña</label>
            <input
              type='password'
              className='form-control'
              id='password'
              placeholder='Contraseña'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          
          <div className='d-grid'>
            <button type='submit' className='btn btn-primary'>Ingresar</button>
          </div>

          <div className='text-center mt-2'>
            <Link to='/register'>¿No tienes cuenta? Regístrate</Link>
          </div>
        </div>
      </form>

      <Footer />
    </>
  )
}
