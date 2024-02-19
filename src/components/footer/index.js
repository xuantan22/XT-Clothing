import React from 'react'
import Container from '../container/Container'
import FooterList from './FooterList'
import { Link } from 'react-router-dom'
import { MdFacebook } from 'react-icons/md'
import { AiFillAmazonCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className='bg-slate-700
    text-slate-200 text-sm mt-72
    '>
      <Container>
        <div className='flex flex-col 
        md:flex-row justify-between 
        pt-16 pb-8'>
          <FooterList>
            <h3 className='text-base font-bold
            mb-2'>Store Categories</h3>
            <Link to="/">Clothing</Link>
            <Link to="/">electronics</Link>
            <Link to="/">Jewelery</Link>
            <Link to="#">Phone</Link>
            <Link>Laptop</Link>
            <Link>Furniture</Link>
            <Link></Link>
          </FooterList>
          <FooterList>
            <h3 className='text-base font-bold
            mb-2'>Customer Service</h3>
            <Link to="#">Contact Us</Link>
            <Link to="#">Shipping Policy</Link>
            <Link to="#">Return & Exchanges</Link>
          </FooterList>
          <FooterList>
            <div className='w-full mb-6 md:mb-0'>
              <h3 className='text-base font-bold
              mb-2'>About Us</h3>
              <p className='mb-2'>At our store, we are dedicated to providing 
                the latest and greatest clothing,jewelery and devices 
                to our customers with a wide selection of clothing,
                 jewele, devices and accessories 
              </p>
              <p>{new Date().getFullYear()} XT-shop.All rights reserved</p>
            </div>
          </FooterList>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>
              Follow Us</h3>
            <div className='flex gap-2'>
              <Link to="#">
                <MdFacebook size={24}/>
              </Link>
              <Link to="#">
                <AiFillAmazonCircle size={24}/>
              </Link>
              <Link to="#">
                <AiFillInstagram size={24}/>
              </Link>
              <Link to="#">
                <AiFillYoutube size={24}/>
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  )
};

export default Footer