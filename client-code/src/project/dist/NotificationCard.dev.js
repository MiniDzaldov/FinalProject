// import React from 'react';
// import { notificationCard, cardContent1, redColor } from './style/Styles';
// import { Button } from 'react-bootstrap';
// const NotificationCard = ({ onClose, text }) => {
//     return (
//         <div style={notificationCard}>
//             <div style={cardContent1}>
//                 <h3 style={redColor}>{text}</h3>
//                 <br />
//                 <Button variant="outline-danger" onClick={onClose}>סגירה</Button>
//             </div>
//         </div>
//     );
// };
// export default NotificationCard;
// import React from 'react';
// import { notificationCard, cardContent1, redColor, greenColor } from './style/Styles';
// import { Button } from 'react-bootstrap';
// const NotificationCard = ({ onClose, text, textColor }) => {
//     const cardStyle = {
//         ...notificationCard,
//         color: textColor === 'red' ? redColor : textColor === 'green' ? greenColor : 'yellow' 
//     };
//     return (
//         <div style={cardStyle}>
//             <div style={cardContent1}>
//                 <h3>{text}</h3>
//                 <br />
//                 <Button variant="outline-success" onClick={onClose}>סגירה</Button>
//             </div>
//         </div>
//     );
// };
// export default NotificationCard;
"use strict";