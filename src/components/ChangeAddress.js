import React from 'react'

export default function ChangeAddress({setAddress,setModalOpen}) {
    const [newAddress,setNewAddress] =React.useState("")

    function addAddress(){
        setAddress(newAddress)
        setModalOpen(false)
    }
  return (
    <div>
        <input className='border p-2 w-full mb-4' type='text'placeholder='Enter Address'
        onChange={(e)=>setNewAddress(e.target.value)}/>
        <div className='flex justify-end'>
            <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2'
            onClick={()=>setModalOpen(false)}>cancel</button>
            <button className='bg-blue-500 text-white py-2 px-4 rounded'
            onClick={addAddress}>Save Address</button>
        </div>
    </div>
  )
}
