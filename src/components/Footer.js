import React from 'react'
import { Apples, Business, Cherry, category } from '../JsonData/Layout'

const Footer = () => {
  return (
   <div className='bg-[#1565C0] text-white grid lg:grid-cols-5 grid-cols-2 py-[1rem] px-[1rem]'>
    <div>
        <p className='font-bold text-lg'>Category</p>
        {
            category.map((item)=>{
                return(
                    <div className='' key={item.id}>
                        <p className='text-xs text-white py-2'>{item.title}</p>
                    </div>
                )
            })
        }
    </div>
    <div>
    <p className='font-bold text-lg'>Apples</p>
        {
            Apples.map((item)=>{
                return(
                    <div className='' key={item.id}>
                        <p className='text-xs text-white py-2'>{item.title}</p>
                    </div>
                )
            })
        }
    </div>
    <div>
    <p className='font-bold text-lg'>Cherry</p>
        {
            Cherry.map((item)=>{
                return(
                    <div className='' key={item.id}>
                        <p className='text-xs text-white py-2'>{item.title}</p>
                    </div>
                )
            })
        }
    </div>
    <div>
    <p className='font-bold text-lg'>Business</p>
        {
            Business.map((item)=>{
                return(
                    <div className='' key={item.id}>
                        <p className='text-xs text-white py-2'>{item.title}</p>
                    </div>
                )
            })
        }
    </div>
    <div>
        <p className='text-sm font-bold py-2'>Subscribe for updates</p>
        <div className='flex justify-between items-center gap-2'>
            <input type='text' />
        </div>
    </div>
   </div>
  )
}

export default Footer
