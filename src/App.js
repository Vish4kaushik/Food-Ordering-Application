import React,{useState} from "react";
import Header from './Components/Layout/Header';
import Meals from './Components/Meal/Meals';
import Cart from './Components/Cart/Cart'
import CartProvider from "./Store/CartProvider";

const App = () =>{

  const [showCart, setShowCart] = useState(false)

  const showCartHandler = (props) =>{
    setShowCart(!showCart);
  }

  return(
    <CartProvider>
      {showCart && <Cart onCloseCart={showCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  )
}

export default App;