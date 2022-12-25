import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import Spner from '../../Shareed/Spenet/Spner';
import CheckOutform from './CheckOutform';



const stripePromise = loadStripe('pk_test_51MIbgBD0wxpHODVkRPfuiWXkDLkleDUY9FbA12aTwLpc7gqQxP9tENUgg0Aw0sERRW2e355zLv6xz6764KBILsNB00lEEN2YNU');
console.log(stripePromise);
const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { Treatment, price, appointmentDate, slot } = booking;
    if (navigation.state === 'loading') {
        return <Spner></Spner>
    }
    return (
        <div>
            <h2 className="text-3xl">Payment for {Treatment}</h2>
            <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutform
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;