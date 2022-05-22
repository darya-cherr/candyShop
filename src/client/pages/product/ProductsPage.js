import React from 'react';
import Categories from "../Categories";
import Products from "./Products";
import styled from "styled-components";

const Styles = styled.div `
  .holder {
    width: 60%;
    position: relative;
    text-align: center;
    font-family: "Cambria";
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    padding: 50px 100px 50px 100px;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  h1 {
    border-bottom: 4px solid rgba(0, 0, 0, 0.81);
  }

  .holder2 {
    position: relative;
    top: 80px;
    width: 100%;
    padding-bottom: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }`

const ProductsPage =() =>{


    return (
        <>
            <Categories/>
            <Styles>
                <div className={"holder2"}>
                    <div className="holder">
                        <h1>POPULAR PRODUCTS</h1>
                    </div>
                </div>
            </Styles>
            <Products/>
        </>
    );
}

export default ProductsPage;
