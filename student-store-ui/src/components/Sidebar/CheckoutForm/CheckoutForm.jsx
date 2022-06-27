import React from "react"
export default function CheckoutForm ({
    isOpen, 
    shoppingCart,
    checkoutForm, handleOnCheckoutFormChange,
    handleOnSubmitCheckoutForm
}){
    return (
        <div className="checkout-form">
            <input className="checkout-form-input"
                type="email"
                name="email"
                placeholder="student@codepath.org"
                value={checkoutForm.email}
                onChange={(event) => handleOnCheckoutFormChange("email",
                event.target.value)}
            />
            <input className="checkout-form-input" 
                type= "text"
                name ="name"
                placeholder="Student Name"
                value={checkoutForm.name}
                onChange={(event) => handleOnCheckoutFormChange("email",
                event.target.value)}
            />
            <button className="checkout-button"
                text="Checkout"
                onClick={() => handleOnSubmitCheckoutForm(checkoutForm, shoppingCart)}
            />
            <p className="error">
                {
                     <p className="success">Success! </p> 
                }
            </p>
        </div>
    )
}