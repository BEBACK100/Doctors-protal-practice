import React from 'react';
import doctorbg from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'

const Appointment = () => {
    return (

        <section className='mt-32 my-16'>
            <div style={
                { background: `url(${doctorbg})` }
            } className="hero h-1/2 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="max-w-sm rounded-lg hidden-sm shadow-2xl -mt-32 " />
                    <div className='mx-auto w-1/2 px-5 text-white'>
                        <p className='trxt-blue-300 font-bold'>Appointment</p>
                        <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                        <p className="py-6 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary">Get Started</button>


                    </div>
                </div>
            </div>
        </section>

    );
};

export default Appointment;