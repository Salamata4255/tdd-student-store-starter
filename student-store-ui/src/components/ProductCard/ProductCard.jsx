import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({
  product,
  productId,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
  shoppingCart,
  quantity,
}) {
  // console.log(quantity);
  let description = null;

  showDescription = true;

  if (showDescription) {
    description = <p className="productDescription">{product.description}</p>;
  }
  // console.log("shoppingCart: ", shoppingCart);

  return (
    <div>
      {showDescription ? (
        <div className="product-card">
          <div>
            <Link className="media" to={`/products/${productId}`}>
              <img
                className="product-img"
                src={product.image}
                alt={`${product.name} image`}
              />
            </Link>
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-quantity">{`Qty: ${quantity}`}</p>
            <div>
              <button
                className="add "
                onClick={() => handleAddItemToCart(productId)}
              >
                +
              </button>
              <button
                className="remove "
                onClick={() => handleRemoveItemToCart(productId)}
              >
                -
              </button>
            </div>
            {description}
          </div>
        </div>
      ) : (
        <div className="product-card">
          <div>
            <Link className="media" to={`/products/${productId}`}>
              <img
                className="product-img"
                src={product.image}
                alt={`${product.name} image`}
              />
            </Link>
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-quantity">{`Quantity ${product.quantity}`}</p>
            <p className="product-quantity">{`Qty: ${quantity}`}</p>

            <div>
              <button
                className="add "
                onClick={() => handleAddItemToCart(productId)}
              >
                +
              </button>
              <button
                className="remove "
                onClick={() => handleRemoveItemToCart(productId)}
              >
                -
              </button>
            </div>
            {description}
          </div>
        </div>
      )}
    </div>
  );
}
