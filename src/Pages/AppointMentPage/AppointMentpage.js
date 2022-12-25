import React, { useState } from 'react';
import AppointmentMain from './AppointmentMain';
import AvailableAppointment from './AvailableAppointment';

const AppointMentpage = () => {
    const [selecteddate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentMain
                selecteddate={selecteddate}
                setSelectedDate={setSelectedDate}
            ></AppointmentMain>
            <AvailableAppointment
                selecteddate={selecteddate}></AvailableAppointment>
        </div>
    );
};

export default AppointMentpage;