// import React, { useState } from 'react';
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; // ייבוא סמלים לחצים
// const ImageSlider = ({ images }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const goToNext = () => {
//         const newIndex = (currentIndex + 1) % images.length;
//         setCurrentIndex(newIndex);
//     };
//     const goToPrevious = () => {
//         const newIndex = (currentIndex - 1 + images.length) % images.length;
//         setCurrentIndex(newIndex);
//     };
//     return (
//         <div className="image-slider">
//             <button className="slider-button" onClick={goToPrevious}>
//                 <BsChevronLeft />
//             </button>
//             <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
//             <button className="slider-button" onClick={goToNext}>
//                 <BsChevronRight />
//             </button>
//         </div>
//     );
// };
// export default ImageSlider;
// import React, { useState } from 'react';
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; // ייבוא סמלים לחצים
// import {imageSlider, sliderButton, itemContainer,item} from './style/Styles';
// const ImageSlider = ({ items }) => {
//     const [currentIndex, setCurrentIndex] = useState(1); // מערך מצביע ל
//     const goToNext = () => {
//         const newIndex = (currentIndex + 1) % items.length;
//         setCurrentIndex(newIndex);
//     };
//     const goToPrevious = () => {
//         const newIndex = (currentIndex - 1 + items.length) % items.length;
//         setCurrentIndex(newIndex);
//     };
//     const texts = [
//         "טקסט ראשון",
//         "טקסט שני",
//         // הוסף עוד טקסטים לפי הצורך
//     ];
//     return (
//         <div style={imageSlider}>
//             <button style={sliderButton} onClick={goToPrevious}>
//                 <BsChevronLeft />
//             </button>
//             <div style={itemContainer}>
//                 <div /*style={item}*/>
//                     {items[currentIndex]}
//                 </div>
//             </div>
//             <button className="slider-button" onClick={goToNext}>
//                 <BsChevronRight />
//             </button>
//         </div>
//     );
// };
// export default ImageSlider;
"use strict";