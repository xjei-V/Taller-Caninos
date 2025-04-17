import React, { useEffect, useState } from 'react';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { GetProducts } from './consumo-api-lg/api-services/apiProducts';

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <section>
        <div className='container-fluid mt-5'>
          <h3 className='text-dark text-center mb-4'>Productos</h3>
          <div className='row'>

            {products.length > 0 ? (
              products.map((element) => (
                <div key={element.id} className='col-md-4 mb-4'>
                  <div className='card h-100'>
                    <img
                      src={element.imageUrl}
                      className='card-img-top'
                      alt={element.name}
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>{element.name}</h5>
                      <p className='card-text'>{element.description}</p>
                      <p className='card-text'><strong>Precio:</strong> ${element.price}</p>
                      <p className='card-text'><strong>Stock:</strong> {element.stock}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className='text-muted'>Próximamente nuestros productos estarán aquí.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
