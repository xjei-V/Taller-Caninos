import React, { useState } from 'react'
import { Footer } from './components/footer'
import { Nav } from './components/nav'
import { FaAngleRight, FaAngleDown, FaAngleLeft } from 'react-icons/fa'; // íconos flecha
import { FaPaw, FaDog, FaTruck } from 'react-icons/fa'



export const Landing = () => {

  const [mostrarNosotros, setMostrarNosotros] = useState(true)
  const [mostrarTexto, setMostrarTexto] = useState(false);

  const handleToggleNosotros = () => {
    setMostrarNosotros(!mostrarNosotros)
  }
  const handleToggle = () => {
    setMostrarTexto(!mostrarTexto);
  }

  
  return (
    <>
    <Nav></Nav>

    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-6 text-center p-4  rounded border-start border-4 border-warning'>
          <h1 className='w-bold text-dark mb-3'>Bienvendio a Caninos <span className='w-bold text-warning'>SABS</span> </h1>
          <p className='text-dark fs-5'>
            ¡Bienvenido a Caninos <span className='w-bold text-warning'>SABS</span>! Aqui encontraras los mejores productos, servicios y comida para tu mascota. Todo de la mejor calidad y precio a tu disposición.
          </p>


        </div>
        <div className='col-md-6 text-center'>
      <img
        src="/imagenes/banner.png"
        alt="Perro feliz"
        className="img-fluid rounded shadow"
        style={{ maxHeight: '350px' }}
      />
    </div>
      </div>
    </div>


    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mt-4 mt-md-0 text-center">
          {mostrarTexto ? (
            <div className="text-start bg-light p-4 rounded border shadow fade-in">
              <h5 className="text-warning">Caninos SABS</h5>
              <p>
                Somos una empresa dedicada al transporte seguro y productos de calidad para tus mascotas.
                Nuestro compromiso es brindar un servicio confiable y lleno de amor por los animales.
              </p>
            </div>
          ) : (
            <img
              src="/imagenes/quienes.png"
              alt="Perro Caninos"
              className="img-fluid fade-in"
              style={{ maxHeight: '250px' }}
            />
          )}
        </div>

        <div className="col-md-6 d-flex justify-content-center gap-2">
          <button
            className="btn btn-warning btn-sm rounded-circle"
            onClick={handleToggle}
          >
            {mostrarTexto ?  <FaAngleLeft /> : <FaAngleDown />}
          </button>
          <h3 className="mb-0">¿Quiénes somos?</h3>
        </div>
      </div>
    </div>


      
    <div className="container my-5">
  <div className="row align-items-center">
    <div className="col-md-6 d-flex justify-content-center gap-2">
      <h3 className="mb-0">Nosotros</h3>
      <button
        className="btn btn-warning btn-sm rounded-circle"
        onClick={handleToggleNosotros}
      >
        {mostrarNosotros ? <FaAngleDown /> : <FaAngleRight />}
      </button>
    </div>

    <div className="col-md-6 mt-4 mt-md-0 text-center">
      {mostrarNosotros ? (
        <div className="text-start bg-light p-4 rounded border shadow fade-in">
          <h5 className="text-warning">¿Por qué elegir Caninos SABS?</h5>
          <ul className="list-unstyled text-dark">
            <li className="mb-2">
              <FaDog className="me-2 text-warning" />
              Amor y cuidado por cada peludo cliente.
            </li>
            <li className="mb-2">
              <FaTruck className="me-2 text-warning" />
              Transporte seguro y confiable para tus mascotas.
            </li>
            <li className="mb-2">
              <FaPaw className="me-2 text-warning" />
              Productos y servicios de alta calidad.
            </li>
          </ul>
          <p className="mt-3">
            En <strong>Caninos SABS</strong>, tratamos a tus mascotas como parte de nuestra familia. Nos apasiona brindar soluciones que mejoren su bienestar y tu tranquilidad.
          </p>
        </div>
      ) : (
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.dPXNY8HjuR-xD3aOyEweKQAAAA&pid=Api&P=0&h=180"
          alt="Canino feliz"
          className="img-fluid fade-in rounded"
          style={{ maxHeight: '250px' }}
        />
      )}
    </div>
  </div>
</div>

      


      <Footer></Footer>
    </>
  )
}
