import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderConfirm({orderInfo}) {
    const navigate = useNavigate()
  return (
    <div className='h-full mb-16 flex flex-col mt-4 ml-16 space-y-3'>
        <h2 className='font-bold text-lg'>Thanks for your order</h2>
        <p>your order has been placed successfully.you will receive an email confirmation shortly</p>
        <div className='w-2/3 border rounded-md bg-gray-400 shadow-md px-4 py-2 space-y-2 '>
            <h2 className='font-bold'>Order Summary</h2>
            <p>Order Number : {orderInfo.orderNumber}</p>
            <div>
                <h2 className='font-semibold'>Shipping Information</h2>
                <p>{orderInfo.shippingInformation.address}</p>
                <p>{orderInfo.shippingInformation.city}</p>
                <p>{orderInfo.shippingInformation.zip}</p>
            </div>
            <div>
                <h2 className='font-semibold'>products Ordered</h2>
                {orderInfo.product.map((products)=>(
                    <div className='flex justify-between'>
                        <p>{products.name} X {products.quantity}</p>
                        <p className='font-semibold'>₹{products.price * products.quantity}</p>
                    </div>
                ))}
            </div>
            <div className='flex justify-between'>
                <span>Total Price</span>
                <span className='font-semibold'>₹{orderInfo.totalPrice.toFixed(2)}</span>
            </div>


        </div>
        <div className='flex gap-2'>
            <button className='text-white border bg-green-500 p-2 hover:bg-green-900'>Track Order</button>
            <button className='text-white border bg-red-600 p-2 hover:bg-red-800'
            onClick={()=>navigate("/shop")}>Continue Shopping</button>
        </div>
    </div>
  )
}
