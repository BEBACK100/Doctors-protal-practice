import { format } from 'date-fns';
import React, { useState } from 'react';

import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'


const AppointmentMain = ({ selecteddate, setSelectedDate }) => {


    return (
        <div>


            <div style={
                { background: `url(${bg})` }} className="hero ">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Calander!</h1>
                        <p className="py-6">  <DayPicker
                            mode="single"
                            selected={selecteddate}
                            onSelect={setSelectedDate}
                        /></p>



                    </div>
                </div>
            </div>


        </div>
    );
};

export default AppointmentMain;