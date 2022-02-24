import React from 'react';
import HomeHeaderCake from "./../Components/cake7.jpg"
import Flower1 from "./../Components/flower2.png"
import styled from "styled-components"
import {Container} from "react-bootstrap";

const Styles = styled.div `

  .cont {
    position: absolute;
    left: 60%;
    width: 33%;
    height: auto;
    margin-top: 10%;
    backdrop-filter: brightness(70%);
  }

  .shadow {
    background: #eed38a; /* Цвет фона */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0); /* Параметры тени */
    padding: 10px;
  }

  .image {
    position: absolute;
  }

  .holder {
    margin-top: 20px;
    position: relative;
    text-align: center;
    font-family: "Cambria";
  }

  .header-text {
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
    text-align: center;
    font-family: "Cambria";
    font-size: x-large;
  }

  .flower1 {
    object-fit: cover;
    position: absolute;
    margin-left: 100px;
    margin-top: 80px;
  }
`


const Home =() =>{
    return (
        <Styles>
            <div>
            <div className="img-fluid">
                <img src={HomeHeaderCake} className="img-fluid shadow image"/>
                <img src={Flower1} className="img-fluid flower1"/>
            </div>
            <Container className="cont shadow">
                <h1 className="holder">WELCOME TO OUR BAKERY!</h1>
                <p className="header-text">We make your life sweeter</p>
            </Container>
        </div>
        </Styles>
    );
}

export default Home;