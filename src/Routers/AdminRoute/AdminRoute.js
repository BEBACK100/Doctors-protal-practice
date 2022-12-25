import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import Spner from '../../Pages/Shareed/Spenet/Spner';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <Spner></Spner>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;