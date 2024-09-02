import React from 'react'
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function Navbar({setSearchTerm,searchTerm}) {
  const [modalOpen, setModalOpen] =React.useState(false)
  const [isLogin, setIsLogin] = React.useState(true)
   
  const openSignUp = ()=> {
    setIsLogin(false)
    setModalOpen(true)
  }
  const openLogIn = ()=> {
    setIsLogin(true)
    setModalOpen(true)
  }

    const products = useSelector(state=> state.cart.products)

  return (
    <nav className='sticky top-0 left-0 z-50'>
        <div className='container bg-white shadow-md w-full '>
            <div className='flex justify-between mx-4 md:mx-16 lg:mx-16 px-4 py-4'>
                <div className='flex  font-bold text-red-600 items-center'>
                    <h1 className='hover:scale-125 text-lg'>e-Shop</h1>
                </div>
                <div className='flex-1 flex border  items-center mx-6 px-4 py-2 justify-between rounded-md  '>
                    <input className='  outline-none ' type='search'placeholder='search product'
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}/>
                    <FaSearch/>
                </div>
                <div className='flex items-center space-x-4'>
                  <Link to="viewcart" className=' relative'>  <FaShoppingCart className='text-lg'/> 
                  {products.length > 0 && (
                    <span className=' absolute top-0 text-sm w-3 left-4 bg-red-600 rounded-full flex justify-center items-center text-white'>{products.length}</span>
                  )}
                  </Link>
                    <button onClick={()=>setModalOpen(true)}>Login/Register</button>
                </div>
                
            </div>
            <div className='flex justify-center space-x-6 align-middle py-2 font-bold'>
               <Link className=' hover:underline' to="/">Home</Link>
               <Link className='hover:underline' to="/shop">Shop</Link>
               <Link className='hover:underline' to="/abc">Contact</Link>
               <Link className='hover:underline' to="/abc">About</Link>
            </div>
        </div>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogIn={openLogIn}/>}</Modal>
    </nav>
  )
}
