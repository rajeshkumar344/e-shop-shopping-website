import React from "react";

export default function Login({openSignUp}) {
  return (
    <div >
      <h2 className="text-lg font-bold">Login</h2>
      <form>
        <div className="flex flex-col mt-2 mb-2">
          <label>Email</label>
          <input className="border shadow-md outline-none rounded-lg px-2 py-2" type="email" placeholder="Enter Email" />
        </div>

        <div className="flex flex-col mt-2 mb-2">
          <label>Password</label>
          <input className="border shadow-md outline-none rounded-lg px-2 py-2"  type="password" placeholder="Enter Password" />
        </div>

        <div className="flex justify-between mt-2 mb-2">
            <div className="space-x-2">
            <input type="checkbox"/>
            <span>Remember me</span>
            </div>
            <h3 className="text-red-300">Forget Password</h3>
        </div>
      </form>
      <button className="bg-red-600 py-2 mt-2 text-white w-full hover:bg-red-900">Login</button>
      <p className="mt-2 ml-16">Dont have an account ? 
        <button onClick={openSignUp} className="text-red-400">Sign Up</button></p>
    </div>
  );
}
