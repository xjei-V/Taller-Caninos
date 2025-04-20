import React, { useEffect, useState } from 'react'
import { DeleteCompany, GetCompanies } from '../consumo-Api/companiesApi/Apicompanies';

export const Companies = () => {
  const [id, setid] = useState(null)
  const [companie, setcompanie] = useState([])
  const [name, setname] = useState("")
  const [nit, setnit] = useState("")
  const [address, setaddres] = useState("")
  const [phone, setphone] = useState("")
  const [email, setemail] = useState("")
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  //listar las compañias

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetCompanies();
      setcompanie(data);
    };
    fetchData();
  }, []);

  const savedata = async (e) => {
    e.preventDefault();
  
    const datos = {
      name: name,
      nit: nit,
      address: address,
      phone: phone,
      email: email
    };
  
    if (id) {
      await fetch(`http://localhost:3000/companies/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos)
      });
      alert("Actualizado correctamente");
    } else {
      await fetch(`http://localhost:3000/companies`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos)
      });
      alert("Guardado correctamente");
    }
  
    setid(null);
    setname("");
    setnit("");
    setaddres("");
    setphone("");
    setemail("");
  
    const updatedData = await GetCompanies();
    setcompanie(updatedData);
  };
  
  const editar = (edi) => {
    setid(edi.id);
    setname(edi.name);
    setnit(edi.nit);
    setaddres(edi.address); // corregido aquí
    setphone(edi.phone);
    setemail(edi.email);
  };  
  



  //eliminar una compañia


   const handleDelete = async (id) => {
         if (window.confirm("¿Seguro que lo quieres eliminar?")) {
           await fetch(`http://localhost:3000/companies/${id}`, { method: "DELETE" });
           alert("Compañia eliminada correctamente");
     
           const actualizar = await GetCompanies();
           setcompanie(actualizar);
         }
       }

  const ver = (company) => {
    setSelectedCompany(company);
    setShowModal(true);
  };



  return (
    <>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4'>
            <form onSubmit={savedata} className="bg-dark text-center text-white w-100 p-4 rounded-3" style={{ maxWidth: "550px" }}>
              <h3>Formulario Compañias</h3>

              <div className="mt-3">
                <label className="form-label">Nombre:</label>
                <input
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                 className="form-control"
                  maxLength={30} 
                  type="text" 
                  required
                 placeholder="Ingrese el nombre su la compañia" />
              </div>

              <div className="mt-2">
                <label for="nit">NIT:</label>
                <input 
                value={nit}
                onChange={(e) => setnit(e.target.value)}
                className="form-control" 
                type="text"
                required />
              </div>

              <div className="mt-2">
                <label className="form-label">Direccion:</label>
                <input 
                value={address}
                onChange={(e) => setaddres(e.target.value)}
                className="form-control mx-auto"
                 maxLength={55} 
                 type="text"
                  required 
                  placeholder="Ingrese la direccion" />
              </div>

              <div className="mt-2">
                <label className="form-label">Telefono:</label>
                <input 
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                className="form-control mx-auto" 
                type="number" 
                required
                 placeholder="Ingrese el Telefono" />
              </div>


              <div className="mt-2">
                <label className="form-label">Email:</label>
                <input 
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="form-control mx-auto"
                 maxLength={40} 
                 type="email" 
                 required 
                 placeholder="correo electronico" />
              </div>


              <div className="mt-4">
                <button type="submit" className="btn btn-success col-6">Guardar</button>
              </div>

            </form>

          </div>
          <div className='col-4 mt-4'>
            <h3 className='text-end mb-3'>Tabla de las compañias</h3>
            <table className='table table-bordered text-center'>
              <thead className='bg-dark'>
                <tr>
                  <th>Nombre</th>
                  <th>NIT</th>
                  <th>Direccion</th>
                  <th>Telefono</th>
                  <th>Email</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {companie.map((company)=>(
                  <tr key={company.id}>
                    <td>{company.name}</td>
                    <td>{company.nit}</td>
                    <td>{company.address}</td>
                    <td>{company.phone}</td>
                    <td>{company.email}</td>
                    <td className='d-flex gap-2'>
                      <button  onClick={() => ver(company)} className='btn btn-success'>Ver</button>
                      <button onClick={() => editar(company)} className='btn btn-warning'>Editar</button>
                      <button onClick={()=>handleDelete(company.id)} className='btn btn-danger'>Eliminar</button>
                    </td>
                  </tr>
                ))}
               

              </tbody>
            </table>
          </div>

        </div>
      </div>

      {showModal && selectedCompany && (

        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedCompany.name}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p><strong className='fw-bold'>NIT:</strong> {selectedCompany.nit}</p>
                <p><strong className=' fw-bold'>Direccion:</strong> {selectedCompany.address}</p>
                <p><strong  className='fw-bold'>Telefono:</strong> {selectedCompany.phone}</p>
                <p><strong  className='fw-bold'>Email:</strong> {selectedCompany.email}</p>
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

  )
}
