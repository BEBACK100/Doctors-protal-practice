import React from 'react';

const Card = ({ card }) => {
    const { iconimg, descripation, title, bgClass } = card
    return (
        <div className={`card w shadow-xl ${bgClass} flex`}>
            <div className='flex'>
                <div><figure className="px-10 pt-10">
                    <img src={iconimg} alt="" className="rounded-xl pb-5 " />
                </figure></div>
                <div className="card-body text-white ">
                    <h2 className="card-title">{title} </h2>
                    <p>{descripation} </p>

                </div>
            </div>
        </div>
    );
};

export default Card;