import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductView from "../ProductGrid/ProductView/ProductView";
import NotFound from "../NotFound/NotFound";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
}) {
  const [loading, setLoading] = React.useState(true);
  const [product, setProduct] = React.useState("");
  const [found, setFound] = React.useState(true);

  let { productId } = useParams();

  React.useEffect(async () => {
    const response = await axios(
      `http://localhost:3001/store${productId}`
    ).catch(function (e) {
      setFound(false);
    });
    setProduct(response.data.product);
    //
    setLoading(false);
  });
  return (
    <div className="product-detail">
      {found ? (
        <div className="view">
          {loading ? (
            <h1 className="loading">Loading...</h1>
          ) : (
            <ProductView
              product={product}
              productId={productId}
              quantity={
                shoppingCart.find((item) => item.itemId === productId) ==
                undefined
                  ? 0
                  : shoppingCart.find((item) => item.itemId === productId)
                      .quantity
              }
              handleAddItemToCart={handleAddItemToCart}
              handleRemoveItemToCart={handleRemoveItemToCart}
              shoppingCart={shoppingCart}
            />
          )}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
