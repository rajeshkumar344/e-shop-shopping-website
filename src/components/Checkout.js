import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Checkout({setOrderInfo}) {
  const [billingToggle, setBillingToggle] = React.useState(true);
  const [shippingToggle, setShippingToggle] = React.useState(true);
  const [paymentToggle, setPaymentToggle] = React.useState(true);
  const [paymentMethod, setPaymentMethod] = React.useState("cod");
  const cart = useSelector((state) => state.cart);
  const [shippingInfo, setShippingInfo] = React.useState({
    address : "",
    city : "",
    zip : ""

  })
  const navigate = useNavigate()
  function checkoutpage(){
    
    const newOrder ={
      product : cart.products,
      orderNumber :"150150",
      shippingInformation :shippingInfo,
      totalPrice :cart.totalPrice
    }
    setOrderInfo(newOrder)
    navigate("/orderconfirm")
  }

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h2 className="font-semibold">CHECKOUT</h2>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3 border shadow-md px-3 mt-3 py-4">
          <div>
            <div
              className="flex justify-between"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="font-semibold"> Billing information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <div className="flex flex-col">
                  <label>Name </label>
                  <input
                    className="w-full border shadow-sm text-black px-2 py-2 outline-none"
                    type="text"
                    placeholder="Enter Name"
                  />
                </div>
              </div>

              <div>
                <div>
                  <label>email </label>
                  <input
                    className="w-full border shadow-sm text-black px-2 py-3 outline-none"
                    type="email"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div>
                <div>
                  <label>Phone </label>
                  <input
                    className="w-full border shadow-sm text-black px-2 py-3 outline-none"
                    type="text"
                    placeholder="Enter your number"
                  />
                </div>
              </div>
            </div>
          </div>
 {/* shipping info */}
          <div className="mt-3">
            <div
              className="flex justify-between"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="font-semibold"> Shipping Information</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              
                <div className="flex flex-col">
                  <label>Address </label>
                  <input
                    className="w-full border shadow-sm text-black px-2 py-2 outline-none"
                    type="text"
                    placeholder="Enter Address"
                    onChange={(e=>setShippingInfo({...shippingInfo,address:e.target.value}))}
                  />
                </div>
              

              <div>
                <div>
                  <label>city </label>
                  <input
                    className="w-full border shadow-sm text-black px-2 py-3 outline-none"
                    type="text"
                    placeholder="Enter city"
                    onChange={(e=>setShippingInfo({...shippingInfo,city:e.target.value}))}
                  />
                </div>
              </div>

              <div>
                <div>
                  <label>Zip code</label>
                  <input
                    className="w-full border shadow-sm text-black px-2 py-3 outline-none"
                    type="text"
                    placeholder="Enter your Pin no"
                    onChange={(e=>setShippingInfo({...shippingInfo, zip:e.target.value}))}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div
              className="flex justify-between"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="font-semibold"> Payment method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <label className="block text-gray-700">
                    Cash on Delivary{" "}
                  </label>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                  />
                  <label className="text-gray-700 block">Debit card </label>
                </div>
              </div>
              {paymentMethod === "dc" && (
                <div className="bg-gray-100 px-4 py-2 space-y-2">
                  <h3 className="font-semibold">Debit Card Information</h3>
                  <div className="flex flex-col">
                    <labe>Card Number</labe>
                    <input
                      className="w-full border shadow-sm text-black px-2 py-0 outline-none"
                      type="text"
                    />
                  </div>
                  <div>
                    <labe className="">Card Holder Name</labe>
                    <input
                      className="w-full border shadow-sm text-black px-2  outline-none"
                      type="text"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <labe>Expiry Date</labe>
                      <input
                        className="w-full border shadow-sm text-black px-2  outline-none"
                        type="text"
                      />
                    </div>
                    <div>
                      <labe>CVV Number</labe>
                      <input
                        className="w-full border shadow-sm text-black px-2 outline-none"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-1/3 border shadow-m bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4"> Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    className="w-16 h-16 object-contain rounded"
                    alt=""
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold"> {product.name}</h4>
                    <p className="text-gray-600">
                      {product.price} X {product.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between">
                <span>Total Price</span>
                <span className="font-semibold">
                  ${cart.totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
            onClick={checkoutpage}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
