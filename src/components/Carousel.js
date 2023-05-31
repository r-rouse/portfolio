import React from 'react';
import "../styles/pages.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
  const carouselItems = [
 {id: 1, content:   <img src='https://user-images.githubusercontent.com/93789562/152684029-2a8f9e9c-064c-4186-91e3-1ffbd61a5b4e.png'></img>},
 {id: 2, content:   <img src='https://user-images.githubusercontent.com/93789562/147174852-b30ccb36-2ace-4a77-b210-98d2ce5ea6ef.png'></img>},
 {id: 3, content:   <img src='https://user-images.githubusercontent.com/93789562/152684480-c3ecc463-755b-43c8-878d-15e3ffab7561.png'></img>},
 

  ];

  return (
    <Carousel className='carousel'>
      {carouselItems.map(item => (
        <div key={item.id}>
          <h3>{item.content}</h3>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
