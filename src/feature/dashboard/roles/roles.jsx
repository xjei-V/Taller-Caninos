import React, { useEffect, useState } from 'react'
import { GetRoles } from '../consumo-Api/rolesApi/ApiRol';

export const Roles = () => {
  const [id, setId] = useState(null);
  const [rol, setRol] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetRoles();
      setRol(data);
    };
    fetchData();
  }, []);

  const saveData = async (e) => {
    e.preventDefault();

    const datos = { name, description };

    if (id) {
      await fetch(`http://localhost:3000/roles/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      alert("Rol actualizado correctamente");
    } else {
      await fetch(`http://localhost:3000/roles`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      alert("Guardado correctamente");
    }

    setId(null);
    setName("");
    setDescription("");

    const actualizar = await GetRoles();
    setRol(actualizar);
  };

  const editar = (edi) => {
    setId(edi.id);
    setName(edi.name);
    setDescription(edi.description);
  };

  const eliminar = async (id) => {
    const confirmar = window.confirm("¿Seguro que quieres eliminar?");
    if (!confirmar) return;

    await fetch(`http://localhost:3000/roles/${id}`, { method: "DELETE" });
    alert("Rol eliminado correctamente");

    const actualizar = await GetRoles();
    setRol(actualizar);
  };

  const ver = (rol) => {
    setSelectedRole(rol);
    setShowModal(true);
  
  };



  return (
    <>
    <div className='container-fluid'>
      <div className='row mt-5 justify-content-center'>

        {/* Formulario */}
        <div className='col-md-4'>
          <form onSubmit={saveData} className='p-4 border rounded shadow-sm bg-dark text-white'>
            <h2 className='text-center mb-4'>Registrar Roles</h2>

            <div className='mb-3'>
              <label className='form-label'>Nombre</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className='form-control'
                type='text'
                required
                placeholder="Nombre"
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Descripción</label>
              <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className='form-control'
                type='text'
                required
                placeholder="Descripción"
              />
            </div>

            <button className='btn btn-primary w-100'>Enviar</button>
          </form>
        </div>

        {/* Tabla */}
        <div className='col-md-7 mt-4 mt-md-0'>
          <h4 className='text-center mb-3'>Lista de Roles</h4>
          <div className='table-responsive'>
            <table className='table table-bordered align-middle text-center'>
              <thead className='table-dark'>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {rol.map((element) => (
                  <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.description || 'Sin descripción'}</td>
                    <td>
                      <div className='d-flex flex-wrap gap-2'>
                        <button onClick={() => ver(element)} className='btn btn-success btn-sm'>Ver más</button>
                        <button onClick={() => editar(element)} className='btn btn-warning btn-sm'>Editar</button>
                        <button onClick={() => eliminar(element.id)} className='btn btn-danger btn-sm'>Eliminar</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>

      {showModal && selectedRole && (
  <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{selectedRole.name}</h5>
          <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
        </div>
        <div className="modal-body">
          <p><strong>Descripción:</strong> {selectedRole.description}</p>
        
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
