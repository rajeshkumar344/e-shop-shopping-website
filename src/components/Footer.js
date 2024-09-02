import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='flex items-center bg-slate-900 text-white mt-4'>
        <div className='grid grid-cols-3 py-2 space-x-12 ml-6'>
            <div className='flex flex-col gap-2'>
                <h2 className='font-bold'>e-Shop</h2>
                <p>your one-stop shop for all your neeeds.
                    Shop with us and experience the best Online shopping experience
                </p>
            </div>
            <div className='flex flex-col '>
                <h2 className='font-bold'>Quick Links</h2>
                <span>Home</span>
                <span>Shop</span>
                <span>About Us</span>
                <span>Contact Us</span>
            </div>
            <div className='flex flex-col space-y-4'>
                <h2 className='font-bold'>Follow Us</h2>
                <ol className='flex gap-3'>
                    <li><FaFacebook /> </li>
                    <li><FaTwitter /> </li>
                    <li><FaInstagram /> </li>
                    <li><FaLinkedin /> </li>
                </ol>
                <div className='flex items-center'>
                    <input className='border border-gray-600 bg-slate-900 rounded-l-lg px-2 py-2' type='email'placeholder='Your email'/>
                    <button className='bg-red-600 border rounded-r-lg px-2 py-2'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}
