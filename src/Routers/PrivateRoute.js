import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../Context/AuthProvider';
import Spner from '../Pages/Shareed/Spenet/Spner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const location = useLocation;

    if (loading) {
        return <Spner></Spner>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;