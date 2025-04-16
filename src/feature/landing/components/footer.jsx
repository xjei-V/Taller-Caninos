import React from 'react'

export const Footer = () => {
  return (
    <>

<footer className="bg-dark text-white py-5 mt-5">
  <div className="container">
    <div className="row">
      {/* Contacto */}
      <div className="col-md-4 mb-4">
        <h5 className="mb-3 text-center">CONTACTO</h5>
        <ul className="list-unstyled text-center">
          <li><i className="bi bi-telephone-fill me-2"></i> +57 31020929</li>
          <li><i className="bi bi-envelope-fill me-2"></i> soporte@caninos.com</li>
          <li><a href="#" className="text-white text-decoration-none">Política de privacidad</a></li>
        </ul>
      </div>

      {/* Redes sociales */}
      <div className="col-md-4 mb-4">
        <h5 className="mb-3 text-center">REDES SOCIALES</h5>
        <ul className="list-inline text-center">
          <li className="list-inline-item me-3">
            <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
          </li>
          <li className="list-inline-item me-3">
            <a href="#" className="text-white fs-5"><i className="bi bi-twitter"></i></a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
          </li>
        </ul>
      </div>

      {/* Información */}
      <div className="col-md-4 mb-4">
        <h5 className="mb-3 text-center">Información</h5>
        <p className='text-center'> 
           ¡Gracias por confiar en nosotros!
        </p>
      </div>
    </div>

    <div className="text-center pt-3 border-top mt-4">
      <p className="mb-0">&copy; {new Date().getFullYear()} Caninos SABS. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

    
    
      
    </>
  )
}
