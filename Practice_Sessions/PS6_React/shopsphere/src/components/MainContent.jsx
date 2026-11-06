// import React from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/product.json";
// import { useState } from "react";
// import ProductCard from "./ProductCard";

const MainContent = () => {
  const [productList, setProductList] = useState(products);
  const deleteProduct = (id) => {
    const updatedProducts = productList.filter((elem) => {
      return elem.id !== id;
    });
    setProductList(updatedProducts);
  };
  return (
    <main className="flex-1 p-8 ">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">All Products</h2>
          <p className="text-slate-500 mt-2">
            Explore our collections of products.
          </p>
        </div>
        <button className="bg-violet-600 text-white px-5 py-2 rounded-lg">
          {" "}
          + Add Product
        </button>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-6">
        {productList.map((prod) => {
          return (
            <ProductCard key={prod.id} product={prod} del={deleteProduct} />
          );
        })}
      </div>
    </main>
  );
};

export default MainContent;
