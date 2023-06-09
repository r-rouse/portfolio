import React, { useState } from 'react';
import "../styles/pages.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ceeLoDescription } from '../constants/aboutMe';
import { wienersDescription } from '../constants/aboutMe';
import { creatureDescription } from '../constants/aboutMe';
import { calPalDescription } from '../constants/aboutMe';

const MyCarousel = () => {
  const carouselItems = [
    { id: 1, content: <img src='https://user-images.githubusercontent.com/93789562/152684029-2a8f9e9c-064c-4186-91e3-1ffbd61a5b4e.png' alt='project1'></img> },
    { id: 2, content: <img src='https://user-images.githubusercontent.com/93789562/152684036-bc96650b-18d4-4dbf-90d7-eb6166d062de.png' alt='project2'></img> },
    { id: 3, content: <img src='https://user-images.githubusercontent.com/93789562/152684290-3c6a1905-75b4-4dea-9b32-fc30bf84a11d.png' alt='project3'></img> },
  ];
  const carouselItems2 = [
    { id: 1, content: <img src='https://user-images.githubusercontent.com/93789562/147174852-b30ccb36-2ace-4a77-b210-98d2ce5ea6ef.png' alt='project1'></img> },
    { id: 2, content: <img src='https://user-images.githubusercontent.com/93789562/147174834-e5fb50f0-f761-4cc9-a282-aa2deeabaa36.png' alt='pic'></img> },
    { id: 3, content: <img src='https://user-images.githubusercontent.com/93789562/147174847-a29b88a3-627b-4a9c-83db-d8c107e19d8d.png' alt='pic'></img> },
  ];
  const carouselItems3 = [
    { id: 1, content: <img src='https://user-images.githubusercontent.com/93789562/152684480-c3ecc463-755b-43c8-878d-15e3ffab7561.png' alt='project1'></img> },
    { id: 2, content: <img src='https://user-images.githubusercontent.com/93789562/152684485-5f97bc24-dc41-45d4-8084-399a26f37380.png' alt='pic'></img> },
    { id: 3, content: <img src='https://user-images.githubusercontent.com/93789562/152684488-685c4669-a71e-44f9-8ef0-b75ff4378e98.png' alt='pic'></img> },
    { id: 4, content: <img src='https://user-images.githubusercontent.com/93789562/152684490-bac6b69c-3e80-4daa-aed7-f4060af3e295.png' alt='pic'></img> },
  ];
  const carouselItems4 = [
    { id: 1, content: <img src='https://user-images.githubusercontent.com/93789562/244234039-a3f34dee-f3eb-48d3-9def-4bd5f3199156.png' alt='project1'></img> },
    { id: 2, content: <img src='https://user-images.githubusercontent.com/93789562/244234044-45dae6bb-8750-4007-a062-0a573da5571e.png' alt='pic'></img> },
    { id: 3, content: <img src='https://user-images.githubusercontent.com/93789562/244234048-68ee0b39-ea07-48cf-9659-8f85598e2753.png' alt='pic'></img> },
    { id: 4, content: <img src='https://user-images.githubusercontent.com/93789562/244234063-d6d8950c-d38c-417d-b838-9e58faba8f06.png' alt='pic'></img> },
  ];
  const [, setCurrentItem] = useState(0);

  const handleCarouselChange = (index) => {
    setCurrentItem(index);
  };

  // const reactVis = currentItem < 3 ? "visible" : "invisible";

  return (
    <>
      <div className='carousel-container'>
        <div className='carousel-info-container'>
          <Carousel className='carousel' onChange={handleCarouselChange}>
            {carouselItems.map(item => (
              <div key={item.id}>
                <h3>{item.content}</h3>
              </div>
            ))}
          </Carousel>
          {/* <div className="logo-container">
          <img
            src={reactLogo}
            className={`react-logo-${reactVis}`}
            alt="React Logo"
          />
          <img
            src={postgreSqlLogo}
            className={`postgres-logo-${reactVis}`}
            alt="Postgres-Logo"
          />
        </div> */}
          <div className='info-container'>{ceeLoDescription}</div>
        </div>
        <div className='link-container'>
            <a className='code-link' href="https://cee-lo.surge.sh/game.html"> CEE LO</a>
            <a className='code-link' href='https://github.com/Randall-Rous3/Cee-Lo'>Repo</a>
          </div>
        <div className='carousel-info-container'>
          <Carousel className='carousel' onChange={handleCarouselChange}>
            {carouselItems2.map(item => (
              <div key={item.id}>
                <h3>{item.content}</h3>
              </div>
            ))}
          </Carousel>
          <div className='info-container'>{wienersDescription}</div>
        </div>
        <div className='carousel-info-container'>
          <Carousel className='carousel' onChange={handleCarouselChange}>
            {carouselItems3.map(item => (
              <div key={item.id}>
                <h3>{item.content}</h3>
              </div>
            ))}
          </Carousel>
          <div className='info-container'>{ creatureDescription}</div>
        </div>
        <div className='carousel-info-container'>
          <Carousel className='carousel' onChange={handleCarouselChange}>
            {carouselItems4.map(item => (
              <div key={item.id}>
                <h3>{item.content}</h3>
              </div>
            ))}
          </Carousel>
          <div className='info-container'>{calPalDescription}</div>
        </div>
      </div>
    </>
  );
};

export default MyCarousel;

