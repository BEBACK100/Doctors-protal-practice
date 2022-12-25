import React from 'react';

const AppointemntCard = ({ AvailableAppointment, settreatment }) => {
    const { name, slots, price } = AvailableAppointment
    return (
        <div className="card  shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name} </h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another Day'} </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} </p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-center">

                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        onClick={() => settreatment(AvailableAppointment)}
                        className="btn btn-primary">Booking Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointemntCard;