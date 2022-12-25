
import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Authcontext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, settreatment, selecteddate, refetch }) => {
    const { name, slots, price } = treatment;
    const date = format(selecteddate, 'PP')
    const { user } = useContext(Authcontext);
    const hanldesubmit = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const date = form.date.value;
        const booking = {
            appointment: date,
            name,
            Treatment: treatment.name,
            slot,
            email,
            phone,
            price

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.acknowledged) {
                    settreatment(null);

                    toast.success(<div className='flex justify-center items-center h-full'>

                        <div className='w-8 h-12 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
                        <p className='text-7xl font-thin'>Booking is success</p>
                        <div className='w-8 h-12 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-800'></div>
                    </div>)
                    refetch();

                }
                else {
                    toast.error(data.message);
                }

            })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={hanldesubmit} className='grid grid-cols-1  gap-5'>
                        <input name='date' type="text" value={date} className="input input-bordered input-warning w-full " />
                        <select name='slot' className="select select-primary w-full">

                            {
                                slots.map(slot => <option value={slot}>{slot} </option>)
                            }

                        </select>
                        <input type="text" name='name' value={user?.name} placeholder="Your name" className="input input-bordered input-warning w-full " />
                        <input type="text" name='Treatment' value={name} placeholder="" className="input input-bordered input-warning w-full " />
                        <input type="text" name='phone' placeholder="Phone number" className="input input-bordered input-warning w-full " />
                        <input type="text" name='email' defaultValue={user?.email} placeholder="email address" className="input input-bordered input-warning w-full " readOnly />
                        <button className='btn btn-primary'>submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;