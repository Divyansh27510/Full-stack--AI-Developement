// import React, { useState } from "react";
// import ProductCard from "./ProductCard";

// let App = () => {
//   const [productsData , setProductState] = useState([
//     {
//       id: 1,
//       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//       price: 109.95,
//       description:
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//       rating: {
//         rate: 3.9,
//         count: 120,
//       },
//     },
//     {
//       id: 2,
//       title: "Mens Casual Premium Slim Fit T-Shirts ",
//       price: 22.3,
//       description:
//         "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//       category: "men's clothing",
//       image:
//         "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
//       rating: {
//         rate: 4.1,
//         count: 259,
//       },
//     },
//     {
//       id: 3,
//       title: "Mens Cotton Jacket",
//       price: 55.99,
//       description:
//         "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
//       rating: {
//         rate: 4.7,
//         count: 500,
//       },
//     },
//     {
//       id: 4,
//       title: "Mens Casual Slim Fit",
//       price: 15.99,
//       description:
//         "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
//       rating: {
//         rate: 2.1,
//         count: 430,
//       },
//     },
//     {
//       id: 5,
//       title:
//         "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//       price: 695,
//       description:
//         "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//       category: "jewelery",
//       image:
//         "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
//       rating: {
//         rate: 4.6,
//         count: 400,
//       },
//     },
//     {
//       id: 6,
//       title: "Solid Gold Petite Micropave ",
//       price: 168,
//       description:
//         "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//       category: "jewelery",
//       image:
//         "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
//       rating: {
//         rate: 3.9,
//         count: 70,
//       },
//     },
//     {
//       id: 7,
//       title: "White Gold Plated Princess",
//       price: 9.99,
//       description:
//         "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//       category: "jewelery",
//       image:
//         "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
//       rating: {
//         rate: 3,
//         count: 400,
//       },
//     },
//     {
//       id: 8,
//       title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
//       price: 10.99,
//       description:
//         "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//       category: "jewelery",
//       image:
//         "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
//       rating: {
//         rate: 1.9,
//         count: 100,
//       },
//     },
//     {
//       id: 9,
//       title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//       price: 64,
//       description:
//         "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
//       rating: {
//         rate: 3.3,
//         count: 203,
//       },
//     },
//     {
//       id: 10,
//       title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//       price: 109,
//       description:
//         "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
//       rating: {
//         rate: 2.9,
//         count: 470,
//       },
//     },
//     {
//       id: 11,
//       title:
//         "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//       price: 109,
//       description:
//         "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
//       rating: {
//         rate: 4.8,
//         count: 319,
//       },
//     },
//     {
//       id: 12,
//       title:
//         "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//       price: 114,
//       description:
//         "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
//       rating: {
//         rate: 4.8,
//         count: 400,
//       },
//     },
//     {
//       id: 13,
//       title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//       price: 599,
//       description:
//         "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
//       rating: {
//         rate: 2.9,
//         count: 250,
//       },
//     },
//     {
//       id: 14,
//       title:
//         "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//       price: 999.99,
//       description:
//         "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
//       rating: {
//         rate: 2.2,
//         count: 140,
//       },
//     },
//     {
//       id: 15,
//       title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//       price: 56.99,
//       description:
//         "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
//       rating: {
//         rate: 2.6,
//         count: 235,
//       },
//     },
//     {
//       id: 16,
//       title:
//         "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//       price: 29.95,
//       description:
//         "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
//       rating: {
//         rate: 2.9,
//         count: 340,
//       },
//     },
//     {
//       id: 17,
//       title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//       price: 39.99,
//       description:
//         "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
//       rating: {
//         rate: 3.8,
//         count: 679,
//       },
//     },
//     {
//       id: 18,
//       title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
//       price: 9.85,
//       description:
//         "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
//       rating: {
//         rate: 4.7,
//         count: 130,
//       },
//     },
//     {
//       id: 19,
//       title: "Opna Women's Short Sleeve Moisture",
//       price: 7.95,
//       description:
//         "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
//       rating: {
//         rate: 4.5,
//         count: 146,
//       },
//     },
//     {
//       id: 20,
//       title: "DANVOUY Womens T Shirt Casual Cotton Short",
//       price: 12.99,
//       description:
//         "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
//       rating: {
//         rate: 3.6,
//         count: 145,
//       },
//     },
//   ])
//   const deleteProduct = (id)=>{
//     let products = productsData.filter((ele)=> ele.id !== id)
//     setProductState(products)
    
