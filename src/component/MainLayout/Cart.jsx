import React from "react";
import { useCart } from "../../context/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
 const { addToCart, removeFromCart, cart } = useCart();

 return (
  <div className="bg-black h-[3000px] p-20 space-y-10 ">
   {cart.length === 0 ? (
    <h1 className="text-white grid justify-center items-center min-h-screen font-light text-[60px] uppercase neue">Your cart is empty</h1>
   ) : (
    cart.map((item) => (
     <div key={item.index} className=" h-min border-b-2 px-20 bg- py-1  flex gap-3 justify-between items-center">
      <div className="w-40 h-40 border rounded-xl">
       {item.image_url}
      </div>
      <section>
       <div className="div text-white space-y-1 ">
        <h2 className="text-[20px] font-bold pak">{item.product_name}</h2>
        <p className="max-w-xl text-[12px]">{item.details}</p>
        <p className="text-[15px] pak font-bold text-red-800">
         Price: <span>{item.price}</span>
        </p>
       </div>
      </section>

      <div>
       <button className="delete text-red-700 p-3 border rounded-xl"><DeleteIcon /></button>
      </div>
     </div>
    ))
   )}
  </div>
 );
};

export default Cart;
