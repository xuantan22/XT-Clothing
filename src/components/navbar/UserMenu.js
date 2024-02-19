import React, { useCallback } from 'react'
import { FaCaretDown } from "react-icons/fa";
import UserAvatar from '../products/UserAvatar';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import { useState } from 'react';
import BackDrop from './BackDrop';
const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  },[]);
  return (
    <>
    <div className='relative z-30'
    onClick={toggleOpen}>
      <div className='
      flex cursor-pointer
      p-2 border-[1px] 
      border-slate-400
      flex-row items-center 
      gap-1 rounded-full
      hover:shadow-md 
      transition 
      text-slate-700'>
        <UserAvatar/>
        <FaCaretDown/>
      </div>
      {isOpen && (
      <div className='absolute rounded-md 
      shadow-md w-[170px] bg-white 
      overflow-hidden right-0 top-12 
      text-sm flex flex-col cursor-pointer
      '>
        {currentUser ?
        <div>
          <Link to="/cart">
            <MenuItem onClick={toggleOpen}>
              Your Orders
            </MenuItem>
          </Link>
            <MenuItem onClick={toggleOpen}>
              Logout
            </MenuItem>
        </div>
        :
        <div>
          <Link to ="/login">
          <MenuItem onClick={toggleOpen}>
            Login
          </MenuItem>
          </Link>
          <Link to="/register">
          <MenuItem onClick>
            Register
          </MenuItem>
          </Link>
        </div>
      }
      </div>
      )}
    </div>
        {isOpen ? <BackDrop onClick={toggleOpen}/> : null}
      
    </>
  )
}

export default UserMenu