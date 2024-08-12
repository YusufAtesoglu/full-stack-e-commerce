import { createContext, useEffect } from "react";
import { useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (cartItem) => {
    //setCartItems([...cartItems,product]); 1.yol
    setCartItems((prevCart) => [...prevCart,
        {...cartItem,
            quantity:cartItem.quantity ? cartItem.quantity : 1,

        }, ]);console.log(cartItem)
  };

  const removeFromCart = (itemId) => {
    const filteredCartItems = cartItems.filter((cartItem) => {
      return cartItem._id !== itemId;
    });
    setCartItems(filteredCartItems);
  };
  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        setCartItems,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
