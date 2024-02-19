/* eslint-disable react/jsx-no-undef */
import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { ProductContext } from '../components/contexts/ProductContext';
import { Rating } from '@mui/material'
import Button from '../components/Button'
import { CartContext } from '../components/contexts/CartContext';
const Horizontal = () => {
  return <hr className='w-[30%] my-2'/>
}
const ProductDetails = () => {
  let {id} = useParams();
  const {handleAddProductToCart,addToCart} = useContext(CartContext);
  const {products} = useContext(ProductContext);
  const product = products.find((item) => {
    return item.id === parseInt(id)
  })
  if(!product){
    return <section className='h-screen flex 
    justify-center items-center'>
      Loading ...
    </section>
  }
  const {title, description, image, rating, category} = product;
  return (
    <div className='grid grid-cols-1 
    md:grid-cols-2 gap-0'>
      <div>
        <img className='w-full h-2/5 object-contain' src={image} alt={title}/>
      </div>
      <div>
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <div className='flex items-center gap-2'>
          <Rating value={rating.rate} readOnly/>
          <div>{product.rating.count} reviews</div>
        </div>
        <Horizontal/>
        <p className='text-justify mr-2'>{description}</p>
        <Horizontal/>
        <div>
          <span className='font-semibold'>CATEGORY: {category}</span>
        </div>
        <Horizontal/>
        <Horizontal/>
        <Horizontal/>
        <Horizontal/>
        <Button small label="Add To Cart" 
        onClick={() =>addToCart(product,product.id) }/>
      </div>
    </div>
  )
}

export default ProductDetails