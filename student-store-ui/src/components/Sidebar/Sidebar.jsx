import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
}) {
  //   const [isOpen, setOpen] = React.useState(true)

  // const handleOnToggle = () => setOpen ((isOpen) => setOpen(!isOpen))
  return (
    <section className={isOpen ? "sidebar open" : "sidebar closed"}>
      <div className="wrapper">
        <button
          className={
            isOpen ? "toggle-button button open" : "toggle-button button closed"
          }
        >
          <i className="material-icons swap" onClick={() => handleOnToggle()}>
            swap_horiz
          </i>
          <i className="material-icons" onClick={() => handleOnToggle()}>
            add_shopping_cart
          </i>
          <i className="material-icons" onClick={() => handleOnToggle()}>
            monetization_on
          </i>
          <i className="material-icons" onClick={() => handleOnToggle()}>
            fact_check
          </i>
        </button>
        {isOpen ? (
          <ShoppingCart
            isOpen={isOpen}
            products={products}
            shoppingCart={shoppingCart}
          />
        ) : (
          ""
        )}
        {isOpen ? (
          <CheckoutForm
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

{
  /* <div className="shopping-cart">
          <div className="cart-icons">
              <span className="cart-icon icon button">
                <i className="material-icons">add_shopping_cart</i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons">monetization_on</i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons">fact_check</i>
              </span>
          </div>
        </div> */
}
