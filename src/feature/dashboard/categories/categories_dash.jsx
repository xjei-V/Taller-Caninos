import React, { useEffect, useState } from 'react'
import { DeleteCategory, GetCategories, PostCategory, UpdateCategory } from '../consumo-Api/categories/categoriesApi';
import { GetCategorie } from '../../landing/categories-landing/consumo-api/categories-api/categories_api';

export const CategoriesDash = () => {

  //crear nueva categoria
  const [FormCategories, setFormCategories] = useState({
    name: '',
    description: '',
  });
  const [categories, setCategories] = useState([]);
  //editar categoria
  const [editmode, setEditmode] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(null);
  //modal
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // capturar el input
  const HandleChange = (e)=>{
    const {name, value }=e.target;
    setFormCategories(prev=>({
      ...prev,
      [name]: value
    }))
  }

  //editar categoria
  const handleEdit = (category)=>{
    setFormCategories({
      name: category.name || '',
      description: category.description || '',
    });
    setEditmode(true);
    setEditCategoryId(category.id);
  }

  //crear nueva categoria
  const HandleSubmit = async (e)=>{
    e.preventDefault();

    //editar categoria

    if(editmode){
      const result = await UpdateCategory(editCategoryId,FormCategories);
      if(result.status===false){
        alert("Error al actualizar la categoria")
      }
      else{
        alert("Categoria actualizada con exito");
        setEditmode(false);
        setEditCategoryId(null);
        setFormCategories({ name: '', description: '' })
      }

      return;
    }
    

    //crear categoria
    const result = await PostCategory(FormCategories);
    if(result.status===false){
      alert("Error al crear la categoria")
    }
    else{
      alert("Categoria creada con exito");
      setFormCategories({ name: '', description: '' })
    }

  }

  // eliminar categoria
  const handleDelete = async (id) => {
        if (window.confirm("¿Seguro que lo quieres eliminar?")) {
          await fetch(`http://localhost:3000/categories/${id}`, { method: "DELETE" });
          alert("Categoria eliminada correctamente");
    
          const actualizar = await GetCategorie();
          setCategories(actualizar);
        }
      }

  //ver
  const handleView = (category)=>{
    setSelectedCategory(category);
    setShowModal(true);
  }


  useEffect(() => {
    const fetchData = async () => {
      const data = await GetCategories();
      setCategories(data);
    };
    fetchData();
  }, []);
  return (
    <>

      <div className='container-fluid'>

        <div className='row'>
          <div className='col-4'>
            <form onSubmit={HandleSubmit} className="bg-dark rounded-3 text-center text-white w-100 p-4" style={{ maxWidth: "550px" }}>
              <h3>Formulario Categoria</h3>

              <div className="mt-3">
                <label className="form-label">Nombre:</label>
                <input 
                name='name'
                value={FormCategories.name}
                className="form-control"
                 maxLength={30} type="text" 
                 required 
                 onChange={HandleChange}
                 placeholder="Ingrese el nombre de la categoria" />

              </div>

              <div className="mt-2">
                <label className="form-label">Descripcion:</label>
                <input 
                name='description'
                value={FormCategories.description}
                className="form-control mx-auto"
                 maxLength={40} 
                 onChange={HandleChange}
                 type="text" 
                 required 
                 placeholder="Descripcion" />
              </div>

              <div className="mt-4">
                {editmode ? (
                  <button type="submit" className="btn btn-primary col-6">Actualizar</button>
                ) : (
                  <button type="submit" className="btn btn-success col-6">Guardar</button>
                )}
               
              </div>

            </form>
          </div>
          <div className='col-4 mt-4'>
            <h3 className='text-end mb-3'>Tabla de las categorias</h3>
            <table className='table table-bordered text-center'>

              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>{category.description}</td>
                    <td className='d-flex gap-2'>
                      <button onClick={()=>handleView(category)} className='btn btn-success'>ver</button>
                      <button onClick={()=>handleEdit(category)} className='btn btn-primary'>Editar</button>
                      <button onClick={() => handleDelete(category.id)} className='btn btn-danger'>Eliminar</button>
                    </td>
                  </tr>
                ))}

              </tbody>

            </table>
          </div>
        </div>
      </div>
        {showModal && selectedCategory &&(
              <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{selectedCategory.name}</h5>
                      <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                    </div>
                    <div className="modal-body">
                      <p><strong>Descripción:</strong> {selectedCategory.description}</p>
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
