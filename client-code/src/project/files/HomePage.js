import React from 'react';
import { Container } from 'react-bootstrap';
import BackgroundImageCarousel from './BackgroundImageCarousel';
import Navbarr from './Navbarr';
import ShorterAbout from './ShorterAbout';
import FeedbackSlider from './FeedbackSlider';
import {containerHomePage, marginButton4rem} from '../style/Styles';

const HomePage = () => {
    const images = [
        require('../../pictures/soldires/1.jpg'),
        require('../../pictures/soldires/2.jpg'),
        require('../../pictures/soldires/3.jpg'),
        require('../../pictures/soldires/4.jpg'),
        require('../../pictures/soldires/5.jpg'),
        require('../../pictures/soldires/6.jpg'),
        require('../../pictures/soldires/7.jpg'),
        require('../../pictures/soldires/8.jpg'),
        require('../../pictures/soldires/9.jpg'),
        require('../../pictures/soldires/10.jpg'),
        require('../../pictures/soldires/11.jpg'),
        require('../../pictures/soldires/12.jpg'),
        require('../../pictures/soldires/13.jpg'),
        require('../../pictures/soldires/14.jpg'),
        require('../../pictures/soldires/15.jpg'),
        require('../../pictures/soldires/16.jpg'),
        require('../../pictures/soldires/17.jpg'),
        require('../../pictures/soldires/18.jpg'),
        require('../../pictures/soldires/19.jpg'),
        require('../../pictures/soldires/20.jpeg'),
        require('../../pictures/soldires/21.jpeg'),
        require('../../pictures/soldires/22.jpg'),
        require('../../pictures/soldires/23.jpg'),
        require('../../pictures/soldires/24.jpg'),
        require('../../pictures/soldires/25.jpg'),
        require('../../pictures/soldires/26.jpg'),
    ];

    return (
        <>
            <BackgroundImageCarousel images={images} interval={5000} />
            <div style={containerHomePage}>
                <Container>
                    <h3 className="text-center mb-5">אתר תיווך בין משפחות אנשי מילואים למגישי עזרה בתחומים שונים</h3>
                    <ShorterAbout />
                    <div style={marginButton4rem}></div>
                    <FeedbackSlider />
                </Container>
            </div>
            <Navbarr />
        </>
    );
};
export default HomePage;
