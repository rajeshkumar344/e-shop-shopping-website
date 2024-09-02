import React from "react";
import Utility from "../components/Utility";
import Category from "../components/Category";
import Card from "../components/Card";

export default function Home() {
  const selectedCategories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Beauty",
    "Sports",
    "Automotive",
  ];
  return (
    <div>
      <div className=" container flex flex-col md:flex-row m-4 justify-center px-2 py-2">
        <div>
          <div className="font-bold text-sm bg-red-600 border p-2">
            SHOP BY CATEGORIES
          </div>
          <ol className="bg-gray-300 p-2 ">
            {selectedCategories.map((item, index) => {
              return (
                <div key={index}  className="">
                  <li className="flex items-center gap-2 py-2 ">
                    <div className="w-2 h-2 border rounded-lg border-red-600"></div>
                    {item}
                  </li>
                </div>
              );
            })}
          </ol>
        </div>

        <div>
          <div className="relative">
            <img
              className=""
              style={{ width: 1000, height: 500 }}
              src="https://media.istockphoto.com/id/882053552/photo/online-shopping-with-modern-fashion-shop.jpg?s=2048x2048&w=is&k=20&c=olO6f1rJgBOKg4jjMmAk0Xzbxqj_c5IGTK556WzMKsE="
              alt="shopping img"
            />

            <div className=" absolute top-16 left-8 space-y-3 ">
              <h3>code with Rajesh</h3>
              <h1 className="font-bold text-2xl">WELCOME TO E-SHOP</h1>
              <h2 className=" font-semibold text-xl">MILLION+ PRODUCTS</h2>
              <button className= "text-white border bg-red-600 rounded-md px-6 py-3 hover:scale-105 transform transition ease-in-out duration-300">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <Utility/>
      <Category/>
      <Card/>
    </div>
  );
}
