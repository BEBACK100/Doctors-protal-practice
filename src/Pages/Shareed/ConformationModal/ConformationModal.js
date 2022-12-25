import React from 'react';

const ConformationModal = ({ title, message, successbtnName, closemodal, modalData, success }) => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="conformation-modal" className="btn">open modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="conformation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-red-700 text-3xl">{title}</h3>
                    <p className="py-4 text-2xl">{message}</p>
                    <div className="modal-action">
                        <label
                            onClick={() => success(modalData)}
                            htmlFor="conformation-modal" className="btn">{successbtnName}</label>
                        <button onClick={closemodal} className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConformationModal;