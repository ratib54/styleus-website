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
   stagger: 0.1,
   opacity: 0,
  });
 }, []);

 return (
  <div className="bg-black min-h-screen p-6 sm:p-10 lg:p-20 space-y-10">
   {cart.length === 0 ? (
    <div className="grid place-items-center space-y-2">
     <ToastContainer />
     <span>
      <Lottie animationData={emptyItems} className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" aria-label="Empty cart animation" />
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Your Cart is Empty</h1>
     </span>
     <NavLink to='/more'>
      <button className="btn bg-black text-white px-6 py-3 border mt-4">Choose Products</button>
     </NavLink>
    </div>
   ) : (
    <>
     {cart.map((item) => (
      <div key={item.id} id="cartCard" className="space-y-4">
       <div className="flex flex-col sm:flex-row gap-4 justify-between items-center h-auto border-b-2 px-6 py-4 sm:px-20 sm:py-6 bg-gray-800 rounded-xl">
        <div className="w-32 h-32 sm:w-40 sm:h-40 border rounded-xl overflow-hidden">
         <img src={item.image_url} alt={item.product_name} className="w-full h-full object-cover" />
        </div>
        <section className="flex-1">
         <div className="text-white space-y-1">
          <h2 className="text-lg sm:text-xl font-bold">{item.product_name}</h2>
          <p className="text-xs sm:text-sm max-w-xs sm:max-w-xl">{item.details}</p>
          <p className="text-sm sm:text-lg font-bold text-red-800">
           Price: $<span>{item.price}</span>
          </p>
         </div>
        </section>

        <div>
         <button
          className="delete text-red-700 p-2 sm:p-3 border rounded-xl hover:bg-red-100"
          onClick={() => handleRemove(item.id)}
         >
          <DeleteIcon />
         </button>
        </div>
       </div>
      </div>
     ))}

     <div className="sticky bottom-2 bg-[#000000a5] px-6 sm:px-20 py-4">
      <div className="flex flex-col sm:flex-row justify-between items-center border-t-2 pt-5 mt-5 text-white font-bold text-lg sm:text-xl">
       <span>Total Price:</span>
       <span>${totalPrice}</span>
      </div>

      <button className="bg-white text-black px-6 sm:px-10 py-3 btn border-black rounded w-full sm:w-auto mt-10 mx-auto pak font-bold text-sm sm:text-lg">
       Place Your Order
      </button>
     </div>
    </>
   )}
  </div>
 );
};

export default Cart;
