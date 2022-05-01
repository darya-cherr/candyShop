import React from 'react';

import styled from "styled-components"

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
const  API_KEY= process.env["REACT_APP_API_KEY "]
console.log(API_KEY);

const Contacts =() =>{

  return (

      <st>

      <div id="map-test" className="map">
      <script src="https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU">
      </script>
      <script src="map/script.js"></script></div>
          </st>
    );
}

export default Contacts;