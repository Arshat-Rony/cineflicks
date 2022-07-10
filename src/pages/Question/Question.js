import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs'
import "./Question.scss"

const Question = ({ item }) => {
    const [isOn, setIsOn] = useState(false)
    const { question, answer } = item;
    return (
        <div className='question_answer'>
            <p onClick={() => setIsOn(!isOn)} className='question'>{question} {
                isOn ? <span style={{ display: "block" }}>X</span> : <BsPlusLg />
            } </p>
            {
                isOn && <p className='answer'>{answer}</p>
            }
        </div>
    );
};

export default Question;