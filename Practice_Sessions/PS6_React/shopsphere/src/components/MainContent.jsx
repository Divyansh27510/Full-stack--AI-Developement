// import React from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/product.json";
// import { useState } from "react";
// import ProductCard from "./ProductCard";
import AddProduct from "./AddProduct"


const MainContent = ({searchTerm,selectedCategory}) => {
  const [productList, setProductList] = useState(products);
  const [showAddForm,setShowAddForm] = useState(false)

  const deleteProduct = (id) => {
    setProductList(prev =>
      prev.filter(product => product.id !== id)
    );
  };

  const filteredProducts = productList.filter((product)=>{
    return ((product.title.toLowerCase().includes(searchTerm.toLowerCase())) && (selectedCategory === "All Products" ||
    product.category.toLowerCase() === selectedCategory.toLowerCase()))
  });

  let content;
  if(filteredProducts.length > 0){{
    content = filteredProducts.map((prod)=>{
      return (
        <ProductCard
        key = {prod.id}
        product={ prod}
        del={deleteProduct}
        />
      )
    })
  }}else {
  content = (
    <div className="col-span-4 flex flex-col items-center justify-center
                    py-16 px-4 bg-white rounded-2xl border border-slate-200">

      <div className="w-16 h-16 rounded-full bg-violet-100
                      flex items-center justify-center mb-4">
        <span className="text-3xl">🔍</span>
      </div>

      <h2 className="text-xl font-bold text-slate-800">
        No Products Found
      </h2>

      <p className="text-slate-500 text-sm mt-2 text-center">
        We couldn't find any products matching your search.
      </p>

      <p className="text-slate-400 text-xs mt-1">
        Try searching with a different keyword.
      </p>

    </div>
  );
}

  return (
    <main className="flex-1 p-8 ">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">All Products</h2>
          <p className="text-slate-500 mt-2">
            Explore our collections of products.
          </p>
        </div>
        <button 
        onClick={()=>setShowAddForm(!showAddForm)}
        className="bg-violet-600 text-white px-5 py-2 rounded-lg">
          {" "}
          + Add Product
        </button>
        
      </div>
      {showAddForm && <AddProduct />}
      <div className="mt-8 grid grid-cols-4 gap-6">
        {/* {filteredProducts.map((prod) => {
          return (
            <ProductCard key={prod.id} product={prod} del={deleteProduct} />
          );
        })} */}
        {content}
      </div>
    </main>
  );
};

export default MainContent;
