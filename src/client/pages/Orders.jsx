import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import {userRequest} from "../../requestMethods";
import {useSelector} from "react-redux";
import Announcement from "./Announcement";
import {Link} from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";


const Container = styled.div`
  font-family: "Cambria";
  padding: 0px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  margin-bottom: 50px;
`;

const Holder = styled.div`
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.59) !important;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;


const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
  padding-right: 50px;
`;

const Product = styled.div`
  width: 40%;
  margin: 20px;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.59) !important;
  padding: 20px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 110px;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.31) !important;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  font-size: 24px;
  font-weight: 200;
`;

const ProductId = styled.span`
    margin-left: 15px;
  `;


const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 100;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;




const Orders = () => {
    const [orders, setOrders] = useState([]);
    const currentUser = useSelector(state => state.user.currentUser);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest(currentUser.token).post(
                         `/orders/find/${currentUser._id}`
                );
                setOrders(res.data);
                console.log(res.data);
            } catch (err) {}
        };
        getOrders();
    }, []);

    return (
        <>
            <Wrapper>
                <Title>YOUR ORDERS</Title>
                <Bottom>
                    <Info>
                        {orders.map((order) => (<Holder>
                                <ProductId>
                                    <b>ORDER ID: </b> {order._id}
                                </ProductId>
                                <ProductId>
                                    <b>TOTAL: </b>$ {order.amount}
                                </ProductId>
                            <Container>
                                {order.products.map((item)=>(
                            <Product>
                                <ProductDetail>
                                    <Image src={item.img} />
                                    <Details>
                                        <ProductPrice>
                                            <b>Product:</b> {item.title}
                                        </ProductPrice>
                                        <ProductPrice>
                                            <b>ID:</b> {item.productId}
                                        </ProductPrice>
                                        <ProductPrice>
                                        <b>Amount: </b> {item.quantity}
                                        </ProductPrice>
                                        <ProductName>
                                            <b>Summary: </b>$ {item.quantity * item.price}
                                        </ProductName>

                                    </Details>
                                </ProductDetail>
                            </Product>
                                    ))}
                            </Container>
                                </Holder>
                        ))}
                        <Hr />
                    </Info>
                </Bottom>
            </Wrapper>
        </>
    );
}
export default Orders;