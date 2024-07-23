import { createContext } from "react";

import { useState } from "react";
export const CartContext=createContext();

const CartProvider=({children})=>{
    const [cartItems, setCartItems] = useState([]);

    console.log("cartItems:",cartItems)
    const addToCart=(cartItem)=>{
        //setCartItems([...cartItems,product]); 1.yol
        setCartItems((prevCart)=> [...prevCart,cartItem]);
          }
    return(
        <CartContext.Provider 
        value={{
            addToCart,
            cartItems,
        }}>
        
        {children}
        </CartContext.Provider>
    )
}
export default CartProvider;