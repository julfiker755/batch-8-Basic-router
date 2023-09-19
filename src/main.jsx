import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Help from './components/Help/Help';
import Contact from './components/Contact';
import User from './components/User/User';
import Details from './components/Details/Details';
import Error from './components/Error/Error';
const router = createBrowserRouter([
 {
    path: "/",
    errorElement:<Error></Error>,
    element:<Layout></Layout>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },{
        path:'/help',
        element:<Help></Help>
      },{
        path:'/contact',
        element:<Contact></Contact>
      },{
        path:'/user',
        loader:()=> fetch("https://dummyjson.com/products/"),
        element:<User></User>
      },{
        path:'/user/:id',
        loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`) ,
        element:<Details></Details>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
