import React from 'react';
import './Question.module.css';

const Question = (props) => {
    return (
        <h1>{props.question}</h1>
    );
}

export default Question;