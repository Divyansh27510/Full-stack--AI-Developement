import React from 'react'

const AddProduct = () => {
    
  return (
    <div>
        <h2>Add New Product</h2>
        <form >
            <div>
                <label htmlFor="title">Product Title</label>
                <input type="text" placeholder='Enter product name' id='title'/>
            </div>
            <div>
                <label htmlFor="price">Price($)</label>
                <input type="number" placeholder='Enter Price' id='price'/>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select name="" id="category">
                    <option value="" disabled selected>Select Category</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="women's clothing">women's clothing</option>
                    <option value="electronics">electronics</option>
                    <option value="jewelery">jewelery</option>
                </select>
            </div>
            <div>
                <label htmlFor="image">Image URL</label>
                <input type="url" id='image' placeholder='Paste image URL' />
            </div>
            <button>+Add Product</button>
            
        </form>

    </div>
  )
}

export default AddProduct
