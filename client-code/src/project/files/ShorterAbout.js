import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import m from '../../pictures/m11.jpg';
import c from '../../pictures/c6.jpg';
import baby from '../../pictures/b5.jpg';
import { greenColor, purpleColor,blackColor, sCard,ImgCard } from '../style/Styles';

export default function ShorterAbout() {
    return (
        <Container>
            <Row className="mb-5">
                <Col md={4} className="mx-1.5">
                    <Card style={sCard}>
                        <Card.Img variant="top" src={m} style={ImgCard} />
                        <Card.Body>
                            <Card.Title>סיוע בארוחות</Card.Title>
                            <Card.Text style={purpleColor}>
                                האפליקציה שלנו מסייעת לאנשי מילואים ומשפחותיהם על ידי ארגון מתנדבים להכנת והבאת ארוחות חמות ישירות לבתיהם.
                            </Card.Text>
                            <a style={purpleColor} href='/About/#meal'><ins>לפרטים נוספים</ins></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mx-1.5">
                    <Card style={sCard}>
                        <Card.Img variant="top" src={baby} style={ImgCard} />
                        <Card.Body>
                            <Card.Title>בייביסיטינג</Card.Title>
                            <Card.Text>
                                אנו מציעים שירותי בייביסיטר ושמירה על ילדים עבור משפחות אנשי המילואים באמצעות רשת מתנדבים מאושרים,
                                להבטיח שקט נפשי ובטיחות מקסימלית בתקופות שירות.
                            </Card.Text>
                            <a style={blackColor} href='/About/#baby'><ins>לפרטים נוספים</ins></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mx-1.5">
                    <Card style={sCard}>
                        <Card.Img variant="top" src={c} style={ImgCard} />
                        <Card.Body>
                            <Card.Title>ניקיון</Card.Title>
                            <Card.Text style={greenColor}>
                                האפליקציה שלנו מקשרת את חיי משפחות אנשי המילואים על ידי קידום שיתוף הפעולה עם מתנדבים לניקיון בית ועזרה יומיומית.
                            </Card.Text>
                            <a style={greenColor} href='/About/#clean'><ins>לפרטים נוספים</ins></a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
