import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { feedbackSlider, feedbackCard, feedbackImage, feedbackText, feedbackRating, sliderButton } from '../style/Styles';

const feedbacks = [
    {
        text: ".הסיוע למשפחת בן-דוד היה כל כך חשוב ומשמעותי עבורי",
        name: "יובל שמואלי",
        rating: 4,
        image: require('../../pictures/user/u2.jpg')
    },
    {
        text: ".תודה! נעזרתי באתר שלכם והוא ממש הציל אותי ואת ילדי",
        name: "יעל לוי",
        rating: 5,
        image: require('../../pictures/user/u10.jpg')
    },
    {
        text: ".בזכותכם היה לי מה להאכיל את הילדים",
        name: "רונית שחר",
        rating: 4,
        image: require('../../pictures/user/u8.jpg')
    },
    {
        text: "המתנדבת שהגיעה אלינו עזרה לנו כל כך הרבה בניקיון הבית. תודה מכל הלב",
        name: "משפחת רז",
        rating: 5,
        image: require('../../pictures/user/u13.jpg')
    },
    {
        text: ".הכנת הארוחות הייתה משימה מאתגרת בשבילנו, תודה לכם על העזרה",
        name: "משפחת כהן",
        rating: 4,
        image: require('../../pictures/user/u17.jpg')
    },
    {
        text: ".הבייביסיטר שהגעתם הייתה נהדרת עם הילדים, תודה רבה",
        name: "משפחת לוי",
        rating: 5,
        image: require('../../pictures/user/u12.jpg')
    },
    
    {
        text: ".השירות שלכם מדהים, תודה לכל המתנדבים הנפלאים על הסיוע",
        name: "משפחת בן-דוד",
        rating: 5,
        image: require('../../pictures/user/u16.jpg')
    },
    {
        text: ".המתנדבת עזרה לנו בצורה כל כך מקצועית ומהירה. תודה רבה",
        name: "משפחת שמואלי",
        rating: 5,
        image: require('../../pictures/user/u14.jpg')
    },
    {
        text: ".לא יודעת איך היינו מסתדרים בלעדיכם, תודה על העזרה הנפלאה",
        name: "משפחת קפלן",
        rating: 4,
        image: require('../../pictures/user/u9.jpg')
    },
    
    {
        text: ".בזכותכם היה לנו הרבה יותר קל, תודה על כל העזרה",
        name: "שירן סלע",
        rating: 4,
        image: require('../../pictures/user/u24.jpg')
    },
    {
        text: ".היה לי נחמד לעזור למשפחת רז, הם היו כל כך נחמדים והעריכו את העזרה",
        name: "עומרי לוי",
        rating: 5,
        image: require('../../pictures/user/u18.jpg')
    },
    {
        text: ".נהניתי להכין ארוחות למשפחת כהן, זה הרגיש כל כך מספק",
        name: "דנה ישראלי",
        rating: 5,
        image: require('../../pictures/user/u5.jpg')
    },
    {
        text: ".הילדים של משפחת לוי היו כל כך חמודים, שמחתי לעזור בבייביסיטר",
        name: "יעל רז",
        rating: 4,
        image: require('../../pictures/user/u6.jpg')
    },
    {
        text: ".לסייע למשפחת ישראלי היה חוויה מרגשת ומעשירה",
        name: "דניאלה כהן",
        rating: 5,
        image: require('../../pictures/user/u1.jpg')
    },
   
    {
        text: ".היה לי תענוג לעזור למשפחת שמואלי, הם היו כל כך נחמדים",
        name: "נועה לוי",
        rating: 5,
        image: require('../../pictures/user/u15.jpg')
    },
    {
        text: ".משפחת קפלן הייתה כל כך מכניסת אורחים, נהניתי מאוד לעזור להם",
        name: "אורן בן-דוד",
        rating: 5,
        image: require('../../pictures/user/u3.jpg')
    },
    {
        text: ".לסייע למשפחת סלע היה חוויה מרגשת ומלאת משמעות",
        name: "איתן כהן",
        rating: 5,
        image: require('../../pictures/user/u4.jpg')
    }
];


const FeedbackSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        const newIndex = (currentIndex + 1) % feedbacks.length;
        setCurrentIndex(newIndex);
    };

    const goToPrevious = () => {
        const newIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
        setCurrentIndex(newIndex);
    };

    return (
        <Container style={feedbackSlider}>
            <h3 className="text-center mb-4">מה המתנדבים והמשפחות שלנו אומרים</h3>
            <Row className="align-items-center justify-content-center">
                <Col xs="auto">
                    <Button className="slider-button" onClick={goToPrevious} style={sliderButton}>
                        <BsChevronLeft />
                    </Button>
                </Col>
                <Col xs={10} md={8}>
                    <Card className="text-center feedback-card" style={feedbackCard}>
                        <Card.Body>
                            <Image src={feedbacks[currentIndex].image} roundedCircle style={feedbackImage} />
                            <Card.Text style={feedbackText}>{feedbacks[currentIndex].text}</Card.Text>
                            <Card.Title>{feedbacks[currentIndex].name}</Card.Title>
                            <div style={feedbackRating}>
                                {Array.from({ length: feedbacks[currentIndex].rating }).map((_, idx) => (
                                    <span key={idx}>⭐</span>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="auto">
                    <Button className="slider-button" onClick={goToNext} style={sliderButton}>
                        <BsChevronRight />
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default FeedbackSlider;