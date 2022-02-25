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
    position: absolute;
    z-index: -1;
  }

  .holder {
    margin-top: 20px;
    position: static;
    text-align: center;
    font-family: "Cambria";
  }
  
  .holder2{
   position: relative;
    padding-bottom: 80px;
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
    position: relative;
    padding-bottom: 1100px;
  }
  

  .flower1 {
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
            <TextBlock1/>
            <div className="position-relative">
                <Slider/>
            </div>
            <Container className="mt-5"></Container>

        </Styles>

    );
}

const TextBlock1 = () => {
  return(
      <div className="holder2" >
          <Container >
              <h1 className="holder">HAVING A PARTY?</h1>
              <p className="header-text mx-5">Candy is made by dissolving
                  sugar in water or milk to form a syrup, which is boiled until it reaches
                  the desired concentration or starts to caramelize. Candy comes in a wide variety of textures,
                  from soft and chewy to hard and brittle. The texture of candy depends on the ingredients.</p>
          </Container>
      </div>

  );
}

const TextBlock2 = () => {
    return(
        <div className="holder2" >
            <Container >
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
    <Container className="cont1 mw-100 px-0">
            <img src={HomeHeaderCake} className="w-100 shadow1 image d-block" />
            <img src={Flower1} className="flower1 "/>
        <Container className="cont shadow1">
            <h1 className="holder">WELCOME TO OUR BAKERY!</h1>
            <p className="header-text">We make your life sweeter</p>
        </Container>
    </Container>
    );
}

export default Home;