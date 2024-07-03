// import React, { useEffect, useState } from 'react';
// // import './BackgroundImageCarousel.css';
// import {backgroundImageCarousel} from './style/Styles'
// const BackgroundImageCarousel = ({ images, interval = 5000 }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   useEffect(() => {
//     const switchImage = () => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };
//     const imageSwitchInterval = setInterval(switchImage, interval);
//     return () => clearInterval(imageSwitchInterval);
//   }, [images, interval]);
//   return (
//     <>
//     {/* <div style={backgroundImageCarousel}> */}
//     <div  style={{ position:'fixed',
//     top: '0',
//     left: '0',
//     width: '100%',
//     height:' 100%',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     transition: 'background-image 1s ease-in-out',
//     zIndex:' -1',
//      backgroundImage: `url(${images[currentImageIndex]})` }}>
//       {/* Additional content can be added here */}
//     {/* </div> */}
//     </div>
//     </>
//   );
// };
// export default BackgroundImageCarousel;
"use strict";