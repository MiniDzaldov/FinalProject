import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundImageCarousel from './BackgroundImageCarousel'; // Adjust the path as necessary

export default function HomePage() {
  const navigate = useNavigate();
  const s = { "backgroundColor": "green" };
  const a = { "color": "white", "backgroundColor": "#FF9900", "borderColor": "#FF9900" };

  const images = [
    require('../pictures/soldires/1.jpg'),
    require('../pictures/soldires/2.jpg'),
    require('../pictures/soldires/3.jpg'),
    require('../pictures/soldires/4.jpg'),
    require('../pictures/soldires/5.jpg'),
    require('../pictures/soldires/6.jpg'),
    require('../pictures/soldires/7.jpg'),
    require('../pictures/soldires/8.jpg'),
    require('../pictures/soldires/9.jpg'),
    require('../pictures/soldires/10.jpg'),
    require('../pictures/soldires/11.jpg'),
    require('../pictures/soldires/12.jpg'),
    require('../pictures/soldires/13.jpg'),
    require('../pictures/soldires/14.jpg'),
    require('../pictures/soldires/15.jpg'),
    require('../pictures/soldires/16.jpg'),
    require('../pictures/soldires/17.jpg'),
    require('../pictures/soldires/18.jpg'),
    require('../pictures/soldires/19.jpg'),
    require('../pictures/soldires/20.jpeg'),
    require('../pictures/soldires/21.jpeg'),
    require('../pictures/soldires/22.jpg'),
    require('../pictures/soldires/23.jpg'),
    require('../pictures/soldires/24.jpg'),
    require('../pictures/soldires/25.jpg'),
    require('../pictures/soldires/26.jpg'),
  ];

  return (
    <>
      <BackgroundImageCarousel images={images} interval={5000} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* <h1>Welcome to Our Site</h1> */}
        {/* Add your page content here */}
      </div>
    </>
  );
}
