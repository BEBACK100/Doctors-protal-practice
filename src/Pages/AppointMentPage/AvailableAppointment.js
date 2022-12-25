import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Spner from '../Shareed/Spenet/Spner';
import AppointemntCard from './AppointemntCard';
import BookingModal from './BookinModal/BookingModal';

const AvailableAppointment = ({ selecteddate }) => {
    const [treatment, settreatment] = useState(null)
    const date = format(selecteddate, 'PP')

    const { data: appointmentdata = [], refetch, isLoading } = useQuery({
        queryKey: format['appointMent', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointMent?date=${date}`)
            const data = await res.json();
            return data;
        }

    })
    if (isLoading) {
        return <Spner></Spner>
    }
    return (
        <div>
            <p className='text-2xl text-blue-600 text-center py-12'>Your Selected Date is: {format(selecteddate, 'PP')}</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    appointmentdata.map(appointcard => <AppointemntCard
                        key={appointcard._id}
                        AvailableAppointment={appointcard}
                        settreatment={settreatment}
                    ></AppointemntCard>)

                }
            </div>

            {treatment &&

                <BookingModal
                    selecteddate={selecteddate}
                    treatment={treatment}
                    refetch={refetch}
                    settreatment={settreatment}
                ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;