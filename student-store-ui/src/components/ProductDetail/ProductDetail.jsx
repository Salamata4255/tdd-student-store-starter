import React from "react"
import {useParams} from 'react-router-dom';
import axios from "axios";
import ProductView from "../ProductGrid/ProductView/ProductView"

export default function ProductDetail({
    handleAddItemToCart,
    handleRemoveItemToCart,
    shoppingCart, getQuantity
}){
    const [loading, setLoading] = React.useState(true)
    const [product, setProduct] = React.useState("")

    let {productId} = useParams()

    React.useEffect(async () => {
        const response = await axios (
            `https://codepath-store-api.herokuapp.com/store${productId}`)
            .catch(function () {
                console.log("ERROR!!")
                setLoading(true)
            })
            setProduct(response.data.product)
            console.log('response.data.produc: ', response.data.produc);
            setLoading(false)
    })
    return (
        <div className="product-detail">
             {
              loading
              ?
              <h1 className="loading">Loading...</h1>
              : 
              <ProductView 
              product={product}
              productId = {productId}
              quantity = {
                shoppingCart.find(item => item.itemId === productId) == undefined
                ? 0
                : shoppingCart.find(item => item.itemId === productId).quantity
              }
              handleAddItemToCart = {handleAddItemToCart}
              handleRemoveItemToCart = {handleRemoveItemToCart}
              shoppingCart = {shoppingCart}
              />
            }
        </div>
    )

}