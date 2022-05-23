import StripeCheckout from 'react-stripe-checkout'
import {useState, useEffect} from "react";
import axios from "axios";

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)

    const onToken = (token)=>{
        setStripeToken(token)
    }


    useEffect(()=>{
        const makeRequest = async () =>{
            try{
              const res = await  axios.post("http://localhost:5000/api/checkout/payment",
                    {tokenId:stripeToken.id,
                    amount: 2000,
                    })
                console.log(res.data)
            }catch(err){
                console.log(err)
            }
        }

        stripeToken&&makeRequest()

    },[stripeToken])


    return (
        <div style={{

            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            {stripeToken?(<span>Processing. Please wait... </span>):(
            <StripeCheckout name = "bakery"
        billingAddress
        shippingAddress
        description={"Your total is $20"}
                           image={"https://bipbap.ru/wp-content/uploads/2019/06/eda-047.-800x800-640x640.jpg"}
                           amount={2000}
                           token={onToken}
                           stripeKey={"pk_test_51L2UWOCcRCFByi1N3Vct1R3LaTdDGHu0jxAemfiJODesG2v5kqcVkz4pLOuSgYKwPXoVyAOZYtRvmXYNXwnxM5PW00YBNOs16t"}
        >
            <button
                style={{
                    border:"none",
                    width:120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight :"600",
                    cursor: "pointer"
                }}>
                Pay Now
            </button></StripeCheckout>
            )} </div>

    )
}

export default Pay;