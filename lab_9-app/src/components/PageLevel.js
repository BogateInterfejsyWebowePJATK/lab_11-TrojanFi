import React from 'react';
import Card from 'react-bootstrap/Card';
import './../App.css';

 function EasyQuiz(props) {
    return (
        <Card>
        <Card.Body className="CardEasyQuiz">This is {props.name}</Card.Body>
    </Card>
    )
}
export default EasyQuiz;