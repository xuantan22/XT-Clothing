import React from 'react'
import { IconBase } from 'react-icons'
import { Link } from 'react-router-dom'
const Button = ({
    label,
    disabled,
    outline,
    small,
    custom,
    icon,
    to,
   
    onClick
}) => {
  if(to) {
    return <Link to={to} className='cursor-pointer 
    border-[1.5px] border-slate-500 bg-slate-700
    rounded-md w-full transition  text-center 
    justify-center grid grid-cols-1'>
      {label}
      </Link>
  }
  return (
    <button
    onClick={onClick}
    disabled={disabled}
    className={`disabled:opacity-60
    disabled:cursor-not-allowed w-full
    rounded-md hover:opacity-80
    transition border-slate-700 flex
    items-center justify-center gap-2
    ${outline ? 'bg-white' : 'bg-slate-700'}
    ${outline ? 'text-slate-700' : 'text-white'}
    ${small ? 'text-sm font-light' : 'text-md font-semibold'}
    ${small ? 'py-3 px-0 border-[1px]' : 'py-3 px-2 border-2'}
    ${custom ? custom : ""}
  
    `}>
        {icon && <IconBase size={24}/>}
        {label}
    </button>
  )
}

export default Button