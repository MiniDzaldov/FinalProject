import React from 'react';
import { notificationCard, cardContent1,greenColor } from '../style/Styles';
import { Button } from 'react-bootstrap';

const GreenNotificationCard = ({ onClose, text }) => {
    return (
        <div style={notificationCard}>
            <div style={cardContent1}>
                <h3 style={greenColor}>{text}</h3>
                <br />
                <Button variant="outline-success" onClick={onClose}>סגירה</Button>
            </div>
        </div>
    );
};

export default GreenNotificationCard;

