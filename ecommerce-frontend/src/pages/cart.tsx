import { useState } from "react";
import { VscError } from "react-icons/vsc";
import { useEffect } from "react";
import CartItem from "../component/cart-item";
import { Link } from "react-router-dom";
const cartItems=[
  {
    productId:"adaasdsd",
    photo : "https://m.media-amazon.com/images/I/71vFKBpKakL._SX522_.jpg",
    name:"MacBook",
    price:3000,
    quantity : 4,
    stock:10,
  }
]
const subtotal = 4000;
const tax = Math.round(subtotal*0.18);
const shippingCharges=200;
const discount = 400;
const total =subtotal+tax+shippingCharges;
const Cart = () => {
  const [couponCode,setcouponCode]=useState<string>("");
  const [isValidcouponCode,setisValidcouponCode]=useState<boolean>(false)


  useEffect(() => {
    const timeOutID = setTimeout(()=>{
      if(Math.random()>0.5) setisValidcouponCode(true);
      else setisValidcouponCode(false);
    },1000);
  
    return () => {
      clearTimeout(timeOutID);
      setisValidcouponCode(false);
    }
  }, [couponCode])
  
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? cartItems.map((i,idx)=>(
          <CartItem key = {idx} cartItem={i}/>
        )): <h1>No Items Added</h1>}
      </main>
      <aside>
        <p>SubTotal:${subtotal}</p>
        <p>Shipping Charges : ${shippingCharges}</p>
        <p>Tax:${tax}</p>
        <p>
          Discount : <em className="red"> - ${discount}</em>
        </p>
        <p>
          <b>Total:${total}</b>
        </p>
        <input type="text" name="" id="" placeholder="CouponCode" value={couponCode} onChange={(e)=> setcouponCode(e.target.value)}
         />
        {couponCode &&(
           (isValidcouponCode? (<span className="green">${discount}off using <code>{couponCode}</code></span> ): 
           (<span className="red">Invalid Coupon <VscError/></span>)
        )
        )}
      {
        cartItems.length>0 && <Link to = "/shipping">Checkout</Link>
      }  
      </aside>
      
    </div>
  )
}

export default Cart
