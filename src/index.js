import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/errorComponent/Error.js';
import Contact from './components/contactComponent/Contact.js';
import Home from './components/homeComponent/Home.js';
import FetchProducts from './components/productComponent/FetchProducts.js';
import FetchProductById from './components/productComponent/FetchProductById.js';


let routes = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/",
        index:true,
        element:<Home/>
      },
      {
        path:"/products",
        element:<FetchProducts/>
      },
      {
        path:"/products/:productId",
        element:<FetchProductById/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

   <RouterProvider router={routes}/>
  
);

