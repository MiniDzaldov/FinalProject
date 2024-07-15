import React, { useEffect, useState } from 'react';

const BackgroundImageCarousel = ({ images, interval = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const switchImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const imageSwitchInterval = setInterval(switchImage, interval);

    return () => clearInterval(imageSwitchInterval);
  }, [images, interval]);

  const currentImage = images[currentImageIndex];

  return (
    <div style={{
      width: '100%',
      height: '90vh', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      transition: 'background-image 1s ease-in-out',
      backgroundImage: `url(${currentImage})`,
      backgroundColor: currentImage ? 'transparent' : 'red'
    }}>
      
    </div>
  );
};

export default BackgroundImageCarousel;
