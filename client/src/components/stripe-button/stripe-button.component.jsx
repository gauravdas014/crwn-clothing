import React from "react";
import StripeChckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*1000;
    const publishableKey = "pk_test_azdQQrrGkSjOa0giom26UCyE00hx1KyKG1";


    const onToken = (token) => {
        console.log(token)
        alert("Payment Successful")
    }

    return(
        <StripeChckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            />
    )
}

export default StripeCheckoutButton