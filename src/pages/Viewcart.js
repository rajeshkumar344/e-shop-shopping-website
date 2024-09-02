import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/Cartslice";
import { useNavigate } from "react-router-dom";

export default function Viewcart() {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = React.useState("st peterburg Monstonstreet");
  const [modalOpen, setModalOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center">
      {cart.products.length > 0 ? (
        <div className="flex  gap-8 mt-4 ">
          <div className="flex flex-col items-center space-y-3 ">
            <h1 className="font-bold">SHOPPING CART</h1>
            <div className="flex flex-col ">
              <div className="flex gap-48 font-semibold">
                <div>
                  <p>PRODUCT</p>
                </div>
                <div className="flex">
                  <ol className="flex gap-3">
                    <li> PRICE</li>
                    <li> QUANTITY</li>
                    <li> SUBTOTAL</li>
                    <li> REMOVE</li>
                  </ol>
                </div>
              </div>

              <div className="">
                {/* mappp */}
                {cart.products.map((item) => (
                  // return (

                  <div className="flex mt-2 items-center border shadow-md pl-8 gap-40 justify-center">
                    <div className="flex items-center gap-1 w-20">
                      <img className="w-16" src={item.image} alt="" />
                      <p className="text-sm">{item.name.slice(0, 20)}</p>
                    </div>
                    <div className="flex gap-8">
                      <p>{item.price}</p>
                      <div className="flex shadow-lg items-center space-x-2">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                        >
                          +
                        </button>
                      </div>
                      <p>₹{(item.quantity * item.price).toFixed(2)}</p>
                      <button onClick={() => dispatch(removeFromCart(item.id))}>
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                  // );
                ))}
              </div>
            </div>
          </div>

          <div className="">
            {cart.products.map((item) => (
              <div className="items-center px-8 py-4 space-y-8 shadow-md border h-96">
                <h3 className="font-bold">CART TOTALS</h3>
                <div className="flex justify-between shadow">
                  <span>TOTAL ITEMS :</span>
                  <span>{item.totalQuantity}</span>
                </div>
                <div className="flex flex-col shadow ">
                  <p>Shipping to :</p>
                  <span> {address}</span>
                  <button
                    className="text-blue-400"
                    onClick={() => setModalOpen(true)}
                  >
                    Change address
                  </button>
                </div>
                <div className="shadow space-x-2">
                  <span>Total Price</span>
                  <span>₹{item.totalPrice.toFixed(2)}</span>
                </div>
                <button
                  className="text-white border bg-red-600 px-4 py-2 rounded-md"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to checkout
                </button>
              </div>
            ))}
          </div>
          <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setModalOpen={setModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex items-center gap-6">
          <img
            className="w-80"
            src="https://media.istockphoto.com/id/531240026/photo/shopping-cart-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=URqynJReISG0cb45Xkl5Lvy9wibLj5N9DZGgR4OeBvA="
            alt="empty"
          />
          <span className="font-bold text-2xl">Empty</span>
        </div>
      )}
    </div>
  );
}
