import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConformationModal from '../../Shareed/ConformationModal/ConformationModal';
import Spner from '../../Shareed/Spenet/Spner';

const Managedoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const closemodal = () => {
        setDeletingDoctor(null)
    }

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeletdoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    refetch();
                    toast.success(`Doctor ${doctor.name} is deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Spner></Spner>
    }
    return (
        <div>
            <h2 className="text-3xl">Manage Doctors:{doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={doctor.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td> <label onClick={() => setDeletingDoctor(doctor)} htmlFor="conformation-modal" className="btn btn-sm btn-error">Delete</label></td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConformationModal
                    title={`Are you sure You want to delet This??`}
                    message={`if you delet ${deletingDoctor.name}. it can not regain`}
                    closemodal={closemodal}
                    success={handleDeletdoctor}
                    successbtnName="Delet"
                    modalData={deletingDoctor}
                ></ConformationModal>
            }
        </div>
    );
};

export default Managedoctors;