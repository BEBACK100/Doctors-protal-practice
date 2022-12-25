import React from 'react';

const TemtimonialCard = ({ patient }) => {
    const { people, descripation, name, location } = patient
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>{descripation} </p>
                    <div className="card-actions ">
                        <div><img src={people} alt="" /></div>
                        <div>
                            <h1>{name} </h1>
                            <h1>{location} </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemtimonialCard;