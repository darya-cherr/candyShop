import React from 'react';
import {Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import SliderCake from "./image/cake8.jpg"
import SliderCake2 from "./image/cake11.jpg"
import SliderCake3 from "./image/cake10.jpg"
import styled from "styled-components"

const Styles = styled.div `
  .text{
    font-family: "Cambria";
  }

  .shadow3 {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  }
  
`

function Slider(){
    return (
        <Styles>
        <Carousel  className="shadow3 px-0 pt-0">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={SliderCake}
                    alt="FirstSlide"
                />
                <Carousel.Caption>
                    <h3 className="text">SWEETS WITH LOVE</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={SliderCake2}
                    alt="SecSlide"
                />
                <Carousel.Caption >
                    <h3 className="text">BEAUTIFUL DESIGNS</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={SliderCake3}
                    alt="ThirdSlide"
                />
                <Carousel.Caption>
                    <h3 className="text">DESSERTS FOR EVERY TASTE</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Styles>
    );
}
export default Slider;