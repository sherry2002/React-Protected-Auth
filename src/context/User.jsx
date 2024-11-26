import React, { createContext, useEffect, useState } from 'react';

const UserRoleContext = createContext();

const UserRoleProvider = ({ children }) => {
    const [role, setRole] = useState(null); 
    const [loading, setLoading]  = useState(false);

    useEffect(()=>{
        setLoading(true)
        setRole({user_type:"admin"})
        setTimeout(() => {
            setLoading(false)            
        }, 1000);
    },[])

    return (
        <UserRoleContext.Provider value={{ role, setRole, loading }}>
            {children}
        </UserRoleContext.Provider>
    );
};

export {UserRoleContext, UserRoleProvider}