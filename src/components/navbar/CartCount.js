import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
import { CartContext } from '../contexts/CartContext'
const CartCount = () => {
  const {cartTotalQty} = useContext(CartContext);
  return (
    <div className='relative cursor-pointer
    '>
        <div>
            <Link to={'/cart'}>
                <FiShoppingCart size={24}/>
            <span className='absolute
            top-[-6px] right-[-10px]
            bg-slate-700 text-white
            h-5 w-5 rounded-full flex
            items-center justify-center 
            text-sm'>{cartTotalQty}</span>
            </Link>
        </div>
        
    </div>
  )
}

export default CartCount