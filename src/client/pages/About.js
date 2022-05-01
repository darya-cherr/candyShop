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


  .container1 {
    z-index: 5;
    position: relative;
    height: max-content;
    padding-bottom: 100px;
  }

  .headerImage {
    backdrop-filter: blur(100px);
    width: 100%;
    background: rgba(239, 239, 239, 0.65);
    position: absolute;
    z-index: -2;
    height: fit-content;

  }

  .image1 {
    width: 100%;
    filter: blur(6px);
    height: fit-content;
    position: relative;
    
  }

  .holder1 {
    width: 100%;
    position: relative;
    height: fit-content;
    background: rgba(239, 239, 239, 0.65);
    filter: brightness(60%);
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
                <div className={"container1"}>
                <div className={"holder1"}>
                <div className={"headerImage"}>
                    <img src={HeadCake} className={"image1"}/>
                </div>
                </div>
                <SliderAbout/>

                </div>

            </Styles>

        </>
    );
}

export default About;