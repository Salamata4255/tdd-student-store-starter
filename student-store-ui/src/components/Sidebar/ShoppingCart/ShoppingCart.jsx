import React from "react";
import "./ShoppingCart.css";
export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  console.log("shoppingCart: ", shoppingCart);
  const [subtotal, setSubtotal] = React.useState(0);

  const checkForProduct = (id) => {
    const res = products.find((product) => {
      console.log("product: ", product.quantity);

      return product.id === id.id;
    });

    return res;
  };

  React.useEffect(() => {
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      let price = checkForProduct(shoppingCart[i].itemId).price;
      total = total + price * shoppingCart[i].quantity;
    }
    setSubtotal(total);
    console.log("setSubtotal(total): ", setSubtotal(total));
  });

  return (
    <div className="shopping-cart">
      <h3>My Cart</h3>
      {shoppingCart.length == 0 ? (
        <p className="notification">
          "No items added to cart yet. Start shopping now!"
        </p>
      ) : (
        <div>
          {
            // error
            shoppingCart.map((product, id) => (
              <div className="wrapper" key={id}>
                <p className="cart-product-name">
                  {checkForProduct(product.itemId).name}
                </p>

                <p className="cart-product-quantity">
                  {checkForProduct(product.itemId).quantity}
                </p>
                <p className="quantity">{`Quantity: ${product.quantity}`}</p>
              </div>
            ))
          }
          <p className="subtotal">{`Subtotal: $${subtotal.toFixed(2)}`}</p>

          <p className="total-price.">
            {`Total(includes taxes): $${(subtotal * 1.0875).toFixed(2)}`}
          </p>
        </div>
      )}
    </div>
  );
}
