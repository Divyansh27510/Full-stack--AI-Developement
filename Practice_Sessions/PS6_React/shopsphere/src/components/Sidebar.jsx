import React from "react";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
  "All Products",
  "men's clothing",
  "women's clothing",
  "electronics",
  "jewelery"
  ];

  


  return (

    <aside className="w-60 min-h-screen bg-white border-r border-slate-300 p-6">
      <h2 className="text-lg font-bold text-slate-800 mb-6">Categories</h2>

  
      <ul className="space-y-3 text-slate-600">
        {/* <li
          onClick={() => setSelectedCategory("All Products")}
          className={`cursor-pointer p-2 rounded-lg ${
            selectedCategory === "All Products"
              ? "bg-violet-100 text-violet-700 font-semibold"
              : "hover:bg-slate-100"
          }`}
        >
          All Products
        </li>
        <li
          onClick={() => setSelectedCategory("mens's clothing")}
          className={`cursor-pointer p-2 rounded-lg ${
            selectedCategory === "mens's clothing"
              ? "bg-violet-100 text-violet-700 font-semibold"
              : "hover:bg-slate-100"
          }`}
        >
          Mens's Clothing
        </li>
        <li
          onClick={() => setSelectedCategory("women's clothing")}
          className={`cursor-pointer p-2 rounded-lg ${
            selectedCategory === "women's clothing"
              ? "bg-violet-100 text-violet-700 font-semibold"
              : "hover:bg-slate-100"
          }`}
        >
          Women's Clothing
        </li>
        <li
          onClick={() => setSelectedCategory("electronics")}
          className={`cursor-pointer p-2 rounded-lg ${
            selectedCategory === "electronics"
              ? "bg-violet-100 text-violet-700 font-semibold"
              : "hover:bg-slate-100"
          }`}
        >
          Electronics
        </li>
        <li
          onClick={() => setSelectedCategory("Jewelery")}
          className={`cursor-pointer p-2 rounded-lg ${
            selectedCategory === "Jewelery"
              ? "bg-violet-100 text-violet-700 font-semibold"
              : "hover:bg-slate-100"
          }`}
        >
          Jwellery
        </li> */}
        {
          categories.map((category)=>{
            return (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer p-2 rounded-lg ${
                  selectedCategory === category
                    ? "bg-violet-100 text-violet-700 font-semibold"
                    : "hover:bg-slate-100"
              }`}
            >
              {category}
            </li>
            )
          })
        }
      </ul>
    </aside>
  );
};

export default Sidebar;
