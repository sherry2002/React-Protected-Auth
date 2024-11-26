import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { UserRoleContext } from '../context/User';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const cookies = localStorage.getItem("token");
    const { role } = useContext(UserRoleContext);
    if (role && !allowedRoles.includes(role.user_type)) {
        return <Navigate to="/not-authorized" />;
    }
    if(!cookies){
       return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
