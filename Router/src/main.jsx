import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Home from './Components/Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Details from './Components/Details.jsx';
import About from './Components/About.jsx';
import Signin from './Components/Signin.jsx';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='about'  element={<About/>} />
      <Route path='details'  element={<Details />} />
      <Route path='signin'  element={<Signin />} />
      
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
