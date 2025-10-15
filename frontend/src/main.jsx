import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react'
import App from './App.jsx'
import Home from "./pages/home/Home";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
    ]},
]);

 
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>

  // <RouterProvider router={router} />
);