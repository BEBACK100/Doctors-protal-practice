import React from 'react';
import icon1 from '../../assets/images/fluoride.png'
import icon2 from '../../assets/images/cavity.png'
import icon3 from '../../assets/images/fluoride.png'
import Service from './Service';
const Ourservices = () => {
    const serviceData = [
        {
            id: 1,
            img: icon1,
            title: 'Oride Tretment',
            descripation: 'Find Dentist In Florida. Near You. All the Answers. Fast and Trustworthy. Discover Us Now. Easy to Access. Simple to Use. Multiple Sources Combined. Services: Information, Combined Web Results, Easy & Fast, 99% Match.'
        },
        {
            id: 2,
            img: icon2,
            title: 'Cavity filing',
            descripation: 'Find Dentist In Florida. Near You. All the Answers. Fast and Trustworthy. Discover Us Now. Easy to Access. Simple to Use. Multiple Sources Combined. Services: Information, Combined Web Results, Easy & Fast, 99% Match.'
        },
        {
            id: 3,
            img: icon3,
            title: 'Teeth Whitening',
            descripation: 'Find Dentist In Florida. Near You. All the Answers. Fast and Trustworthy. Discover Us Now. Easy to Access. Simple to Use. Multiple Sources Combined. Services: Information, Combined Web Results, Easy & Fast, 99% Match.'
        }
    ]
    return (
        <div>
            <div className='my-8 py-5 text-center'>
                <p className='text-blue-400 font-bold'>Our Services</p>
                <h1 className='text-4xl mt-5'>Services we Provided</h1>
            </div>
            <div className='grid lg:grid-cols-3 my-5 gap-5'>
                {
                    serviceData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Ourservices;