import React, { useEffect, useState } from 'react'
import { GetProducts } from '../../landing/products-landing/consumo-api-lg/api-services/apiProducts';
import { GetCategorie } from '../../landing/categories-landing/consumo-api/categories-api/categories_api';
import { DeleteProducto, PostProducto, UpdateProducto } from '../consumo-Api/prodcuts-api/apiProducts';

export const ProductsDash = () => {
  //crear un nuevo producto
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    categoryId: '',
    imageUrl: '',
  });

  //listar
  const [categorias, setCategorias] = useState([]);
  const [products, setProducts] = useState([]);
  //editar un producto
  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  //modal para ver producto
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleView = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };



  useEffect(() => {
    const fetchData = async () => {
      const data = await GetCategorie();
      setCategorias(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target; // capturamos el nombre y el valor del input
    setFormData(prev => ({              // setformdata actualiza el estado de formdata con el nombre y el valor del input
      ...prev,                          // prev es el estado anterior y ...prev es para mantener el campo anterior que el usuario escribio
      [name]: value                    // es para que identifique en que input estamos y el valor que le pasamos
    }));
  };

  //editar producto

  const handleSubmit = async (e) => {  //mando datos
    e.preventDefault();
    if (editMode) {  // para que entre en modo edicion
      const result = await UpdateProducto(editProductId, formData); // llamamos a la  api con el  UpdateProducto que esta en apiProducts con el id del producto y el formData para saber que campos traer
      if (!result.status) {   // si el resultado es false entonces mostramos un alert con el mensaje de error
        alert("Error al actualizar el producto");
      } else {               // si el resultado es true entonces mostramos un alert con el mensaje de exito             
        alert("Producto actualizado con éxito");
        setEditMode(false);             // seteamos el editMode a false para salir del modo edicion
        setEditProductId(null);         // seteamos el editProductId a null para que no se repita el mismo producto
        setFormData({            //limipiamos
          name: '',
          description: '',
          price: 0,
          stock: 0,
          categoryId: '',
          imageUrl: '',
        });
        const updatedProducts = await GetProducts();   // llamamos a la api GetProducts para actualizar los productos
        setProducts(updatedProducts);                   // seteamos los productos actualizados para que se vean en la interfaz
      }
    } else {
      const result = await PostProducto(formData); // llamamos a la api PostProducto con el formData para saber que campos traer
      if (!result.status) {
        alert("Error al crear el producto");
      } else {
        alert("Producto creado con éxito");
        setFormData({
          name: '', description: '', price: '', stock: '', categoryId: '', imageUrl: ''
        });
        const updatedProducts = await GetProducts();
        setProducts(updatedProducts);
      }
    }
  };

  const handleEdit = (producto) => {   // al dar click en el boton editar de un producto se llama a esta funcion
    setFormData({    
      name: producto.name || '',
      description: producto.description || '',
      price: producto.price || 0,
      stock: producto.stock || 0,
      categoryId: producto.category?.id || '',
      imageUrl: producto.imageUrl || '',
    });
    setEditMode(true); //activamos el modo edicion
    setEditProductId(producto.id);  //aqui estamos llamando al id del producto para que arriba en handlesubmit se pueda saber que producto es el que estamos editando
  };

 
   const handleDelete = async (id) => {
      if (window.confirm("¿Seguro que lo quieres eliminar?")) {
        await fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" });
        alert("Producto eliminado correctamente");
  
        const actualizar = await GetProducts();
        setProducts(actualizar);
      }
    }
  

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4'>
            <form onSubmit={handleSubmit} className="bg-dark text-white text-center w-100 p-4 rounded-3" style={{ maxWidth: "550px" }}>
              <h3>Formulario Productos</h3>

              <div className="mt-3">

                <div className="mt-3">
                  <label className="form-label">Nombre:</label>
                  <input
                    name='name'
                    className="form-control"
                    maxLength={30}
                    type="text"
                    required
                    placeholder="Ingrese el nombre del producto"
                    value={formData.name}
                    onChange={handleChange}

                  />
                </div>

                <div className="mt-2">
                  <label className="form-label">Descripcion:</label>
                  <input
                    name='description'
                    className="form-control mx-auto"
                    maxLength={40}
                    type="text"
                    required
                    placeholder="Descripcion"
                    value={formData.description}
                    onChange={handleChange}

                  />
                </div>

                <label className="form-label">Precio:</label>
                <input
                  name='price'
                  className="form-control"
                  type="number"
                  required
                  placeholder="Ingrese el precio"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-2">
                <label className="form-label">Stock:</label>
                <input
                  name='stock'
                  className="form-control"
                  type="number"
                  required
                  placeholder="Ingrese el stock"
                  value={formData.stock}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-2">
                <label className="form-label">Imagen:</label>
                <input
                  name='imageUrl'
                  className="form-control"
                  type="text"
                  required
                  placeholder="Ingrese la imagen"
                  value={formData.imageUrl}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-2">
                <label className="form-label">Categoria:</label>
                <select
                  name='categoryId'
                  required
                  className="form-select"
                  value={formData.categoryId}
                  onChange={handleChange}
                >

                  <option value="">Seleccione la categoria</option>
                  {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <button type="submit" className="btn btn-success col-6">
                  {editMode ? 'Actualizar' : 'Guardar'}
                </button>
              </div>
            </form>

          </div>
          <div className='col-4 mt-4'>
            <h2 className="text-center">productos</h2>
            <table className="table table-bordered text-center ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>categoria</th>
                  <th>imagen</th>
                  <th>acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (

                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.category?.name || 'Sin categoría'}</td>
                    <td><img src={product.imageUrl} alt="producto" className="img-fluid rounded" /></td>
                    <td className='d-flex gap-2'>
                      <button onClick={() => handleEdit(product)} className="btn btn-success">editar</button>
                      <button onClick={() => handleView(product)} className="btn btn-primary">ver</button>
                      <button onClick={() => handleDelete(product.id)} className="btn btn-danger">eliminar</button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>

      </div>

      {showModal && selectedProduct && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.name}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Descripción:</strong> {selectedProduct.description}</p>
                <p><strong>Precio:</strong> ${selectedProduct.price}</p>
                <p><strong>Stock:</strong> {selectedProduct.stock}</p>
                <p><strong>Categoría:</strong> {selectedProduct.category?.name || 'Sin categoría'}</p>
                {selectedProduct.imageUrl && (
                  <img src={selectedProduct.imageUrl} alt="Producto" className="img-fluid" />
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


    </>
  )

}

