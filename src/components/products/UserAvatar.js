import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const UserAvatar = ({src}) => {
    if(src){
        return(
            <img src={src} alt="avatar"
            className='rounded-full'
            height={30}
            width={30}/>
        )
    }
  return (
    <FaUserCircle size={24}/>
  )
}

export default UserAvatar