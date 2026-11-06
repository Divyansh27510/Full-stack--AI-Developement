import React from 'react'

const ProductCard = ({product,del}) => {
  return (
    <div className='bg-white border border-slate-200 rounded-xl p-4'>
      <img
        src={product.image}
        alt="{product.title}"
        className="w-full h-48 object-contain"
      />
      <h3 className='text-lg font-semibold mt-4'>{product.title}</h3>
      <p className='text-slate-500 text-sm mt-1'>{product.category}</p>
      <p className='text-xl font-bold mt-3'>${product.price}</p>
      <div className='flex justify-between items-center mt-2'>
        <span className='text-amber-500 text-sm'>
            ⭐ {product.rating.rate}
        </span>
        <span className='text-slate-400 text-sm'>
            ({product.rating.count} reviews)
        </span>
      </div>
      <div >
        <button className='w-full bg-violet-600 text-white py-2 rounded-lg mt-4'>Add to cart</button>
        <button className='w-full bg-red-600 text-white py-2 rounded-lg mt-4' onClick={()=>{
            del(product.id)
        }}>Delete</button>
      </div>
    </div>
  )
}

export default ProductCard
