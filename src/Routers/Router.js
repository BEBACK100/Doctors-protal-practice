
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import AppointMentpage from '../Pages/AppointMentPage/AppointMentpage';
import ContuctUs from '../Pages/ContuctUs/ContuctUs';
import AddDoctors from '../Pages/DashBoard/AddDoctor/AddDoctors';
import Allusers from '../Pages/DashBoard/Allusers';
import Managedoctors from '../Pages/DashBoard/Managedoctors/Managedoctors';
import MyAppoinment from '../Pages/DashBoard/MyAppoinment';
import Payment from '../Pages/DashBoard/Payment/Payment';


import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/SignUp/Signup';
import AdminRoute from './AdminRoute/AdminRoute';
import DisplayError from './DisplayError';
import PrivateRoute from './PrivateRoute';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <AppointMentpage></AppointMentpage>
            },
            {
                path: '/contuctus',
                element: <PrivateRoute> <ContuctUs></ContuctUs></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppoinment></MyAppoinment>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><Allusers></Allusers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctors',
                element: <AdminRoute><AddDoctors></AddDoctors></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><Managedoctors></Managedoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)
            }
        ]
    }


])