import React, { createContext, useContext, useState } from "react";

// Create context
const CarShoppingContext = createContext();

// Custom hook to use the Cart context
export const useCarCart = () => {
  return useContext(CarShoppingContext);
};

export const CarCartProvider = ({ children }) => {
  // items in cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add cars to cart
  const addCarsToCart = (item) => {
    setCartItems((prevItems)=>{
        const existingItem = prevItems.find((cartItem)=>cartItem.id===item.id)
        // if Item is in Cart then increase the quantity
        if(existingItem){
            return prevItems.map((cartItem)=>cartItem.id===item.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem)
        }
        // if Item is not in Cart then add the item to cart
        else{
            return [...prevItems,{...item,quantity:1}]

        }
      })
  };

  // Function to reduce the number of cars in cart
  const reduceCarsInCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (!existingItem) return prevItems;
      if (existingItem.quantity === 1) {
        return prevItems.filter((cartItem) => cartItem.id !== item.id);
      }
      return prevItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    });
  };

  // Function to remove a car from the cart
  const removeCartItem = (item) => {
    setCartItems((prevItems) => {
      return prevItems.filter((cartItem) => cartItem.id !== item.id);
    });
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Function to calculate total price of items in the cart
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CarShoppingContext.Provider
      value={{ cartItems, addCarsToCart, reduceCarsInCart, removeCartItem, clearCart, getCartTotal }}
    >
      {children}
    </CarShoppingContext.Provider>
  );
};
