import React from "react";
export default function ShoppingCart({
     isOpen, products, shoppingCart
}) {
    const [subtotal, setSubtotal] = React.useState(0)
    React.useEffect(() => {
        let total = 0;
        for (let i = 0; i < shoppingCart.length; i++){
            let price = checkForProduct(shoppingCart[i].itemId).price
            total = (total + price) * shoppingCart[i].quantity
        }
        setSubtotal(total)
    })
    const checkForProduct = (id) => {
        const res = products.find(
            (product) =>product.id === id
        )
        return res
    }

return (
    <div className="shopping-cart">
        <h3>My Cart</h3>
        {
            shoppingCart.length == 0 ?
            <p className="notification">"No items added to cart yet. Start shopping now!"</p> :
            <div>
                {
                    shoppingCart.map((item, id) => (
                        <div className="wrapper" key={id}>
                            <p className="cart-product-name">
                                `${checkForProduct(item.itemId).name}`
                            </p>

                            <p className="cart-product-quantity">
                                `${checkForProduct(item.itemId).quantity}`
                            </p>
                        
                        </div>
                    ))
                }
                <p className="subtotal">
                    {`Subtotal: $${subtotal.toFixed(2)}`}
                </p>
                <p className="total-price.">
                    {`Total(includes taxes): $${(1 + (subtotal * 8.75)/ 100).toFixed(2)}`}
                </p>
             </div>

        }
    </div>
)
}