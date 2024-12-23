import React from "react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { addToCart, removeFromCart, cart } = useCart();

  return (
    <div className="bg-black h-screen">
      {cart.length === 0 ? (
        <h1 className="text-white">Your cart is empty</h1>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="div text-white">
            <h2>{item.product_name}</h2>
            <p>{item.details}</p>
            <p className="text-xl font-bold">
              Price: <span>{item.price}</span>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
