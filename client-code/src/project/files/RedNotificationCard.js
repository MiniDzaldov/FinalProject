import React from 'react';
import { notificationCard, cardContent1, redColor } from '../style/Styles';
import { Button } from 'react-bootstrap';

const RedNotificationCard = ({ onClose, text }) => {
    return (
        <>
        <div style={notificationCard}>
            <div style={cardContent1}>
                <h3 style={redColor}>{text}</h3>
                <br />
                <Button variant="outline-danger" onClick={onClose}>סגירה</Button>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </>
    );
};
export default RedNotificationCard;

