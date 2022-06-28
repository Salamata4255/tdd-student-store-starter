import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({
  products = [],
  handleAddItemToCart,
  handleRemoveItemToCart,
  getQuantity,
}) {
  return (
    <div className="product-grid">
      <div className="content">
        <h3>Products</h3>
        <div className="grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              productId={product.id}
              product={product}
              quantity={getQuantity(product)}
              handleAddItemToCart={() => handleAddItemToCart(product)}
              handleRemoveItemToCart={() => handleRemoveItemToCart(product)}
              showDescription={false}
            />
          ))}
          {!products.length ? <p>Sorry, We are out of the product !!</p> : ""}
        </div>
      </div>
    </div>
  );
}
