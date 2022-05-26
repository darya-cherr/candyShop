import React from 'react';

import {Map} from './Map';
import {useJsApiLoader} from "@react-google-maps/api";




import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components";


const  API_KEY= process.env["REACT_APP_API_KEY"]
const defaultCenter = {
    lat: -3.745,
    lng: -38.523
};


const Styles = styled.div `
  .wrap_first {
    height: 270px;
    position: relative;
  }

  .wrap_first::before {
    left: 0;
    top: 0;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: url(https://e2.edimdoma.ru/data/recipes/0010/4980/104980-ed4_wide.jpg?1628783805)
    center no-repeat;
    background-size: cover;
    opacity: 0.3;
  }

  .wrap_first:hover {
    box-shadow: 2px 2px 5px black;
  }
  
  .title1{
    font-size: 5em;
    position: static;
    text-align: center;
    font-family: "Cambria";
  }

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

  .tc {
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
  }

  /* Make sure to set some focus styles for accessibility */

  :focus {
    outline: 0;
  }

  /* HTML5 display-role reset for older browsers */

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }


  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input[type=search]::-webkit-search-cancel-button,
  input[type=search]::-webkit-search-decoration,
  input[type=search]::-webkit-search-results-button,
  input[type=search]::-webkit-search-results-decoration {
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  input[type=search] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
    resize: vertical;
  }

  /**
   * Correct \`inline-block\` display not defined in IE 6/7/8/9 and Firefox 3.
   */

  audio,
  canvas,
  video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    max-width: 100%;
  }

  /**
   * Prevent modern browsers from displaying \`audio\` without controls.
   * Remove excess height in iOS 5 devices.
   */

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  /**
   * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.
   * Known issue: no IE 6 support.
   */

  [hidden] {
    display: none;
  }

  /**
   * 1. Correct text resizing oddly in IE 6/7 when body \`font-size\` is set using
   *    \`em\` units.
   * 2. Prevent iOS text size adjust after orientation change, without disabling
   *    user zoom.
   */

  html {
    font-size: 100%; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    -ms-text-size-adjust: 100%; /* 2 */
  }

  /**
   * Address \`outline\` inconsistency between Chrome and other browsers.
   */

  a:focus {
    outline: thin dotted;
  }

  /**
   * Improve readability when focused and also mouse hovered in all browsers.
   */

  a:active,
  a:hover {
    outline: 0;
  }



  figure {
    margin: 0;
  }

  /**
   * Correct margin displayed oddly in IE 6/7.
   */

  form {
    margin: 0;
  }


  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  /**
   * 1. Correct color not being inherited in IE 6/7/8/9.
   * 2. Correct text not wrapping in Firefox 3.
   * 3. Correct alignment displayed oddly in IE 6/7.
   */

  legend {
    border: 0; /* 1 */
    padding: 0;
    white-space: normal; /* 2 */
    *margin-left: -7px; /* 3 */
  }

  /**
   * 1. Correct font size not being inherited in all browsers.
   * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,
   *    and Chrome.
   * 3. Improve appearance and consistency in all browsers.
   */

  button,
  input,
  select,
  textarea {
    font-size: 100%; /* 1 */
    margin: 0; /* 2 */
    vertical-align: baseline; /* 3 */
    *vertical-align: middle; /* 3 */
  }

  /**
   * Address Firefox 3+ setting \`line-height\` on \`input\` using \`!important\` in
   * the UA stylesheet.
   */

  button,
  input {
    line-height: normal;
  }

  /**
   * Address inconsistent \`text-transform\` inheritance for \`button\` and \`select\`.
   * All other form control elements do not inherit \`text-transform\` values.
   * Correct \`button\` style inheritance in Chrome, Safari 5+, and IE 6+.
   * Correct \`select\` style inheritance in Firefox 4+ and Opera.
   */

  button,
  select {
    text-transform: none;
  }

  /**
   * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native \`audio\`
   *    and \`video\` controls.
   * 2. Correct inability to style clickable \`input\` types in iOS.
   * 3. Improve usability and consistency of cursor style between image-type
   *    \`input\` and others.
   * 4. Remove inner spacing in IE 7 without affecting normal text inputs.
   *    Known issue: inner spacing remains in IE 6.
   */

  button,
  html input[type="button"], /* 1 */
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button; /* 2 */
    cursor: pointer; /* 3 */
    *overflow: visible; /* 4 */
  }

  /**
   * Re-set default cursor for disabled elements.
   */

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  /**
   * 1. Address box sizing set to content-box in IE 8/9.
   * 2. Remove excess padding in IE 8/9.
   * 3. Remove excess padding in IE 7.
   *    Known issue: excess padding remains in IE 6.
   */

  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
    *height: 13px; /* 3 */
    *width: 13px; /* 3 */
  }

  /**
   * 1. Address \`appearance\` set to \`searchfield\` in Safari 5 and Chrome.
   * 2. Address \`box-sizing\` set to \`border-box\` in Safari 5 and Chrome
   *    (include \`-moz\` to future-proof).
   */

  input[type="search"] {
    -webkit-appearance: textfield; /* 1 */
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box; /* 2 */
    box-sizing: content-box;
  }

  /**
   * Remove inner padding and search cancel button in Safari 5 and Chrome
   * on OS X.
   */

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
   * Remove inner padding and border in Firefox 3+.
   */

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  /**
   * 1. Remove default vertical scrollbar in IE 6/7/8/9.
   * 2. Improve readability and alignment in all browsers.
   */

  textarea {
    overflow: auto; /* 1 */
    vertical-align: top; /* 2 */
  }

  /**
   * Remove most spacing between table cells.
   */

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  button,
  input,
  select,
  textarea {
    color: #222;
  }


  ::-moz-selection {
    background: #b3d4fc;
    text-shadow: none;
  }

  ::selection {
    background: #b3d4fc;
    text-shadow: none;
  }

  img {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  .chromeframe {
    margin: 0.2em 0;
    background: #ccc;
    color: #000;
    padding: 0.2em 0;
  }
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  input,
  textarea {
    box-sizing: border-box;
  }



  .container {

    margin: 20px 85px;
    width: 100%;
    max-width: 1344px;
    padding: 0 20px;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 40px;
    border-radius: 5px;
    box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  }

  .left-side {
    width: 25%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .left-side::before {
    content: "";
    position: absolute;
    height: 70%;
    width: 2px;
    background: #afafb6;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
  }

  .right-side {
    width: 75%;
    margin-left: 75px;
  }

  .details {
    margin-bottom: 15px;
    text-align: center;
  }

  .details i {
    font-size: 25px;
    color: #3e2093;
    margin-bottom: 10px;
  }

  .topic {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 7px;
  }

  .text-one,
  .text-two {
    font-size: 14px;
    color: #afafb6;
  }

  .topic-text {
    font-size: 23px;
    font-weight: 600;
    color: #3e2093;
    margin-bottom: 10px;
  }

  .right-side p {
    margin-bottom: 20px;
  }

  .input-box {
    height: 50px;
    width: 100%;
    margin-bottom: 30px;
  }

  .input-box input,
  .input-box textarea {
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 5px;
    background: #f0f1f8;
    padding: 0 20px;
    margin-bottom: 2px;
  }

  .input-box label {
    font-size: 14px;
    color: #afafb6;
    padding-left: 5px;
  }

  .input-box textarea {
    resize: none;
    padding: 20px;
    font-family: "Roboto", sans-serif;
  }

  .message-box {
    min-height: 110px;
  }

  .button {
    display: inline-block;
  }

  .button input[type="submit"] {
    color: #fff;
    font-size: 18px;
    background: #3e2093;
    outline: none;
    border: none;
    padding: 10px 20px;
    border-radius: 7px;
    transition: 0.2s;
  }

  .button input[type="submit"]:hover {
    background: rgb(0, 0, 207);
  }

  @media (max-width: 1304px) {
    .content {
      height: 100%;
      flex-direction: column-reverse;
    }
    .left-side {
      margin-top: 50px;
      flex-direction: row;
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
    }
    .details {
      margin-right: 20px;
    }
    .details:last-child {
      margin-right: 0;
    }
    .left-side::before {
      display: none;
    }
    .right-side {
      width: 100%;
      margin-left: 0;
    }
  }
`
const Contacts =() =>{
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    })

    return (

<body>
<Styles>
<div className="content1">

    <div className="wrap_first">
        <div className="section_header">
            <h1 className="title1"><br/>CONTACTS</h1>
        </div>
    </div>


<h1 className="title">Our facility</h1>

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
            <div className="address " >
                <div className="tc">
                    <h2 className='place'> Expobel</h2>
                </div>
            </div>
            <div className="images_item">
                <div className="tc">
                    <h2 className='place'>Gallery</h2>
                </div>
            </div>
            <div className="images_item">
                <div className="tc">
                    <h2 className='place'>Dana Moll</h2>
                </div>
            </div>
            <div className="images_item">
                <div className="tc">
                    <h2 className='place'> Green City</h2>
                </div>
            </div>
        </div>
</div>

<div class="container">
    <div class="content">
        <div class="left-side">
            <div class="address details">
                <i class="fas fa-map-marker-alt"></i>
                <div class="topic">Address</div>
                <div class="text-one">Minsk</div>
                <div class="text-two">Expobel, Dana Moll, Green City, Gallery</div>
            </div>
            <div class="phone details">
                <i class="fas fa-phone-alt"></i>
                <div class="topic">Phone number</div>
                <div class="text-one">+375292564221</div>
                <div class="text-two">+375295258365</div>
            </div>
            <div class="email details">
                <i class="fas fa-envelope"></i>
                <div class="topic">Email</div>
                <div class="text-one">support@site.com</div>
                <div class="text-two">admin@site.com</div>
            </div>
        </div>
        <div class="right-side">
            <div class="topic-text">Send us your message</div>
            <p>
                If you have any questions or cooperation offers:
                fill in the form below
            </p>
            <form action="send_mail.php" name="form" method="post">
                <div class="input-box">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        id="name"
                        data-reg="^[А-ЯЁ][а-яё]*$"
                    />
                    <label for="name">Сyrillic only</label>
                </div>
                <div class="input-box">
                    <input
                        type="text"
                        placeholder="Input email"
                        name="email"
                        id="email"
                        data-reg="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"
                    />
                    <label for="email">Format: name@mail.ru</label>
                </div>
                <div class="input-box">
                    <input
                        type="text"
                        placeholder="Input phone number"
                        name="phone"
                        id="phone"
                        data-reg="^((\+375)+([0-9]){12})$"  /*change!!!!!!!!!!*/
                    />
                    <label for="phone">Format: 375290000000 or 3753300000000</label>
                </div>
                <div class="input-box message-box">
                    <textarea placeholder="Message"  name="message"></textarea>
                </div>
                <div class="button">
                    <input type="submit" id="button" value="Send" />
                </div>
            </form>
        </div>
    </div>
</div>
<script src="app.js"/>

      <div className="Contacts">{isLoaded ?
          <Map center={defaultCenter}/>:<h2>Not avalible</h2>}
      </div></Styles>

</body>
);
}

export default Contacts;