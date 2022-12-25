import React from 'react';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import Card from './Card';

const BannerCards = () => {
    const cardsData = [
        {
            id: 1,
            title: 'Opening Hours',
            descripation: 'open 9am to 5pm',

            iconimg: clock,
            bgClass: 'bg-primary'

        },
        {
            id: 2,
            title: 'Visit our location',
            descripation: 'Barisal, Wazirpur',

            iconimg: location,
            bgClass: 'bg-black'

        },
        {
            id: 1,
            title: 'Contuct us now',
            descripation: '01235465655555555',

            iconimg: phone,
            bgClass: 'bg-primary'

        }
    ]
    return (
        <div>
            <div className='flex grid lg:grid-cols-3 gap-3 my-5 mx-4'>
                {cardsData.map(card => <Card
                    key={card.id}
                    card={card}
                ></Card>)}


            </div>

        </div>
    );
};

export default BannerCards;