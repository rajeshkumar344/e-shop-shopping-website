import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";

export default function Card() {
  const [products, setProducts] = React.useState([]);

  async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await response.json();
    setProducts(data);
    console.log(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="bg-white mt-8 flex items-center justify-center flex-col">
      {/* {JSON.stringify(products)} */}
      <h1 className="font-bold m-3 text-rose-600">Top Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 items-center">
        {products.map(function (item) {
          return (
            <div key={item.id} className="cursor-pointer w-80 transform transition-transform duration-300 items-center gap-1  py-4 px-2  hover:scale-105 border rounded-md shadow-md flex flex-col" >
             
              <img className="h-56 w-60" src={item.image} alt="img" />
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <span className="text-gray-500">₹{item.price}</span>
              <div className="flex gap-1">
                <FaStar color="yellow" /> <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" /> <FaStar color="yellow" />
              </div>
              <div className="absolute bottom-4 right-2 flex items-center justify-center
              w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32
              hover:bg-red-700">
                <span className="group-hover:hidden">+</span>
                <span className="hidden group-hover:block">Add to cart</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
