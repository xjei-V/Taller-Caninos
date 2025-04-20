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
      <section className="container-fluid bg-light py-5">
  <h3 className="text-center text-primary mb-5 display-6 fw-bold">Categorías</h3>
  <div className="row">
    {categories.map(cat => (
      <div className="col-md-4 mb-4" key={cat.id}>
        <div className="card h-100 shadow-sm border-0 rounded-4">
          <div className="card-body text-center d-flex flex-column justify-content-between">
            <h5 className="card-title fw-bold text-dark">{cat.name}</h5>
            <p className="card-text text-muted">
              {cat.description || "Sin descripción"}
            </p>
            <button 
              className="btn btn-outline-primary rounded-pill mt-3 px-4"
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
      <h4 className="text-center text-secondary mb-4 fw-bold">Productos de la categoría</h4>
      <div className="row">
        {products.map(prod => (
          <div className="col-md-4 mb-4" key={prod.id}>
            <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden">
              <img 
                src={prod.imageUrl || "/img/default-product.jpg"} 
                className="card-img-top"
                alt={prod.name}
                style={{ height: '350px', }}
              />
              <div className="card-body text-center d-flex flex-column justify-content-between">
                <h5 className="card-title fw-bold text-dark">{prod.name}</h5>
                <p className="card-text text-muted">{prod.description}</p>
                <p className="card-text fw-bold text-primary fs-5">${prod.price}</p>
              </div>
              <div className="card-footer bg-white border-0 text-center">
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