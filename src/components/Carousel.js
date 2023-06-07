import React, { useState } from 'react';
import "../styles/pages.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import reactLogo from "../assets/react-logo.png";
import postgreSqlLogo from "../assets/Postgresql_elephant.svg.png"

const MyCarousel = () => {
  const carouselItems = [
    { id: 1, content: <img src='https://user-images.githubusercontent.com/93789562/152684029-2a8f9e9c-064c-4186-91e3-1ffbd61a5b4e.png' alt='project1'></img> },
    { id: 2, content: <img src='https://user-images.githubusercontent.com/93789562/152684036-bc96650b-18d4-4dbf-90d7-eb6166d062de.png' alt='project2'></img> },
    { id: 3, content: <img src='https://user-images.githubusercontent.com/93789562/152684290-3c6a1905-75b4-4dea-9b32-fc30bf84a11d.png' alt='project3'></img> },
  ];

  const [currentItem, setCurrentItem] = useState(0);

  const handleCarouselChange = (index) => {
    setCurrentItem(index);
  };

  const reactVis = currentItem < 3 ? "visible" : "invisible";

  return (
    <>
      <Carousel className='carousel' onChange={handleCarouselChange}>
        {carouselItems.map(item => (
          <div key={item.id}>
            <h3>{item.content}</h3>
          </div>
        ))}
      </Carousel>
      <div className='link-container'>
      <a className='code-link' href="https://cee-lo.surge.sh/game.html"> CEE LO</a>
      <a className='code-link'href='https://github.com/Randall-Rous3/Cee-Lo'>Repo</a>
      </div>
      <div className="logo-container">
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
      </div>
    </>
  );
};

export default MyCarousel;

