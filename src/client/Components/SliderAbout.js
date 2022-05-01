import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components"
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Slide1 from './../Components/about1.jpg'
import Slide2 from './../Components/about2.jpg'
import Slide3 from './../Components/about3.jpg'
import Slide4 from './../Components/about4.jpg'
import Slide5 from './../Components/about5.jpg'
import Slide6 from './../Components/about6.jpg'


import "./../../../node_modules/slick-carousel/slick/slick.css"
import "./../../../node_modules/slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

const Styles = styled.div `
  .image {
    width: 100%;
  }

  .container {
    width: 80%;
    
  }

  .holder {
    padding-left: 45px;
    padding-right: 45px;
    margin-top: 70px;
    margin-bottom: 25px;
  }


  .shadow2 {
    background: rgba(14, 13, 13, 0.73);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    padding: 1px;
  }

`



export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }
    render() {

        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            dots: true,
            inherit: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <div>
            <Styles>
                <div className={"container"}>
                <Slider {...settings} >
                    <div className={"holder"}>
                        <div className={"shadow2"}>
                        <img className={"image"} src={Slide1} />
                        </div>
                    </div>
                    <div  className={"holder"}>
                        <div className={"shadow2"}>
                        <img className={"image"} src={Slide2} /></div>
                    </div>
                    <div  className={"holder"}>
                        <div className={"shadow2"}>
                        <img className={"image"} src={Slide3} />
                        </div>
                    </div>
                    <div  className={"holder"} >
                        <div className={"shadow2"}>
                        <img className={"image"} src={Slide4} />
                        </div>
                    </div>
                    <div  className={"holder"}>
                        <div className={"shadow2"}>
                        <img className={"image "} src={Slide5} />
                        </div>
                    </div>
                    <div  className={"holder"}>
                        <div className={"shadow2"}>
                        <img className={"image"} src={Slide6} />
                        </div>
                    </div>
                    {/*{[Slide1,Slide2,Slide3,Slide4,Slide5,Slide6].map((item,index) => {*/}
                    {/*    return <div key={index}>{item}</div>;*/}
                    {/*})}*/}
                </Slider>
                    <div className={"pb-5"} ></div>
                </div>
            </Styles>
            </div>


        );
    }
}