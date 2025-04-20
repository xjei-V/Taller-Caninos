import React, { useEffect, useState } from 'react'
import { GetUsers } from '../consumo-Api/ApiUsers/ApiUser';
import { GetCompanies } from '../consumo-Api/companiesApi/Apicompanies';
import { GetRoles } from '../consumo-Api/rolesApi/ApiRol';

export const Users = () => {
  const [usuario, setusuario] = useState([]);
  const [id, setid] = useState(null);
  const [fullname, setfullname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const [roles, setRoles] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedRoleId, setSelectedRoleId] = useState('');
  const [selectedCompanyId, setSelectedCompanyId] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchRoles = async () => {
      const data = await GetRoles();
      if (Array.isArray(data)) setRoles(data);
    };
    fetchRoles();
  }, []);

  useEffect(() => {
    const fetchCompanies = async () => {
      const data = await GetCompanies();
      if (Array.isArray(data)) setCompanies(data);
    };
    fetchCompanies();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await GetUsers();
      setusuario(data);
    };
    fetchUsers();
  }, []);

  const savedata = async (e) => {
    e.preventDefault();

    if (!fullname || !email || !password || !selectedRoleId || !selectedCompanyId) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const datos = {
      fullName: fullname,
      email: email,
      password: password,
      roleId: parseInt(selectedRoleId),
      companyId: parseInt(selectedCompanyId),
    };

    try {
      let response; 
      if (id) {
        response = await fetch(`http://localhost:3000/users/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(datos),
        });
        alert('Usuario actualizado correctamente');
      } else {
        response = await fetch(`http://localhost:3000/users/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(datos),
        });
        alert('Usuario registrado correctamente');
      }

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Error en la solicitud');
      }

      const actualizar = await GetUsers();
      setusuario(actualizar);
      limpiar();
    } catch (error) {
      console.error('Error al guardar:', error);
      alert(`Error: ${error.message}`);
    }
  };

  const editar = (edi) => {
    setid(edi.id);
    setfullname(edi.fullName);
    setemail(edi.email);
    setpassword(edi.password);
    setSelectedRoleId(edi.roleId);
    setSelectedCompanyId(edi.companyId);
  };

  const limpiar = () => {
    setid(null);
    setfullname('');
    setemail('');
    setpassword('');
    setSelectedRoleId('');
    setSelectedCompanyId('');
  };

  const eliminar = async (id) => {
    if (window.confirm("¿Seguro que lo quieres eliminar?")) {
      await fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" });
      alert("Usuario eliminado correctamente");

      const actualizar = await GetUsers();
      setusuario(actualizar);
    }

  };
  const View = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-4">
          <form onSubmit={savedata} className="bg-dark  rounded-3 text-white w-100 p-4" style={{ maxWidth: "550px" }}>
            <h3>Formulario Usuarios</h3>

            <div className="mt-3">
              <label className="form-label">Nombre:</label>
              <input
                onChange={(e) => setfullname(e.target.value)}
                value={fullname}
                className="form-control"
                type="text"
                maxLength={15}
                required
                placeholder="Ingrese el nombre"
              />
            </div>

            <div className="mt-2">
              <label className="form-label">Email:</label>
              <input
                onChange={(e) => setemail(e.target.value)}
                value={email}
                className="form-control"
                type="email"
                maxLength={20}
                required
                placeholder="Ingrese el email"
              />
            </div>

            <div className="mt-2">
              <label className="form-label">Password:</label>
              <input
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                className="form-control"
                type="password"
                maxLength={20}
                required
                placeholder="Ingrese la contraseña"
              />
            </div>

            <div className="mt-2">
              <label className="form-label">Rol</label>
              <select
                className="form-select"
                value={selectedRoleId}
                onChange={(e) => setSelectedRoleId(e.target.value)}
                required
              >
                <option value="">Seleccione el rol</option>
                {roles.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-2">
              <label className="form-label">Compañía</label>
              <select
                className="form-select"
                value={selectedCompanyId}
                onChange={(e) => setSelectedCompanyId(e.target.value)}
                required
              >
                <option value="">Seleccione la compañía</option>
                {companies.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-success">Guardar</button>
            </div>
          </form>
        </div>

        <div className='col-8 mt-4'>
          <h3 className='text-end mb-3'>Tabla de los usuarios</h3>
          <table className='table table-bordered text-center'>
            <thead className='bg-dark text-white'>
              <tr>
                <th>ID</th>
                <th>Nombre completo</th>
                <th>Email</th>
                <th>Compañía</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuario.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user.company?.name || 'Sin compañía'}</td>
                  <td>{user.role?.name || 'Sin rol'}</td>
                  <td className='d-flex gap-2 justify-content-center'>
                    <button onClick={() => View(user)} className='btn btn-success'>Ver</button>
                    <button onClick={() => editar(user)} className='btn btn-primary'>Editar</button>
                    <button onClick={() => eliminar(user.id)} className='btn btn-danger'>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {showModal && selectedUser && (
      <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{selectedUser.fullName}</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              <p><strong>Nombre completo:</strong> {selectedUser.fullName}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Compañía:</strong> {selectedUser.company?.name || 'Sin compañía'}</p>
              <p><strong>Rol:</strong> {selectedUser.role?.name || 'Sin rol'}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary btn-danger" onClick={() => setShowModal(false)}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      )}
    

    </>
  );
};
