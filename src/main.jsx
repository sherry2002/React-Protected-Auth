import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {UserRoleProvider} from './context/User'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
      <StrictMode>
        <UserRoleProvider>
          <App />
        </UserRoleProvider>
    </StrictMode>,
)
