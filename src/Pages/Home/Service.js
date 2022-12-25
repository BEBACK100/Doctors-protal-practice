import React from 'react';

const Service = ({ service }) => {
    const { img, title, descripation } = service
    return (
        <div>
            <div className="card  shadow-xl">
                <div><img className='mx-auto' src={img} alt="" /></div>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">{title} </h2>
                    <p>{descripation} </p>

                </div>
            </div>
        </div>
    );
};

export default Service;