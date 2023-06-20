import React from 'react'

export default function Product(props) {
    const {title , image , marce } = props.product 
  return (
    <div className='flex flex-col w-1/2 '>
        <div className='flex flex-col  text-xs items-center '>
            <img src={image.url} className='p-1'></img>
            <div className=' font-bold'>{marce}</div>
            <div>{title}</div>

        </div>
        <div className=' border-t ' >
            

        </div>
        
   

    </div>

  )
}
