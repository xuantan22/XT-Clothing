import React from 'react'

const FooterList = ({children}) => {
  return (
    <div className='w-full
    sm:w-full md:w-1/4 lg:w-1/6
    flex flex-col gap-2'>
        {children}
    </div>
  )
}

export default FooterList