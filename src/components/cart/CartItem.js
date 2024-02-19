import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { truncateText } from '../../utils/truncateText'
import { formatPrice } from '../../utils/formatPrice'
import { CartContext } from '../contexts/CartContext'
const CartItem = ({item}) => {
  const {handleCartQtyIncrease,handleCartQtyDecrease,
    handleRemoveProductFromCart} = useContext(CartContext);
  return (
    <div className='grid grid-cols-5
    text-xs md:text-sm gap-4 border-t-[1.5px]
    border-slate-200 py-4 items-center
    '>
      <div className='col-span-2
      justify-self-start flex 
      gap-2 md:gap-4'>
        <Link to={`/product/${item.id}`}>
          <div className='relative w-[70px]
          aspect-square'>
            <img src={item.image} alt={item.title}
            className='object-contain'/>
          </div>
        </Link>
        <div className='flex flex-col 
        justify-between'>
          <Link to={`/product/${item.id}`}>
            {truncateText(item.title)}
          </Link>
          <div className='w-[70px]'>
            <button  onClick={() =>{handleRemoveProductFromCart(item)}}
            className='text-slate-500 
            underline'>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className='justify-self-center'>{formatPrice(item.price)}</div>
      <div className='justify-self-center justify-between'>
        <button onClick={() => handleCartQtyDecrease(item)}
        className ='px-2 border-[1.2px] border-slate-300'>-</button>
        <span className='ml-2 mr-2'>{item.quantity}</span>
        <button className= 'px-2 border-[1.2px] border-slate-300' onClick={() => handleCartQtyIncrease(item)}>+</button>
        </div>
      <div className='justify-self-end'>{formatPrice(item.price * item.quantity)}</div>
    </div>
  )
}

export default CartItem