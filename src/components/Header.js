import React from 'react'
import {NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='w-full h-[10vh] bg-black text-white'>
            <div>
                <h1>Blog</h1>
            </div>
            <div>
                <NavLink>Home</NavLink>
                <NavLink>Create</NavLink>
                <NavLink>About</NavLink>
            </div>
            <div>
              <NavLink>Login</NavLink>
            </div>
            

   </div>
    </>

  )
}

export default Header
