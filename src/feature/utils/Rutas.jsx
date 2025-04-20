import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from '../landing/landing'
import { Login } from '../auth/login'
import { Dashboard } from '../dashboard/dashboard'
import ProtectedRoute from './protedRouters'
import { Products } from '../landing/products-landing/Products'
import { Categorie } from '../landing/categories-landing/categorie'
import { Users } from '../dashboard/users/users'
import { ProductsDash } from '../dashboard/products/products'
import { Companies } from '../dashboard/companies/companies'
import { CategoriesDash } from '../dashboard/categories/categories_dash'
import { Roles } from '../dashboard/roles/roles'
import { Alimentos } from '../landing/categories-landing/alimentos/Alimentos'
import { Higiene } from '../landing/categories-landing/higienes/higiene'
import { Jugetes } from '../landing/categories-landing/juguetes/jugetes'
import { Accesorios } from '../landing/categories-landing/accesorios/accesorios'

export const Rutas = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing></Landing>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/products' element={<Products></Products>}/>
      <Route path='/categorias' element={<Categorie></Categorie>}/>
      <Route path='/alimentos' element={<Alimentos></Alimentos>}></Route>
      <Route path='/higiene' element={<Higiene></Higiene>}/>
      <Route path='/Accesorios' element={<Accesorios></Accesorios>}/>
      <Route path='/juguetes' element={<Jugetes></Jugetes>}/>

      <Route path='/admin' element={<ProtectedRoute> <Dashboard /></ProtectedRoute>}>
      
      <Route path='usuarios' element={<Users></Users>}/>
      <Route path='products_dash' element={<ProductsDash></ProductsDash>}/>
      <Route path='companies' element={<Companies></Companies>}/>
      <Route path='categories_dash' element={<CategoriesDash></CategoriesDash>}/>
      <Route path='roles' element={<Roles></Roles>}/>
      </Route>



      
    </Routes>

    </>
  )
}
