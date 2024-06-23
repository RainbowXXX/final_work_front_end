import React from 'react';
import { Carousel } from 'antd';

const CarouselComponent: React.FC = () => {
  return (
    <Carousel autoplay>
      <div>
        <img src="https://via.placeholder.com/800x300?text=Slide+1" alt="Slide 1" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x300?text=Slide+2" alt="Slide 2" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x300?text=Slide+3" alt="Slide 3" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x300?text=Slide+4" alt="Slide 4" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
