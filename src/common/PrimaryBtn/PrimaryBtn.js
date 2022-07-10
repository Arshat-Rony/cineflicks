import React from 'react';
import './PrimaryBtn.scss'
const PrimaryBtn = ({ text }) => {
    return (
        <button className='primary__btn'>
            {text}
        </button>
    );
};

export default PrimaryBtn;