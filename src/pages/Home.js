import React from 'react';
import {Container} from "react-bootstrap";
import HomeHeaderCake from "./../Components/cake7.jpg"

const Home =() =>{
    return (
        <>
            <Container className="">
                <img src={HomeHeaderCake}
                     className="d-block w-100 "



                />
            </Container>
        </>
    );
}

export default Home;