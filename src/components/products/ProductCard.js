import React,{useContext} from 'react'
import { truncateText } from '../../utils/truncateText'
import {Rating} from '@mui/material'
import { formatPrice } from '../../utils/formatPrice'
import { BsPlus, BsEyeFill  } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
const ProductCard = ({product}) => {
    const {handleAddProductToCart,addToCart } = useContext(CartContext);
    const {id} = product
  return (
        <div>
            <div className='border border-[#e4e4e4] 
            h-[300px] mb-4 relative overflow-hidden group
            transition'>
                <div className='flex w-full h-full 
                justify-center items-center'>
                    <div className='w-[200px] mx-auto flex
                    justify-center items-center'>
                        <img 
                        className='max-h-[160px] 
                        group-hover:scale-110
                        transition duration-300' 
                        fill src={product.image} 
                        alt={product.title}
                        />
                    </div>
                    <div className='absolute top-6 -right-11
                    p-2 flex flex-col items-center
                    justify-center gap-y-2 opacity-0 
                    group-hover:right-5 group-hover:opacity-100 
                    transition-all duration-300'>
                        <button onClick={() => addToCart(product,product.id)}>
                            <div className='flex justify-center
                            items-center text-white w-12 h-12
                            bg-red-500'>
                                <BsPlus className='text-3xl'/>
                            </div>
                        </button>
                        <Link 
                        to={`/product/${id}`}
                        className='w-12 h-8 bg-white flex 
                        justify-center items-center text-primary
                        drop-shadow-xl'
                        >
                            <BsEyeFill className='text-3xl'/>
                        </Link>
                    </div>
    
                </div>
                </div>
                <div className='flex flex-col
                items-center w-full gap-1'>
                    <div className=' text-slate-700'>
                        {truncateText(product.title)}
                    </div>
                    <div className='items-center'>
                        <Rating value={(Math.floor(product.rating.rate))} readOnly/>
                    </div>
                    <div>{product.rating.count} reviews</div>
                    <div>{formatPrice(product.price)}</div>
                </div>
        </div>
  )
}

export default ProductCard