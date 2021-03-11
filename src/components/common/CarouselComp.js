import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useHistory } from 'react-router-dom';

const CarouselComp = () => {
  const history = useHistory();
  return (
    <div className="d-flex justify-content-center shadow-sm p-3 mb-5 bg-body rounded">
      <Carousel className="p-3 me-2 d-block w-100">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/gameroom-93fa3.appspot.com/o/share.jpg?alt=media&token=f1e7154a-cbea-4905-aee4-0f55eeb5150e"
            style={{ height: '600px' }}
            alt="https://picsum.photos/200/300"
          />
          <Carousel.Caption>
            <h3>Valorant</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/gameroom-93fa3.appspot.com/o/fb_image.png?alt=media&token=d7fdcc59-56a3-4ed4-b6ea-c53f0ef7f6f4"
            style={{ height: '600px' }}
            alt="https://picsum.photos/200/300"
          />
          <Carousel.Caption>
            <h3>Counter Strike</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/gameroom-93fa3.appspot.com/o/rainbow-six-siege.jpeg?alt=media&token=9b7ba332-b0d2-495b-8486-d2f4554dc686"
            style={{ height: '600px', width: '95%' }}
            alt="https://picsum.photos/200/300"
          />
          <Carousel.Caption>
            <h3>Rainbow Six Siege</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
