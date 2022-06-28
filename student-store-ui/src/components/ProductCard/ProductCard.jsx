import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) {
  let description = null;

  showDescription = true;

  if (showDescription) {
    description = <p className="productDescription">{product.description}</p>;
  }

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
            {/* <p className="product-quantity">
                    {`Qty: ${quantity}`}
            </p> */}
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
            {/* <p className="product-quantity">
                    {`Qty: ${quantity}`}
            </p> */}
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
                +
              </button>
            </div>
            {description}
          </div>
        </div>
      )}
    </div>
  );
}
