import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Context/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(Authcontext)

    const handlelogOut = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'><button className="btn btn-outline btn-primary">Home</button></Link></li>
                            <li><Link to='/'><button className="btn btn-outline btn-primary">About Us</button></Link></li>
                            <li><Link to='/'><button className="btn btn-outline btn-primary">Appointment</button></Link></li>
                            <li><Link to='/'><button className="btn btn-outline btn-primary">Reviews</button></Link></li>
                            <li><Link to='/'><button className="btn btn-outline btn-primary">Contuct Us</button></Link></li>

                            {user?.uid ?
                                <button className="btn btn-outline btn-primary">Sign Out</button> :
                                <Link to='/login'><button className="btn btn-outline btn-primary">Login</button></Link>}


                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        <li><Link to='/'><button className="btn btn-outline btn-primary">Home</button></Link></li>
                        <li><Link to='/contuctus'><button className="btn btn-outline btn-primary">About Us</button></Link></li>
                        <li><Link to='/appointment'><button className="btn btn-outline btn-primary">Appointment</button></Link></li>
                        <li><Link to='/'><button className="btn btn-outline btn-primary">Reviews</button></Link></li>
                        <li><Link to='/'><button className="btn btn-outline btn-primary">Contuct Us</button></Link></li>

                        {user?.uid ?
                            <>
                                <li><Link to='/dashboard'><button className="btn btn-outline btn-primary">DashBoard</button></Link></li>
                                <button onClick={handlelogOut} className="btn btn-outline btn-primary">Sign Out</button>
                            </>

                            :
                            <li><Link to='/login'><button className="btn btn-outline btn-primary">Login</button></Link></li>}

                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <p>Sidebar</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;