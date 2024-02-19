import React from 'react'

const SearchInput = ({children}) => {
  return (
    <div>
        <div className='border-[1.2px] rounded-xl 
        border-slate-400'>
            <span className='boder-[1.2px] 
            border-slate-400 mr-1 border-r-2'>seach </span>
            <input placeholder='enter' 
            className='outline-none 
            rounded-br-xl rounded-tr-xl 
            border-[1.2px]
            bg-clip-content'>{children}</input>
        </div>
    </div>
  )
}

export default SearchInput