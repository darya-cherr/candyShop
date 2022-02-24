import React from 'react';
import {Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import SliderCake from "./cake8.jpg"
import styled from "styled-components"

const Styles = styled.div `
  .cont {
    position: static;
    
   
  }
`

function Slider(){
    return (
        <Styles>
        <Carousel className="cont">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={SliderCake}
                />
            </Carousel.Item>

        </Carousel>
        </Styles>
    );
}
export default Slider;