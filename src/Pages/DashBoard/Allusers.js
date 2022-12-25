import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const Allusers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();

            return data;
        }
    })

    const handleMakeadmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {

            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Success')
                    refetch()
                }
                console.log(data)
            })
    }
    return (

        <div>
            <h1 className='text-3xl font-bold'>All users are here</h1>
            <table className="table table-zebra w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, i) => <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.Name}</td>
                            <td>{user.email}</td>

                            <td>{user?.role !== 'admin' && <button onClick={() =>
                                handleMakeadmin(user._id)}
                                className="btn btn-active btn-primary">Make Admin</button>}</td>
                            <td><button className="btn btn-active btn-secondary">Delete</button></td>
                            <td>{user.slot}</td>
                        </tr>)

                    }
                </tbody>
            </table>
        </div>
    );
};

export default Allusers;