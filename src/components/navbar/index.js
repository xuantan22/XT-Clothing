import React from 'react'
import Container from '../container/Container'
import CartCount from './CartCount'
import { Link } from 'react-router-dom'
import UserMenu from './UserMenu'
import SearchInput from './SearchInput'
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlinePolicy } from "react-icons/md";
import { BsSendArrowDownFill } from "react-icons/bs";
import { VscArrowSwap } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className='bg-slate-200
    sticky
    top-0
    w-full
    z-20
    shadow-sm'>
            <div className='py-3 border-b-[1px]'>
                <Container>
                    <div className='
                    flex items-center
                    justify-between
                    gap-1 md:gap-0'>
                        <Link to='/'>
                            <span className={`font-serif
                            font-bold text-2xl`}>XT-Clothing</span>
                        </Link>
                        <SearchInput/>
                        <div className='
                        flex items-center
                        gap-8 md:gap-12'>
                            <CartCount/>
                            <UserMenu/>
                        </div>
                    </div>
                </Container>
        </div>
        <div className='flex justify-around'>
            <Link className='justify-self-center flex'
            to ="/">
                <TiHomeOutline size={20}/>
                <span>Home</span>
            </Link>
            <Link className='justify-self-center flex'
            to="/deliverypolicy">
                <MdOutlinePolicy size={20}/>
                <span>Shopping Policy</span>
            </Link>
            <Link className='justify-self-center flex'
            to="/aboutus">
                <BsSendArrowDownFill size={20}/>
                <span>About Us</span>
            </Link>
            <Link className='justify-self-center flex'
            to="/exchanges">
                <VscArrowSwap size={20}/>
                Return & Exchanges
                </Link>
            <Link></Link>
        </div>
    </div>
  )
}

export default Navbar