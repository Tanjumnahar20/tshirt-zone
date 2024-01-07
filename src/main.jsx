import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Review from './components/Orders/Review.jsx';
import Grandpa from './components/Grandpa/Grandpa.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        loader:()=> fetch('tshirts.json')

      },
      {
        path:'review',
        element:<Review></Review>
      },
      {
        path:'grandpa',
        element:<Grandpa></Grandpa>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
