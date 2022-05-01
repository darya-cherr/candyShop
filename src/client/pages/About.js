import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components"
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Slide1 from './../Components/about1.jpg'
import Slide2 from './../Components/about2.jpg'
import Slide3 from './../Components/about3.jpg'
import Slide4 from './../Components/about4.jpg'
import Slide5 from './../Components/about5.jpg'
import HeadCake from './../Components/aboutHeadCake.jpg'

import "./../../../node_modules/slick-carousel/slick/slick.css";
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";
import SliderAbout from './../Components/SliderAbout'

const Styles = styled.div `


  .container {

    margin-bottom: 100px;
    z-index: 5;
    position: relative;
    margin-top: 100px;

  }

  .headerImage {

    backdrop-filter: blur(100px);
    width: 100%;
    height: fit-content;
    background-blend-mode: luminosity;
    background-size: cover;
    position: relative;
    z-index: -1;
  }

  .image1 {
    width: 100%;
    filter: blur(1px);
  }

  .holder {
    position: relative;
    height: auto;
  }

  .shadow1 {
    background: rgba(239, 239, 239, 0.3);
    box-shadow: 0 0 20px rgba(14, 13, 13, 0.73);
  }

  .shadow3 {
    background: rgb(255, 255, 255);
    box-shadow: 0 0 20px rgba(14, 13, 13, 0.73);
  }

`

const About =() =>{

    return (
        <>
            <Styles>
                <div className={"holder shadow1"}>
                <div className={" headerImage "}>
                    <img src={HeadCake} className={"image1 "}/>
                </div>
                </div>
                <div className={"container shadow3"}>
                    <SliderAbout/>
                </div>

            </Styles>

        </>
    );
}

export default About;