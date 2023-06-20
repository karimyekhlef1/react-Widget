import React from 'react'
import AddProductBtr from "./AddProductBtr";
import ProductWidget from './ProductWidget';
export default function MainWidget() {
  return (
     <div className="flex  justify-between border border-y border-gray-200"  style={{height:"80%"}} >
          <ProductWidget />
          <AddProductBtr />
    </div>
  )
}
