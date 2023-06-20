import React from 'react'
import logo from '../assets/logo.png'

function FooterWidget() {
  return (
    <div className='rounded-b-lg  flex items-center justify-center '  style={{height:"10%"}} >
        <p className=' font-semibold'>
          Powered by
        </p>
        <img src={logo} style={{width:"120px",height:"55px"}} />

        
    </div>
  )
}

export default FooterWidget