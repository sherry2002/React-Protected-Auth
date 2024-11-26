import React, {useContext} from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Admin from './pages/Admin'
import User from './pages/User';
import Error from './pages/Error';
import Login from './pages/Login';
import Layout from './pages/Layout';
import { UserRoleContext } from './context/User';
import ProtectedRoute from './component/ProtectedRoute';

function App() {
 const { role, loading } = useContext(UserRoleContext);
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,  // Use Layout as the base component
      errorElement: <Error />,
      children: [
        {
          index: true,
          element:<Login />
         
        },
        {
          path: 'user',
          element: (
            <ProtectedRoute allowedRoles={['user','admin']}>
              <User />
            </ProtectedRoute>
          ),
        },
        {
          path: 'admin',
          element: (
            <ProtectedRoute allowedRoles={['admin']}>
              <Admin />
            </ProtectedRoute>
          ),
        },
      ],
    }
  ]);

  return (
    <div className='app'>
      <div className="dasboard_main">
        {
         loading ? (
          <div>Loading ...</div>
         ): (
           <RouterProvider router={router} />
         )
        }
      </div>
    </div>
  )
}

export default App
