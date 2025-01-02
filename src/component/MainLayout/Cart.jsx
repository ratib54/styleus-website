import React from "react";
import { useCart } from "../../context/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import emptyItems from "../../../public/animationEmpty.json";
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { duration } from "@mui/material";

const Cart = () => {
 const { addToCart, removeFromCart, cart } = useCart();

 const handleRemove = (id) => {
  removeFromCart(id);
 };

 // Calculate total price
 const totalPrice = cart.reduce((total, item) => {
  const price = parseFloat(item.price);
  return total + (isNaN(price) ? 0 : price);
 }, 0).toFixed(2);

 // Use Gsap From Cart //

 useGSAP(() => {

  gsap.from('#cartCard > *', {
   x: -100,
   duration: 0.5,
   delay: 0.2,
   stagger: 0.1,  // Stagger each child element's animation by 0.1 seconds
   opacity: 0,
  });
 }, []);


 return (
  <div className="bg-black min-h-screen p-20 space-y-10" >
   {cart.length === 0 ? (
    <div className="grid place-items-center space-y-2">
     <ToastContainer />
     <span>
      <Lottie animationData={emptyItems} className="w-96 h-96" aria-label="Empty cart animation" />
      <h1 className="text-[40px] font-bold text-white">Your Cart is Empty</h1>
     </span>
     <NavLink to='/more'>
      <button className="btn bg-black text-white px-6 border">Choose Products</button>
     </NavLink>
    </div>
   ) : (
    <>
     {cart.map((item) => (
      <div key={item.id} id="cartCard">
       <div className="flex gap-3 justify-between items-center h-min border-b-2 px-20 py-3 bg-gray-800">
        <div className="w-40 h-40 border rounded-xl overflow-hidden">
         <img src={item.image_url} alt={item.product_name} className="w-full h-full object-cover" />
        </div>
        <section className="flex-1">
         <div className="text-white space-y-1">
          <h2 className="text-[20px] font-bold">{item.product_name}</h2>
          <p className="max-w-xl text-[12px]">{item.details}</p>
          <p className="text-[15px] font-bold text-red-800">
           Price: $<span>{item.price}</span>
          </p>
         </div>
        </section>

        <div>
         <button
          className="delete text-red-700 p-3 border rounded-xl hover:bg-red-100"
          onClick={() => handleRemove(item.id)}
         >
          <DeleteIcon />
         </button>
        </div>
       </div>
      </div>
     ))}

     <div className="sticky bottom-2 bg-[#000000a5] px-20">
      <div className="flex justify-between items-center border-t-2 pt-5 mt-5 text-white font-bold text-xl ">
       <span>Total Price:</span>
       <span>${totalPrice}</span>
      </div>

      <button className="bg-white text-black px-10 py-3 btn border-black rounded w-96 ml-[35%] mt-16  pak font-bold text-[15px] text-center ">PLace Your Order</button>
     </div>

    </>
   )}
  </div>
 );
};

export default Cart;
