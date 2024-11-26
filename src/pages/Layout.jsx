import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../component/Sidebar'; 
import ErrorBoundary from '../pages/ErrorBoundary';

const Layout = () => (
  <div style={{ display: 'flex' }}>
    <Sidebar />  {/* Your sidebar component */}
    <div style={{ flex: 1, padding: '1rem' }}>
      <Outlet />  {/* This is where the routed components will be rendered */}
    </div>
  </div>
);

export default Layout;
