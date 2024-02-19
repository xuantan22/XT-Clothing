import React, { useContext } from 'react'
import { CartContext } from '../components/contexts/CartContext'
import CartItem from '../components/cart/CartItem';
import Heading from '../utils/Heading';
import { Link } from 'react-router-dom';
import {MdArrowBack} from 'react-icons/md';
import Button from '../components/Button';
import { formatPrice } from '../utils/formatPrice';
const CartProducts = () => {
    const {cartProducts, cartTotalAmount,handleClearCart} = useContext(CartContext);
    if(!cartProducts || cartProducts.length === 0){
      return (
        <div className='flex flex-col items-center '>
          <div className='text-2xl'>Your cart is empty</div>
          <div>
            <Link to = {"/"}
            className='text-slate-500 flex items-center gap-1 mt-2'>
              <MdArrowBack/>
              <span>Start Shopping !</span>
            </Link>
          </div>
        </div>
      )
    }
  return (
    <div>
      <Heading title="Shopping Cart" center/>
      <div className='grid grid-cols-5
      gap-4 pb-2 items-center mt-8'>
        <div className='col-span-2
        justify-self-start '>Product</div>
        <div className='justify-self-center'>Price</div>
        <div className='justify-self-center'>Quantity</div>
        <div className='justify-self-end '>Total</div>
      </div>

      <div>
          { cartProducts && cartProducts.map((item => {
              return <CartItem item={item}/>
          })) }
      </div>
      <div className='border-t-[1.5px]
      border-slate-200 py-4 flex
      justify-between gap-1'>
        <div className='w-[90px]'>
          <Button small label="Clear Cart" outline onClick={() => handleClearCart()}/>
        </div>
        <div>
          <div className='flex justify-between'>
            <span>Subtotal</span>
            <span>{formatPrice(cartTotalAmount)}</span>
          </div>
          <p>Taxes and shipping calculate at checkout</p>
          <Button label= "Checkout"  to="/login" onClick={() => {}}/>
          <Link to={"/"} className='flex'>
              <MdArrowBack/>
              <span className='text-slate-500'>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartProducts