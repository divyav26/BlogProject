import React, { useState } from 'react'
import {NavLink } from 'react-router-dom'
import { Nav } from '../JsonData/Layout'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen]= useState(false)

  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='flex justify-between items-end bg-[#1565C0] py-4 px-4 fixed top-0 left-0 w-full'>
      <div>
        <h1 className='font-bold text-white'>BLOG<span className='text-red-400'>DM</span></h1>
      </div>

      <div className='lg:flex lg:justify-between items-center gap-4 text-white hidden'>
          {
            Nav.map((item)=>{
              return(
                <div key={item.id}>
                <NavLink to={item.path} className={({ isActive, isPending }) =>isActive ? "active": isPending ? "pending" : ""}>{item.title}</NavLink>
                </div>
              )
            })
          }
      </div>

      <div className='lg:flex lg:justify-between items-center gap-4 text-white font-bold hidden'>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
      </div>

      <div className='lg:hidden'>
        <button onClick={toggleMenu}>
        {
          isMenuOpen ? <MdOutlineRestaurantMenu className='text-white font-bold text-3xl' /> :<MdOutlineMenuOpen className='text-white font-bold text-3xl' />
        }  
        </button>
      </div>
      {/* menu mob device  */}

      <div className={`lg:hidden text-lg space-y-4 px-4 py-6 mt-20 text-white bg-[#1565C0] ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150":"hidden"}`}>
      {
            Nav.map((item)=>{
              return(
                <div key={item.id}>
                <NavLink to={item.path} className={({ isActive, isPending }) =>isActive ? "active": isPending ? "pending" : ""}>{item.title}</NavLink>
                </div>
              )
            })
          }
      </div>
    </div>

  )
}

export default Header
