import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from '../landing/landing'
import { Login } from '../auth/login'
import { Register } from '../auth/register'
import { Dashboard } from '../dashboard/dashboard'
import ProtectedRoute from './protedRouters'
import { Products } from '../landing/products-landing/Products'
import { Categorie } from '../landing/categories-landing/categorie'
import { Users } from '../dashboard/users/users'
import { ProductsDash } from '../dashboard/products/products'
import { Companies } from '../dashboard/companies/companies'
import { CategoriesDash } from '../dashboard/categories/categories_dash'
import { Roles } from '../dashboard/roles/roles'
export const Rutas = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing></Landing>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/register' element={<Register></Register>}/>
      <Route path='/products' element={<Products></Products>}/>
      <Route path='/categorias' element={<Categorie></Categorie>}/>

      <Route path='/admin' element={<ProtectedRoute> <Dashboard /></ProtectedRoute>}  />
      <Route path='admin/usuarios' element={<Users></Users>}/>
      <Route path='admin/products_dash' element={<ProductsDash></ProductsDash>}/>
      <Route path='admin/companies' element={<Companies></Companies>}/>
      <Route path='admin/categories_dash' element={<CategoriesDash></CategoriesDash>}/>
      <Route path='admin/roles' element={<Roles></Roles>}/>



      
    </Routes>

    </>
  )
}
