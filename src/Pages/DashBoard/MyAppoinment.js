import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Context/AuthProvider';

const MyAppoinment = () => {
    const { user } = useContext(Authcontext);
    const url = `http://localhost:5000/booking?email=${user?.email}`
    const { data: booking = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accesstoken')}`
                }
            });
            const data = await res.json();
            return data
        }
    })
    return (
        <div>
            <h1 className='text-3xl'>My Booking</h1>
            <div className="overflow-x-auto mt-5">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Payment</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>

                        {booking &&
                            booking.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.Treatment}</td>
                                <td>{booking.appointment}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`} ><button
                                            className='btn btn-primary'>Pay</button></Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-green-600'>Paid</span>}
                                </td>
                                <td>{booking.slot}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;