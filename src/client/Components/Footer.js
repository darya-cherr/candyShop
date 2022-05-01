import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components"


const Styles = styled.div `

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  
  .container{
    max-width: 1170px;
    margin: auto;
  }
  
  ul{
    list-style: none;
  }

  .footer {
    background-color: #24262b;
    padding: 70px 0;
  }
  
  .row{
    display: flex;
    flex-wrap: wrap;
  }
  
  .footer-col{
    width: 25%;
    padding: 0 15px;
  }
  
  .footer-col h4{
    color: #8490a2;
    font-size: 140%;
    font-weight: 500;
    margin-bottom: 30px;
    text-transform: capitalize;
    text-decoration: none;
    position: relative;
    font-family: Candara;
  }

  .footer-col h4::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #C32D3C;
    height: 2px;
    box-sizing: border-box;
    width: 100px;
  }
  
  .footer-col ul li:not(:last-child){
    margin-bottom: 10px;
  }

  .footer-col ul li a {
    color: #8490a2;
    font-size: 110%;
    text-decoration: none;
    font-weight: normal;
    font-family: Candara;
    text-transform: capitalize;
    display: block;
    transition: all 0.3s ease;
    
    &:hover {
      font-weight: bold;
      color: #ffffff;
      padding-left: 10px;
    }
  }
  
  .footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    color: #ffffff;
    margin: 0 15px 15px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    background-color: #C32D3C;
    transition: all 0.3s ease;

    &:hover {
     background-color:  #ffffff;
      color: #C32D3C;
    }
  }


`


function Footer() {
    return (
        <>

            <Styles>

                <footer className={"footer"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"footer-col"}>
                                <h4>COMPANY</h4>
                                <ul>
                                    <li><a href={"#"}>about us</a></li>
                                    <li><a href={"#"}>our services</a></li>
                                    <li><a href={"#"}>privacy policy</a></li>
                                    <li><a href={"#"}>affiliate program</a></li>
                                </ul>
                            </div>
                            <div className={"footer-col"}>
                                <h4>GET HELP</h4>
                                <ul>
                                    <li><a href={"#"}>FAQ</a></li>
                                    <li><a href={"#"}>shipping</a></li>
                                    <li><a href={"#"}>returns</a></li>
                                    <li><a href={"#"}>order status</a></li>
                                    <li><a href={"#"}>payment options</a></li>
                                </ul>
                            </div>
                            <div className={"footer-col"}>
                                <h4>ONLINE SHOP</h4>
                                <ul>
                                    <li><a href={"#"}>cakes</a></li>
                                    <li><a href={"#"}>cookies</a></li>
                                    <li><a href={"#"}>desserts</a></li>
                                    <li><a href={"#"}>sweets</a></li>
                                </ul>
                            </div>
                            <div className={"footer-col"}>
                                <h4>FOLLOW US</h4>
                                <div className={"social-links"}>
                                    <a href={"#"}><FontAwesomeIcon icon={faFacebookF}/></a>
                                    <a href={"#"}><FontAwesomeIcon icon={faTwitter}/></a>
                                    <a href={"#"}><FontAwesomeIcon icon={faInstagram}/></a>
                                    <a href={"#"}><FontAwesomeIcon icon={faVk}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Styles>
        </>
    );
}
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: '#000000',
            backgroundColor: '#000000',
            height: 2,
            borderColor : '#000000',
            marginTop: 0,
            marginBottom: 0,
        }}
    />
);

export default Footer;