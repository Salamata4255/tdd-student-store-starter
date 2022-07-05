import * as React from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import About from "../About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "../Sidebar/ShoppingCart/ShoppingCart";
import "./App.css";
import ProductDetail from "../ProductDetail/ProductDetail";


export default function App() {
  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isFetching, setIsFecthing] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState("")
  const [cart, setCart] = React.useState({})
  const [activeCategory, setActiveCategory] = React.useState("All Categories")
  const [isOpen, setIsOpen] = React.useState(false)
  const [shoppingCart, setShoppingCart] = React.useState([])

  React.useEffect(() => {
    const fetchProducts = async () => {
      setIsFecthing(true);

      try {
        const response = await axios.get(
          "https://codepath-store-api.herokuapp.com/store"
        );
        if (response?.data?.products) {
          setProducts(response.data.products);
        } else {
          setError("NOT FOUND");
        }
      } catch (error) {
        setIsFecthing(false);
      }
    };
    fetchProducts();
  }, []);

  const handleOnSearchInput = (action) => {
    setSearchInput(action.target.value)
  }

  const handleAddItemToCart = (item) => setShoppingCart(addToCart(shoppingCart,item))
  // error saying it is not function
  const addToCart = (shoppingCart, item) => {
    if (shoppingCart.hasOwnProperty(item.id)){
      return {
        shoppingCart, [item.id]: shoppingCart[item.id] + 1
      }
    }
    return {
      shoppingCart, [item.id]: 1,
    }
  }

  const handleRemoveItemToCart = (item) => setShoppingCart(removeFromCart(shoppingCart, item))
  // error saying not a func
  const removeFromCart = (shoppingCart, item) => {
    if (shoppingCart.hasOwnProperty(item.id)){
      return {
        shoppingCart, [item.id]: shoppingCart[item.id] - 1
      }
    }
    return {
      shoppingCart, [item.id]: 1,
    }
    
  }

  const handleGetQuantity =(item) => getQuantityFunc(cart, item)
  const getQuantityFunc = (cart, item) => {
    return   cart[item.id] || 0
  }

  
  function handleOnToggle(){
    setIsOpen(!isOpen)
  }

  const [checkoutForm, setCheckouForm] = React.useState({"name": "", "email": ""})
  const handleOnCheckoutFormChange = (user, amount) => {
    let form = checkoutForm
    form[user] = amount
    setCheckouForm(form)
  }

  const handleOnSubmitCheckoutForm = async () => {
    setCheckouForm({"name": "", "email": ""});
    if (shoppingCart.length != 0){
      const response = await axios.post(
        `https://codepath-store-api.herokuapp.com/store`,{
          user: checkoutForm,
          shoppingCart: shoppingCart
      } 
        ).catch((e) => {
          setError(e.message)
        }).then((amount) => {
          setCheckouForm({"name": "", "email": ""})
        })
    } else {
      setError("Empty Cart!! Buy something!")
    }
  }
  return (
    <div className="app">
      <BrowserRouter>
      <main>
      <Navbar />
      <Hero />
      <Sidebar 
        products={products}
        isOpen={isOpen}
        shoppingCart={shoppingCart}
        checkoutForm={checkoutForm}
        isFetching = {isFetching}
        handleOnCheckoutFormChange={handleOnCheckoutFormChange}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        handleOnToggle ={handleOnToggle}
        error = {error}
      /> 
        <Routes>
      
          <Route
            path="/" or 
            element={
              <Home
                error={error}
                products={products}
                isFetching={isFetching}
                handleOnSearchInput={handleOnSearchInput}
                searchInput={searchInput}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemToCart={handleRemoveItemToCart}
                getQuantity={handleGetQuantity}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
               
              />
            }
          />
          <Route path= "/products/:productId" or element = {
            <ProductDetail
              shoppingCart={shoppingCart}
              isFetching ={isFetching}
              handleAddItemToCart = {handleAddItemToCart}
              handleRemoveItemToCart = {handleRemoveItemToCart}
          /> } />
      
          <Route 
            path="/About"
            element={
              <About 
              />
              
            }
            
          />
          <Route 
            path="/Home"
            element={
              <Home 
                error={error}
                products={products}
                isFetching={isFetching}/>
            }
          />
          {/* <Route path="*" or element ={
            <NotFound />
          } */}
          {/* <Navbar /> */}
          {/* <Sidebar 
            products={products}
            isOpen={isOpen}
            isFetching={isFetching}
            shoppingCart={shoppingCart}
            checkoutForm ={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnToggle ={handleOnToggle}
            error={error}
          /> */}
          {/* <Hero /> */}
        
        </Routes>
        </main>
      </BrowserRouter>
      
    </div>
  );
}
