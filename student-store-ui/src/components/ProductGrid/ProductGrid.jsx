import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
}) {
  return (
    <div className="product-grid">
      <div className="content">
        <h3>Products</h3>
        <div className="grid">
          {products.map((product, index) => {
            return (
              <ProductCard
                key={index}
                productId={product.id}
                product={product}
                shoppingCart={shoppingCart}
                quantity={
                  shoppingCart.find((item) => item.itemId.id === product.id) ==
                  undefined
                    ? 0
                    : shoppingCart.find((item) => item.itemId.id === product.id)
                        .quantity
                }
                handleAddItemToCart={() => handleAddItemToCart(product)}
                handleRemoveItemToCart={() => handleRemoveItemToCart(product)}
                showDescription={false}
              />
            );
          })}
          {!products.length ? <p>Sorry, We are out of the product !!</p> : ""}
        </div>
      </div>
    </div>
  );
}
