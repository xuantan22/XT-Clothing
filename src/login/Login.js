import React from 'react'
import Heading from '../utils/Heading'
import Button from '../components/Button'
import { AiOutlineGoogle } from 'react-icons/ai'
import Container from '../components/container/Container'
import FormWrap from '../components/wrap/FormWrap'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
   <Container>
      <FormWrap>
        <Heading title='Sign in to XT-shop'/>
        <Button
        outline
        label='Sign in to Google'
        icon={AiOutlineGoogle}
        onClick={() => {}}/>
        <hr className='bg-slate-300 
        w-full h-px'/>

        <input className='w-full 
        outline-none border-[1.2px]
        border-slate-400 h-10' 
        placeholder='Email'>
        </input>

        <input 
        className='w-full outline-none 
        border-[1.2px] border-slate-400 
        h-10' 
        placeholder='Password'
        type='password'>
        </input>

        <Button label ={"Login"}
        onClick={() => {}}/>
        <p>
          Do not have an account?
          <Link className="underline" to="/register">
            Sign up
          </Link>
        </p>
      </FormWrap>
   </Container>
  )
}

export default Login