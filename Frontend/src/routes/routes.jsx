import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import App from '../App'

import { Signup, Login, Logout, PageNotFound, Home, Profile} from "../pages/index.js"
import Settings from '../pages/Settings.jsx'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/Logout' element={<Logout />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
)

export default routes