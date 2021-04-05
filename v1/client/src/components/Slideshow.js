import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import reduxLogo from '../assets/logo512.png'
import slideOne from '../assets/riccardo-annandale-7e2pe9wjL9M-unsplash.jpg'
import slideTwo from '../assets/nasa-Q1p7bh3SHj8-unsplash.jpg'
import slideThree from '../assets/ilya-pavlov-OqtafYT5kTw-unsplash.jpg'

const Slideshow = (props) => {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={slideOne}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Let Yourself Shine</h3>
            <p>.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={slideTwo}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Connect to the World</h3>
            <p>.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={slideThree}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Build a Smart Portfolio</h3>
            <p>
              .
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default Slideshow