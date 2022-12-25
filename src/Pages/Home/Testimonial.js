import React from 'react';
import TemtimonialCard from './TemtimonialCard';
import img1 from '../../assets/images/people1.png'
import img2 from '../../assets/images/people2.png'
import img3 from '../../assets/images/people3.png'
import qoute from '../../assets/icons/quote.svg'

const Testimonial = () => {
    const patientData = [
        {
            id: 1,

            descripation: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            people: img1,
            name: 'M/Md Raitula hasan',
            location: 'Dhaka'

        },
        {
            id: 2,

            descripation: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            people: img2,
            name: 'M/Md Raitula hasan',
            location: 'Barishal'

        },
        {
            id: 3,

            descripation: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            people: img3,
            name: 'M/Md Raitula hasan',
            location: 'Rangpur'

        },

    ]
    return (
        <div>
            <div className='flex justify-between'>
                <div className='ml-8'>
                    <h1 className='text-cyan-400'>Testmonial</h1>
                    <h1 className='text-4xl'>What Our Patient Says</h1>
                </div>
                <div><img className='w-1/2' src={qoute} alt="" /></div>
            </div>
            <div className='grid lg:grid-cols-3'>
                {
                    patientData.map(patient => <TemtimonialCard
                        key={patient.id}
                        patient={patient}
                    ></TemtimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;