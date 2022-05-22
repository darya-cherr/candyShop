import React, {useEffect} from 'react';
import styled from "styled-components"
import HeadCake from '../Components/image/aboutHeadCake.jpg'
import "./../../../node_modules/slick-carousel/slick/slick.css";
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";
import SliderAbout from './../Components/SliderAbout'
import {Container} from "react-bootstrap";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards"
import img0 from '../Components/image/img.png'
import img1 from '../Components/image/img_1.png'
import img2 from '../Components/image/img_2.png'
import img3 from '../Components/image/img_3.png'

import cake1 from '../Components/image/cake3.jpg'
import cake2 from '../Components/image/cake5.jpg'
import cake3 from '../Components/image/cake14.jpg'
import cake4 from '../Components/image/cake15.jpg'


const Styles = styled.div `
  .cont {
    position: absolute;
    width: 100%;
    top: 13%;
    align-self: center;
  }
  
  .image1{
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
    top: 80px;
    height: auto;
    padding-bottom: 150px;
    text-align: center;
    z-index: 1;
    margin-left: 200px;
    margin-right: 200px;
  }

  .header-text {
    margin-top: 20px;
    margin-bottom: 20px;
    position: static;
    text-align: center;
    font-family: "Cambria";
    font-size: x-large;
    size: auto;
  }
  
  .cont1{
    position: relative;
    height: auto;
    z-index: -2;
  }
  
  .filter{
    filter: blur(6px);
  }
  
  .filter2{
    filter: brightness(50%);
  }

  .shadow1 {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    padding: 20px;
  }
  
  .products-ico{
    margin: 40px 100px 20px 100px;
  }

  .products-img{
    width: 25%;
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.59) !important;
    margin-right: 12%;
    filter: brightness(50%);
  }

  .products-img2{
    width: 60%;
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.59) !important;
    margin-left: 40%;
    filter: brightness(50%);
  }

  .products-img3{
    width: 25%;
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.59);
    margin-left: 5%;
    margin-right: 5%;
    filter: brightness(50%);
  }

  .holder3 {
    width: 100%;
  }
  

  .wrapper {
    display: flex;
    width: 100vw;
    height: 80vh;
    padding-bottom: 50px;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .wrapper>div{
    width: 30vw;
  }
  
  .left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .left>div{
    flex: 1 1;
  }
  
`

const About =() =>{
    return (
        <Styles>
            <div className="">
                <HomeImgComponent />
                <TextBlock1/>
                <h1 className="holder pb-5 text-decoration-underline">OUR TEAM</h1>
            </div>
            <Cards/>
            <TextBlock2/>
            <ImageBlock/>
        </Styles>

    );
}

const TextBlock1 = () => {
    return(
        <div className="holder2 " >
            <div className={"shadow1"}>
            <Container >
                <h1 className="holder">WHO WE ARE?</h1>
                <p className="header-text ">Hello. Our Sweet Bakery has been present for over 20 years in the market.
                </p>
                <p className="header-text ">
                    We make the most of all our customers.
                </p>
            </Container>
            </div>
        </div>

    );
}

const TextBlock2 = () => {
    return(
        <div className="holder2" >
                <Container >
                    <h1 className="holder">PRODUCTS</h1>
                    <table className={"w-100"}>
                        <tr>
                            <img className={"products-ico"} src={img0}/>
                            <img  className={"products-ico"} src={img1}/>
                            <img  className={"products-ico"} src={img2}/>
                            <img  className={"products-ico"} src={img3}/>
                        </tr>
                    </table>
                    <table className={"w-100"}>
                        <tr>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam etni</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam etni</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam etni</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam etni</td>
                        </tr>
                    </table>
                </Container>
        </div>

    );
}

const ImageBlock = () => {
    return(
        <><div className={"holder3"}>
            <div className=" wrapper">
                <div className={"left"}>
                    <img className={"products-img2"} src={cake4}/>
                    <img className={"products-img2 "} src={cake1}/>
                </div>

                <img className={"products-img3"} src={cake3}/>
                <img className={"products-img "} src={cake2}/>
            </div></div>
</>
    );
}

const HomeImgComponent = () => {
    return (
        <Container className="cont1 mw-100 px-0 d-block">
            <div className={"filter2"}>
            <img src={HeadCake} className="w-100  image1 d-block filter" /></div>
            <div className="cont w-100 ">
                <SliderAbout/>
            </div>
        </Container>
    );
}

export default About;