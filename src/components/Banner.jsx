
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import One from "../assets/one.jpg";
import Three from "../assets/three.jpg";
import Two from "../assets/two.jpg";

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item className='main_item'>
      <img className='w-100' src={One} alt="" />
      <Carousel.Caption>
        <h3>One</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='main_item'>
      <img className='w-100' src={Two} alt="" />
      <Carousel.Caption>
        <h3>Twol</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='main_item'>
      <img className='w-100' src={Three} alt="" />
      <Carousel.Caption>
        <h3>Three</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Banner