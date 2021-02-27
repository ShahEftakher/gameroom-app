import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useHistory } from "react-router-dom";

const CarouselComp = () => {
  const history = useHistory();
  return (
    <div className="d-flex w-75 justify-content-center">
      <Carousel className="p-3 me-2 d-block w-100">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/150"
            style={{ height: "600px" }}
            alt="First slide"
            onClick={() => {
              history.push("/category");
            }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/150"
            style={{ height: "600px" }}
            alt="Second slide"
            onClick={() => {
              history.push("/category");
            }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/150"
            style={{ height: "600px" }}
            alt="Third slide"
            onClick={() => {
              history.push("/category");
            }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
