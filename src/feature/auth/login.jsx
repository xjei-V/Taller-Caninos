import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Nav } from '../landing/components/nav'
import { Footer } from '../landing/components/footer'
import axios from 'axios'
import  { AuthContext } from './authContext' // llamamos al contexto de auth para asi poder usuar los datos anteriores

export const Login = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext) // usamos el dato login es decir la funcion con llaves para asi destructurar datos

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/login', {  // la constante response me ava almacenar la peticion de mi api 
        
        email,
        password   //le va a mandar el correo y la contraseña a la api 
      })
      console.log(response)

      const token = response.data.token // la constante token me va almcenar el token que me dio en el backend con el response.data.token
      login(token) // Usamos la función del contexto para guardar el token
      alert("Login exitoso")
      navigate('/admin')
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
              required
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
              required
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
