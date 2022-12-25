import React from 'react';
import doctorbg from '../../assets/images/appointment.png'

const Contuct = () => {
    return (

        <div style={
            { background: `url(${doctorbg})` }
        } className='w-full mx-auto text-center  my-16 py-10 gap-5 '>
            <div>
                <div>
                    <h1 className='text-cyan-300 my-8 font-bold'>Contuct Us</h1>
                    <h1 className='text-4xl my-8 text-white'>Stay connected with us</h1>
                </div>



                <div> <input type="text" placeholder="Email " className="input input-bordered input-sm w-full max-w-xs" /></div>
                <div> <input type="text" placeholder="Subject " className="input input-bordered input-sm w-full max-w-xs my-8" /></div>

                <div> <input type="text" placeholder="Message" className="input input-bordered input-lg w-full max-w-xs" /></div>

                <button className="btn bg-cyan-500 my-12 mt-12 px-5">Submit</button>
            </div>
        </div>
    );
};

export default Contuct;