import React from 'react';

import styled from "styled-components"
import {Map} from './Map';
import {useJsApiLoader} from "@react-google-maps/api";

const st=styled.div`
    .map {
    width: 500px;
    height: 500px;
    background-color: #333;
}

[class*="copyrights-pane"] {
    display: none !important;
}

[class*="ground-pane"] {
    filter: grayscale(1);
}`
const  API_KEY= process.env["REACT_APP_API_KEY"]
console.log(API_KEY);
const defaultCenter = {
    lat: -3.745,
    lng: -38.523
};
const libraries = ['places']


const Contacts =() =>{
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries
    })
  return (

      <div className="Contacts">{isLoaded ?
          <Map center={defaultCenter}/>:<h2>Not avalible</h2>}
      </div>


    );
}

export default Contacts;