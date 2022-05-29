import { useEffect, useState } from "react";
import {userRequest} from "../../requestMethods";
import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {deleteProducts} from "../redux/cartRedux"

const Container = styled.div`
  font-family: "Cambria";
  width:100%;
  padding: 100px;
  font-size: 24px;
  align-content: center;
  justify-content: center;
  display:flex;
`


const Button = styled.button`
  font-family: "Cambria";
  border: none;
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  background-color: #e1122c;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: rgba(225, 18, 44, 0.83);
  }
`;

const Success = () => {
    const location = useLocation();
    const data = location.state.stripeData;
    const cart = location.state.cart;
    const currentUser = useSelector(state => state.user.currentUser);
    console.log(currentUser);
    const dispatch = useDispatch();
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await userRequest(localStorage.getItem('token')).post("/orders", {
                    userId: currentUser._id,
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        title: item.title,
                        img: item.img,
                        price: item.price,
                        quantity: item.quantity,
                    })),
                    amount: cart.total,
                    address: data.billing_details.address,
                });
                setOrderId(res.data._id);
                dispatch(
                    deleteProducts()
                )
                console.log(cart)
            } catch(e) {console.log(e)}
        };
        data && createOrder();
    }, [cart, data, currentUser]);



    return (
        <Container>
        <div
            style={{
                display: "flex",
                width: "fit-content",
                padding: "50px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
            }}
        >
            {orderId
                ? `Order has been created successfully. Your order number is ${orderId}` /*&& dispatch(
                    deleteProducts(cart)
                )*/
                : `Successfull. Your order is being prepared...`}
            <Link to={"/orders"}><Button>Go to Orders</Button></Link>
        </div>
        </Container>
    );
};

export default Success;