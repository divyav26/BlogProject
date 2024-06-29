import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div className='w-full h-full overflow-hidden'>
      <Header />
      <div className=''>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout