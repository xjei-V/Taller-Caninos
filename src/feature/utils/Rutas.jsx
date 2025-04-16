import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from '../landing/landing'
import { Login } from '../auth/login'
import { Register } from '../auth/register'
import { Dashboard } from '../dashboard/dashboard'
// import ProtectedRoute from './protedRouters'
export const Rutas = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing></Landing>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/register' element={<Register></Register>}/>

      {/* <Route path='/admin' element={<ProtectedRoute></ProtectedRoute>}> */}
      <Route path='admin-dashboard' element={<Dashboard></Dashboard>}>
      
      </Route>
  

      
    </Routes>

    </>
  )
}