//   }
//   return (
//     <div>
//       <h1>Data Rendering</h1>
//       <hr />
//       <div className="flex flex-wrap gap-1.5">
//         {
//           productsData.map((elem)=>{
//             return <ProductCard product = {elem}
//             del = {deleteProduct
//             }/>
//           })
//         }
//       </div>
//     </div>
//   );
// };
// export default App;








// ----AIIIIII---------------
import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import {
  Search,
  Grid,
  List,
  Plus,
  Package,
  DollarSign,
  Star,
  RefreshCw,
  ShoppingBag,
  SlidersHorizontal,
  X,
} from "lucide-react";

const initialProducts = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. Please note that body builds vary by person.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 3.0, count: 400 },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response. Boosts burst write performance.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds. The advanced SLC Cache Technology allows performance boost.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. Refresh Rate: 75Hz.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side. Quantum Dot technology.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining), Faux leather material for style and comfort / 2 pockets of front.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Lightweight fabric with great stretch for comfort.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, Lightweight, roomy and highly breathable with moisture wicking fabric.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print, V-Neck, Fashion Tees.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    rating: { rate: 3.6, count: 145 },
  },
];

const App = () => {
  const [productsData, setProductState] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState("grid");
  const [cartCount, setCartCount] = useState(0);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Filter & Delete functions
  const deleteProduct = (id) => {
    setProductState((prev) => prev.filter((ele) => ele.id !== id));
  };

  const restoreProducts = () => {
    setProductState(initialProducts);
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  // Derived Analytics Data
  const categories = useMemo(() => {
    const set = new Set(initialProducts.map((p) => p.category));
    return ["all", ...Array.from(set)];
  }, []);

  const totalValue = useMemo(() => {
    return productsData.reduce((acc, curr) => acc + curr.price, 0);
  }, [productsData]);

  const avgPrice = useMemo(() => {
    if (!productsData.length) return 0;
    return totalValue / productsData.length;
  }, [productsData, totalValue]);

  // Filter & Sort Pipeline
  const filteredProducts = useMemo(() => {
    return productsData
      .filter((product) => {
        const matchesCategory =
          selectedCategory === "all" || product.category === selectedCategory;
        const matchesSearch =
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating.rate - a.rating.rate;
        return a.id - b.id;
      });
  }, [productsData, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Background Accent Gradients */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navbar / Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs tracking-wider uppercase mb-1">
              <Package className="w-4 h-4" /> SaaS Storefront Hub
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Inventory & Product Hub
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={restoreProducts}
              className="flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-xl text-sm font-medium transition-all"
            >
              <RefreshCw className="w-4 h-4" /> Restore Default Data
            </button>
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20">
                <ShoppingBag className="w-4 h-4" />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="ml-1 px-2 py-0.5 text-xs bg-white text-indigo-600 rounded-full font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Analytics Summary Banner */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          <div className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl">
            <div className="text-slate-400 text-xs font-medium flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-indigo-400" /> Active Items
            </div>
            <div className="text-2xl font-bold mt-1 text-slate-100">
              {productsData.length}
            </div>
          </div>

          <div className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl">
            <div className="text-slate-400 text-xs font-medium flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> Total Catalog Value
            </div>
            <div className="text-2xl font-bold mt-1 text-emerald-400">
              ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
          </div>

          <div className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl">
            <div className="text-slate-400 text-xs font-medium flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-blue-400" /> Avg. Price / Item
            </div>
            <div className="text-2xl font-bold mt-1 text-slate-100">
              ${avgPrice.toFixed(2)}
            </div>
          </div>

          <div className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl">
            <div className="text-slate-400 text-xs font-medium flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-amber-400" /> Top Rating Score
            </div>
            <div className="text-2xl font-bold mt-1 text-amber-400">
              {productsData.length
                ? Math.max(...productsData.map((p) => p.rating?.rate || 0))
                : 0}{" "}
              <span className="text-xs text-slate-500 font-normal">/ 5.0</span>
            </div>
          </div>
        </section>

        {/* Filter & Controls Toolbar */}
        <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 mb-8 flex flex-col lg:flex-row items-center justify-between gap-4 backdrop-blur-md">
          {/* Search bar */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all"
            />
          </div>

          {/* Filters & Sorting */}
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto gap-3">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort & View Mode Controls */}
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-xl px-3 py-2 outline-none focus:border-indigo-500"
              >
                <option value="default font-medium">Sort: Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === "grid"
                      ? "bg-indigo-600 text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                  title="Grid View"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === "table"
                      ? "bg-indigo-600 text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                  title="Table View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Rendering Container */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/30 border border-slate-800/60 rounded-2xl">
            <Package className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-slate-300">
              No products found
            </h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto mt-1">
              Try adjusting your search criteria or reset filters to view all products.
            </p>
          </div>
        ) : viewMode === "grid" ? (
          /* GRID VIEW */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((elem) => (
              <ProductCard
                key={elem.id}
                product={elem}
                del={deleteProduct}
                onQuickView={setQuickViewProduct}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          /* TABLE VIEW */
          <div className="overflow-x-auto bg-slate-900/60 border border-slate-800 rounded-2xl shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase bg-slate-950/50">
                  <th className="py-4 px-6 font-semibold">Product</th>
                  <th className="py-4 px-6 font-semibold">Category</th>
                  <th className="py-4 px-6 font-semibold">Price</th>
                  <th className="py-4 px-6 font-semibold">Rating</th>
                  <th className="py-4 px-6 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                {filteredProducts.map((elem) => (
                  <tr
                    key={elem.id}
                    className="hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="py-3 px-6 flex items-center gap-3">
                      <img
                        src={elem.image}
                        alt=""
                        className="w-10 h-10 object-contain bg-slate-950 p-1 rounded-lg border border-slate-800"
                      />
                      <span className="font-semibold text-slate-200 line-clamp-1 max-w-xs">
                        {elem.title}
                      </span>
                    </td>
                    <td className="py-3 px-6">
                      <span className="px-2.5 py-1 text-xs rounded-md bg-slate-800 border border-slate-700 text-slate-300 capitalize">
                        {elem.category}
                      </span>
                    </td>
                    <td className="py-3 px-6 font-bold text-emerald-400">
                      ${elem.price.toFixed(2)}
                    </td>
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-medium text-slate-200">
                          {elem.rating.rate}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-right">
                      <button
                        onClick={() => deleteProduct(elem.id)}
                        className="text-xs text-rose-400 hover:text-rose-300 font-semibold px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 rounded-lg border border-rose-500/20"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Quick View Modal */}
        {quickViewProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 shadow-2xl overflow-hidden">
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-xl"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-1/2 h-56 bg-slate-950 p-4 rounded-2xl flex items-center justify-center border border-slate-800">
                  <img
                    src={quickViewProduct.image}
                    alt=""
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase font-semibold text-indigo-400 tracking-wider">
                      {quickViewProduct.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">
                      {quickViewProduct.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {quickViewProduct.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-emerald-400">
                      ${quickViewProduct.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => {
                        handleAddToCart();
                        setQuickViewProduct(null);
                      }}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-indigo-600/30"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
