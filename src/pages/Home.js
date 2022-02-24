import React from 'react';
import HomeHeaderCake from "./../Components/cake7.jpg"
import Flower1 from "./../Components/flower2.png"
import styled from "styled-components"
import {Container} from "react-bootstrap";
import Slider from "./../Components/Slider"

const Styles = styled.div `
  .cont {
    position: absolute;
    left: 60%;
    width: 33%;
    height: auto;
    margin-top: 10%;
    backdrop-filter: brightness(70%);
    padding-bottom: 50px;
    z-index: 1;
  }

  .shadow1 {
    background: #eed38a; 
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    padding: 10px;
  }

  .shadow2 {
    background: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    padding: 10px;
  }
  
  .image {
    position: relative;
    z-index: 1;
  }

  .holder {
    margin-top: 20px;
    position: static;
    text-align: center;
    font-family: "Cambria";
  }
  
  .text-holder{
    position: relative;
    height: auto;
    
  }

  .header-text {
    margin-top: 20px;
    margin-bottom: 20px;
    position: static;
    text-align: center;
    font-family: "Cambria";
    font-size: x-large;
  }
  
  .cont1{
    position: static;
    height: 1100px;
  }
  
  .cont2{
    position: absolute;
    
  }

  .flower1 {
    object-fit: cover;
    position: absolute;
    margin-left: 75px;
    margin-top: 80px;
    z-index: 2;
  }
`


const Home =() =>{
    return (
        <Styles>

            <HomeImgComponent />
            <TextBlock/>
            <Slider/>
        </Styles>

    );
}

const TextBlock = () => {
  return(
      <div className="text-holder">
          <Container className="shadow2" >
              <h1 className="holder">HAVING A PARTY?</h1>
              <p className="header-text mx-5">Candy is made by dissolving
                  sugar in water or milk to form a syrup, which is boiled until it reaches
                  the desired concentration or starts to caramelize. Candy comes in a wide variety of textures,
                  from soft and chewy to hard and brittle. The texture of candy depends on the ingredients.</p>
          </Container>
      </div>
  );
}

const HomeImgComponent = () => {
    return (
    <div className="cont1 d-block">
        <div className="img-fluid cont2">
            <img src={HomeHeaderCake} className="img-fluid shadow1 image"/>
        </div>
        <Container className="cont shadow1">
            <h1 className="holder">WELCOME TO OUR BAKERY!</h1>
            <p className="header-text">We make your life sweeter</p>
        </Container>
        <img src={Flower1} className="img-fluid flower1"/>
    </div>
    );
}

export default Home;