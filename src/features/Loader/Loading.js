import React from 'react';
import ReactLoading from 'react-loading';
import "./Loading.scss"
const Loading = ({ type, color }) => {
    return (
        <div className='loading'>
            <ReactLoading type={type} color={color} height={100} width={100} />
        </div>
    );
};

export default Loading;