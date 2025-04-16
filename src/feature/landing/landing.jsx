import React, { useState } from 'react'
import { Footer } from './components/footer'
import { Nav } from './components/nav'
import { FaAngleRight, FaAngleDown, FaAngleLeft } from 'react-icons/fa'; // íconos flecha


export const Landing = () => {

  const [mostrarTexto, setMostrarTexto] = useState(false);

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
        src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
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
              src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
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
            {mostrarTexto ? <FaAngleDown /> : <FaAngleLeft />}
          </button>
          <h3 className="mb-0">¿Quiénes somos?</h3>
        </div>
      </div>
    </div>


    
    
    {/* Servicios */}

    <section>
      <div className='container-fluid mt-5'>
        <h3 className="text-dark text-center mb-4">Servicios</h3>
        <div className="row">
              <div className="col-md-4 mb-4" >
                <div className="card h-100">
                  <img src='' className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div> 
              <div className="col-md-4 mb-4" >
                <div className="card h-100">
                  <img src='' className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div> 
              <div className="col-md-4 mb-4" >
                <div className="card h-100">
                  <img src='' className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div> 
              <div className="col-md-4 mb-4" >
                <div className="card h-100">
                  <img src='' className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div> 
              <div className="col-md-4 mb-4" >
                <div className="card h-100">
                  <img src='' className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div> 
              <div className="col-md-4 mb-4" >
                <div className="card h-100">
                  <img src='' className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>           
        </div>
        </div>
      </section>

      {/* Productos */}
      <section>
        <div className='container-fluid mt-5'>
        <h3 className="text-dark text-center mb-4">Productos</h3>
        <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src='' className="card-img-top" alt='' />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src='' className="card-img-top" alt='' />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>


              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src='' className="card-img-top" alt='' />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>


              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src='' className="card-img-top" alt='' />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src='' className="card-img-top" alt='' />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src='' className="card-img-top" alt='' />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
         
        
            <p className="text-muted">Próximamente nuestros productos estarán aquí.</p>
         
        </div>
        </div>
      </section>

      {/* Categorías */}
      <section>
        <div className='container-fluid mt-5'>
        <h3 className="text-dark text-center mb-4">Categorías</h3>
        <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src='' className="card-img-top" alt='' />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src='' className="card-img-top" alt='' />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src='' className="card-img-top" alt='' />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>


              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src='' className="card-img-top" alt='' />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src='' className="card-img-top" alt='' />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src='' className="card-img-top" alt='' />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
            
            </div>
        </div>
      </section>


      <Footer></Footer>
    </>
  )
}
