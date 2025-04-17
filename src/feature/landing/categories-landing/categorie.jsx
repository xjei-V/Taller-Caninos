import React, { useEffect, useState } from 'react'
import { Nav } from '../components/nav'
import { Footer } from '../components/footer'
import { GetCategorie, GetProductsByCategory } from './consumo-api/categories-api/categories_api'

export const Categorie = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetCategorie()
      setCategories(data)
    }
    fetchData()
  }, [])

  const handleCategoryClick = async (categoryId) => {
    const data = await GetProductsByCategory(categoryId)
    console.log('Productos recibidos:', data);
    setProducts(data)
    setSelectedCategory(categoryId)
  }

  return (
    <>
      <Nav />
      <section className='container-fluid mt-5'>
        <h3 className="text-dark text-center mb-4">Categorías</h3>
        <div className="row">
          {categories.map(cat => (
            <div className="col-md-4 mb-4" key={cat.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{cat.name}</h5>
                  <p className="card-text">{cat.description || "Sin descripción"}</p>
                  <button 
                    className='btn btn-primary mt-2' 
                    onClick={() => handleCategoryClick(cat.id)}
                  >
                    Ver productos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length > 0 && (
          <div className="mt-5">
            <h4 className="text-center mb-4">Productos de la categoría</h4>
            <div className="row">
              {products.map(prod => (
                <div className="col-md-4 mb-4" key={prod.id}>
                  <div className="card h-100">
                    <img 
                      src={prod.imageUrl || "/img/default-product.jpg"} 
                      className="card-img-top" 
                      alt={prod.name} 
                    />
                    <div className="card-body">
                      <h5 className="card-title">{prod.name}</h5>
                      <p className="card-text">{prod.description}</p>
                      <p className="card-text fw-bold">${prod.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  )
}
