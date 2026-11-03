// import React from 'react'

// const ProductCard = ({product,del}) => {
//     console.log(product)
//   return (
//     <div className='p-2 border rounded flex flex-col gap-2'>
//       <div className='w-40'>
//         <img src= {product.image} alt="" />
//       </div>
//       <h2 className='font-semibold'>Product Name : {product.title.substring(0,20)}</h2>
//       <h3 className='text-xs font-semibold'>Category : {product.category}</h3>
//       <h3 className='text-xs font-semibold'>Price : {product.price} </h3>
//       <button className='p-2 bg-amber-700 rounded' onClick={()=>{
//         del(product.id) 
//       }}>Delete</button>
//     </div>
//   )
// }

// export default ProductCard








// ----------------AIIIIII-------------------



import React from "react";
import { Star, Trash2, Eye, ShoppingCart, Tag } from "lucide-react";

const categoryColors = {
  "men's clothing": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "women's clothing": "bg-rose-500/10 text-rose-400 border-rose-500/20",
  jewelery: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  electronics: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

const ProductCard = ({ product, del, onQuickView, onAddToCart }) => {
  const badgeClass =
    categoryColors[product.category] ||
    "bg-slate-500/10 text-slate-400 border-slate-500/20";

  return (
    <div className="group relative bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between overflow-hidden">
      
      {/* Top Image Container */}
      <div className="relative w-full h-56 bg-slate-950/80 p-6 flex items-center justify-center overflow-hidden border-b border-slate-800/60">
        {/* Category Badge */}
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md border backdrop-blur-md z-10 ${badgeClass}`}
        >
          {product.category}
        </span>

        {/* Quick View Button Overlay */}
        <button
          onClick={() => onQuickView && onQuickView(product)}
          className="absolute top-3 right-3 p-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-700/60 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 shadow-lg"
          title="Quick View"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold text-slate-200">
                {product.rating?.rate ?? 0}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                ({product.rating?.count ?? 0})
              </span>
            </div>
            <span className="text-xs font-mono text-slate-500">
              ID: #{product.id}
            </span>
          </div>

          {/* Product Title */}
          <h2
            className="text-base font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug mb-2"
            title={product.title}
          >
            {product.title}
          </h2>

          {/* Short Description */}
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        {/* Footer & Actions */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          {/* Price */}
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wide block font-semibold">
              Price
            </span>
            <span className="text-xl font-bold text-emerald-400 tracking-tight">
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {onAddToCart && (
              <button
                onClick={() => onAddToCart(product)}
                className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl border border-slate-700 transition-all duration-200 hover:scale-105"
                title="Add to Cart"
              >
                <ShoppingCart className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => del(product.id)}
              className="px-3 py-2.5 bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white rounded-xl border border-rose-500/20 hover:border-rose-500 transition-all duration-200 flex items-center gap-1.5 text-xs font-semibold shadow-sm hover:shadow-rose-500/25 hover:scale-105"
              title="Delete Product"
            >
              <Trash2 className="w-4 h-4" />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;