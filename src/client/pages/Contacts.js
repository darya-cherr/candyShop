import React from 'react';

import {Map} from './Map';
import {useJsApiLoader} from "@react-google-maps/api";




import "./../../../node_modules/slick-carousel/slick/slick.css"
import "./../../../node_modules/slick-carousel/slick/slick-theme.css"
import styled from "styled-components";


const  API_KEY= process.env["REACT_APP_API_KEY"]
console.log(API_KEY);
const defaultCenter = {
    lat: -3.745,
    lng: -38.523
};


const Styles = styled.div `
  .title {
    margin-top: 20px;
    position: static;
    text-align: center;
    font-family: "Cambria";
  }

  .place {
    font-family: "Cambria";
  }

  .images {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .images_item {
    display: flex;
    justify-content: center;
  }

  .images_item:hover .images_img {
    transform: translate3d(-10px, -10px, 0);
    box-shadow: 5px 5px 5px black;
  }

  .images_item:hover .images_img img {
    opacity: .4;
  }

  .images_img {
    display: flex;
    justify-content: center;
    width: 300px;
    // width: 90%;
    height: 90%;
    margin: 14px;
    background: linear-gradient(#f8e4cf, #daaee7);
    transition: transform 0.2s linear;
  }

  .button {
    display: flex;
    justify-content: center;
    width: 305px;
    height: 40px;
    margin: -20px 15px 15px 14px;
    background: linear-gradient(#f1edf6, #efe2f6);
    transition: transform 0.2s linear;
  }

  .images_img img {
    transition: opacity 0.2s linear;
  }`
const Contacts =() =>{
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    })

    return (
<body>

<div className="content">
    <Styles>
<h1 className="title">Заведения</h1>

    <div className="images">
        <div className="images_item">
            <div className="images_img">
                <img className="first_img" src="https://i.pinimg.com/564x/86/5c/87/865c87fa97b47b15e7cdc63f821668bf.jpg" alt=""/>
            </div>
        </div>
        <div className="images_item">
            <div className="images_img">
                <img className="first_img" src="https://i.pinimg.com/564x/f5/b5/d0/f5b5d0573ae0fe22f599dc12ac46d6a1.jpg" width={'300px'} alt=""/>
            </div>
        </div>
        <div className="images_item">
            <div className="images_img">
                <img className="first_img" src="https://i.pinimg.com/564x/02/a6/55/02a655ff4827279bbc0791a59f1af0fa.jpg" width={'300px'} alt=""/>
            </div>
        </div>
        <div className="images_item">
            <div className="images_img">
                <img className="first_img" src="https://i.pinimg.com/564x/2c/a7/1c/2ca71c9f817c94098ea20818cf2416ad.jpg" width={'300px'} alt=""/>
            </div>
        </div>
    </div>

        <div className="images">
            <div className="address">
                <div className="button">
                    <h2 className='place'> ТЦ Экспобел</h2>
                </div>
            </div>
            <div className="images_item">
                <div className="button">
                    <h2 className='place'> ТЦ Галерея</h2>
                </div>
            </div>
            <div className="images_item">
                <div className="button">
                    <h2 className='place'> ТЦ Dana Moll</h2>
                </div>
            </div>
            <div className="images_item">
                <div className="button">
                    <h2 className='place'> ТЦ Green City</h2>
                </div>
            </div>
        </div>

</Styles>
</div>
      <div className="Contacts">{isLoaded ?
          <Map center={defaultCenter}/>:<h2>Not avalible</h2>}
      </div>

</body>
);
}

export default Contacts;