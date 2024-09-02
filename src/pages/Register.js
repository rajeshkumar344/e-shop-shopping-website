import React from 'react'

export default function Register({openLogIn}) {
  return (
    <div >
      <h2 className="text-lg font-bold">Sign Up</h2>
      <form>
      <div className="flex flex-col mt-2 mb-2">
          <label>Name</label>
          <input className="border shadow-md outline-none rounded-lg px-2 py-2" type="text" placeholder="Enter name" />
        </div>
        <div className="flex flex-col mt-2 mb-2">
          <label>Email</label>
          <input className="border shadow-md outline-none rounded-lg px-2 py-2" type="email" placeholder="Enter Email" />
        </div>

        <div className="flex flex-col mt-2 mb-2">
          <label>Password</label>
          <input className="border shadow-md outline-none rounded-lg px-2 py-2"  type="password" placeholder="Enter Password" />
        </div>

      
      </form>
      <button className="bg-red-600 py-2 mt-2 text-white w-full hover:bg-red-900">Sign Up</button>
      <p className="mt-2 ml-16">Already have an account ? 
        <button onClick={openLogIn} className="text-red-400">Login </button></p>
    </div>
  )
}
