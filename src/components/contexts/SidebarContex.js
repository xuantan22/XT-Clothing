import React, { createContext, useState } from 'react'

export const SidebarContext = createContext();
const SidebarProvide = ({children}) => {
    const [isOpen, setIsOpen] = useState();
    const handleClose = () => {
        setIsOpen(false);
    }
  return (
    <SidebarProvide.Provide value={{isOpen, setIsOpen, handleClose}}>
        {children}
    </SidebarProvide.Provide>
  )
}

export default SidebarProvide