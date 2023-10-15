import React from "react";
import Image from "next/image";

export default function signup() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className="w-full h-full object-cover" src="/backrnd.jpg" alt="" />
        </div>
        
        <div className='bg-gray-100 flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
            <h2 className='text-4xl font-bold text-center py-6 text-orange-400'>FAVR.</h2>
            <div className='flex flex-col py-2'>
              <label className='text-gray-600'>Username</label>
              <input className='border p-2' type="text" />
            </div>
            <div className='flex flex-col py-2'>             
              <label className='text-gray-600'>Password</label>
              <input className='border p-2' type="password" />
            </div>
            <button className='border w-full my-5 py-2 bg-orange-400 hover:bg-orange-500 text-white'>Sign in</button>
            <div className='flex justify-between'>
              <p className='flex items-center'><input className='mr-2' type="checkbox"/> Remember Me</p>
              <p>Create an account</p>
            </div>
          </form>
        </div>
      </div>

  );
}
