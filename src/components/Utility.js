import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import {
  MdDiscount,
  MdLocalShipping,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { GrSecure } from "react-icons/gr";

export default function Utility() {
  const cardProduct = [
    {
      logo: <MdLocalShipping size={30} color="red" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      logo: <MdOutlineSupportAgent size={30} color="red"  />,
      title: "Support 24/7",
      description: "we are here to assist you anytime",
    },
    {
      logo: <FaMoneyBillWave size={30} color="red"  />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      logo: <GrSecure size={30} color="red"  />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
    {
      logo: <MdDiscount size={30} color="red"  />,
      title: "Discount",
      description: "Enjoy the best price on our products",
    },
  ];
  return (
    <div className="px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 py-2">
        {cardProduct.map(function (item, index) {
          return (
          <div key={index} className="flex flex-col bg-white border rounded-sm shadow-lg items-center px-4 py-2">
            {item.logo}
            <span className="font-bold">{item.title}</span><br/>
          <p> {item.description}</p>
          </div>
          )
        })}
      </div>
    </div>
  );
}
