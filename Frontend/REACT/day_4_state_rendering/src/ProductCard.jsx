import React from 'react'

const ProductCard = ({product,del}) => {
    console.log(product)
  return (
    <div className='p-2 border rounded flex flex-col gap-2'>
      <div className='w-40'>
        <img src= {product.image} alt="" />
      </div>
      <h2 className='font-semibold'>Product Name : {product.title.substring(0,20)}</h2>
      <h3 className='text-xs font-semibold'>Category : {product.category}</h3>
      <h3 className='text-xs font-semibold'>Price : {product.price} </h3>
      <button className='p-2 bg-amber-700 rounded' onClick={()=>{
        del(product.id) 
      }}>Delete</button>
    </div>
  )
}

export default ProductCard
