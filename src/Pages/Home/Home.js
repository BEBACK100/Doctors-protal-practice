import React from 'react';
import Appointment from './Appointmen/Appointment';
import Banner from './Banner/Banner';
import BannerCards from './BannerCards';
import Contuct from './Contuct';
import Ourservices from './Ourservices';
import ServeDent from './ServeDent';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <h1>This Hoem page</h1>
            <Banner></Banner>
            <BannerCards></BannerCards>
            <Ourservices></Ourservices>
            <ServeDent></ServeDent>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contuct></Contuct>
        </div>
    );
};

export default Home;