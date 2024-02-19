/* eslint-disable no-unused-vars */
'use client'
import React,{useContext, useState} from 'react'
import { ProductContext } from '../components/contexts/ProductContext'
import ProductCard from '../components/products/ProductCard'
const Home = () => {
  const {products} = useContext(ProductContext)
  const [productsCategory, setProductsCategory] = useState();

  const filteredClothing = products.filter((item) => {
    return item.category === "men's clothing" ||  item.category ==="women's clothing"
  });
  const filteredJewelery = products.filter((item) => {
    return item.category === "jewelery"
  })
  const filteredElectronic = products.filter((item) => {
    return item.category === "electronics"
  });


  return (
    <div className='p-8 mt-5'>
      <div className=' flex flex-row 
      justify-between mb-3'>
        <div className={`
         hover:border-b-red-700 
        text-center border-b-2
        cursor-pointer
        border-[1.2px]
        border-slate-300
        hover:opacity-60 w-10`} 
        onClick={() => setProductsCategory(products)}>All</div>
        <div className=' 
        hover:border-b-red-700 
        cursor-pointer hover:opacity-60
        text-center border-[1.2px] 
        border-slate-300 border-b-2' 
        onClick={() => setProductsCategory(filteredClothing)}>Clothings</div>
        <div className="border-b-2 
        hover:border-b-red-700 
        cursor-pointer hover:opacity-60
        border-slate-300 border-[1.2px]" 
        onClick={() => setProductsCategory(filteredElectronic)}>Electronics</div>
        <div className=' border-b-2  
        hover:border-b-red-700
        cursor-pointer hover:opacity-60
        border-slate-300 border-[1.2px]' 
        onClick={() => setProductsCategory(filteredJewelery)}>
          Jewelerys
          </div>
      </div>
      <div className='
      grid gird-cols-2 sm:grid-cols-3 
      lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-5'>
        {productsCategory ? productsCategory.map((product => {
          return <ProductCard key={product.id} product={product}/>
        })) : products.map((product => {
          return <ProductCard key={product.id} product={product}/>
        }))}
      </div>
    </div>
  )
}

export default Home