import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import ProductGrid from "../ProductGrid/ProductGrid";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

export default function Home({
  isFetching,
  products,
  activeCategory,
  setActiveCategory,
  handleOnSearchInput,
  searchInput,
  handleAddItemToCart,
  handleRemoveItemToCart,
  getQuantity,
  shoppingCart,
}) {
  const filterProductsByCategory =
    Boolean(activeCategory) && activeCategory.toLowerCase() !== "all categories"
      ? products.filter((prdct) => {
          return prdct.category == activeCategory.toLowerCase();
        })
      : products;

  const displayProducts = Boolean(searchInput)
    ? filterProductsByCategory.filter((prdct) =>
        prdct.name.toLowerCase().includes(searchInput)
      )
    : filterProductsByCategory;

  return (
    <div className="home">
      {/* <Navbar /> */}

      {/* <Hero /> */}
      <Menu
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        handleOnSearchInput={handleOnSearchInput}
        searchInput={searchInput}
      />

      <ProductGrid
        products={displayProducts}
        isFetching={isFetching}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        getQuantity={getQuantity}
        shoppingCart={shoppingCart}
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
