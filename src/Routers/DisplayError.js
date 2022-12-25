import React from 'react';
import { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Authcontext } from '../Context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError()
    const { logOut } = useContext(Authcontext)
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <h1 className="text-3xl text-red-500">Something went Wrong</h1>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className="text-3xl"> Please <button onClick={handleLogOut}>Sign out</button> and log back in</h4>
        </div>
    );
};

export default DisplayError;