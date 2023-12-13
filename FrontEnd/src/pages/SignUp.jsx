import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-inter font-bold my-7'>
        SignUp
      </h1>
      <form className='flex flex-col gap-4 '>
        <input type="text" placeholder = "username"
        className='border-2 border-blue-1000 p-3 rounded-lg bg-slate-1000'id="username" />
        <input type="text" placeholder = "email"
        className='border-2 border-blue-1000 p-3 rounded-lg bg-slate-1000'id="email" />
        <input type="password" placeholder = "password"
        className='border-2 border-blue-1000 p-3 rounded-lg bg-slate-1000'id="password" />
        <button className='font-bold bg-blue-1001 text- text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          Sign Up
        </button>
      </form>
        <div className='flex gap-2 mt-5'>
          <p className='text-gray-500'>Have an account?</p>
          <Link to= {"/signin"} >
            <span className='text-blue-1001 font-bold'>
              Sign In
            </span>
          </Link>
        </div>
      </div>
  )
}
