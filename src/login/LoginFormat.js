import React from 'react'
import Heading from '../utils/Heading'
import Button from '../components/Button'
import { AiOutlineGoogle } from 'react-icons/ai'
import Input from '../components/input/Input'
import { Link } from 'react-router-dom'
const LoginFormat = () => {
  return (
    <>
        <Heading title='Sign in to XT-shop'/>
        <Button outline
        label='Sign in to Google'
        icon={AiOutlineGoogle}
        onClick={() => {}}/>
        <hr className='bg-slate-300 w-full h-px'/>
        <Input
            id="email"
            label="Email"
            
        />
        
        <Input
            id="password"
            label="password"
            type="password"
        />
        <Button label={"Login"}/>
        <p>
            Do not have an account? 
            <Link className='underline' to="/register">Sign up</Link>
        </p>
    </>
  )
}

export default LoginFormat