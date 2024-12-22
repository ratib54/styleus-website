import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Main from './component/MainLayout/mainLay'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLay from './component/MainLayout/mainLay';
import Home from './routes/Home';
import More from './routes/More';
import Cart from './component/MainLayout/Cart';
import Details from './component/MainLayout/Details';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLay />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/more',
        element: <More></More>,
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/detail/:id',
        element: <Details />,
        loader: () => fetch('./styleus.json')
      }
    ]
  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
