// import React, { useState } from 'react';
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// const FeedbackSlider = ({ texts }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const goToNext = () => {
//         const newIndex = (currentIndex + 1) % texts.length;
//         setCurrentIndex(newIndex);
//     };
//     const goToPrevious = () => {
//         const newIndex = (currentIndex - 1 + texts.length) % texts.length;
//         setCurrentIndex(newIndex);
//     };
//     return (
//         <Container className="image-slider">
//             <Row className="align-items-center justify-content-center">
//                 <Col xs="auto">
//                     <Button className="slider-button" onClick={goToPrevious} style={{ backgroundColor: 'lightblue', border: 'none' }}>
//                         <BsChevronLeft />
//                     </Button>
//                 </Col>
//                 <Col xs={8} md={6}>
//                     <Card className="text-center" style={{ height: '10rem' }}>
//                         <Card.Body style={{ backgroundColor: 'lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                             <Card.Text style={{ textAlign: 'center' }}>{texts[currentIndex]}</Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col xs="auto">
//                     <Button className="slider-button" onClick={goToNext} style={{ backgroundColor: 'lightblue', border: 'none' }}>
//                         <BsChevronRight />
//                     </Button>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };
// export default FeedbackSlider;
"use strict";