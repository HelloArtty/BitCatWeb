import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='bg-blue-1000' shadow-md>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
                <Link to='/'>
                    <h1 className='font-blod font-inter text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-white'>BitCat</span>
                    </h1>
                </Link>
                <form className='bg-slate-100 p-3 rounded-xl flex items-center'>
                    <input
                        type='text'
                        placeholder='Search'
                        className='bg-transparent focus:outline-none w-24 sm:w-64'
                    />
                    <FaSearch className='text-slate-600' />
                </form>
                <ul className='flex gap-4'>
                    <Link to='/'>
                    <li className='font-inter ml-3 hidden sm:inline text-slate-100 hover:underline'>
                        Home
                    </li>
                    </Link>
                    <Link to='/about'>
                    <li className='font-inter  hidden sm:inline text-slate-100 hover:underline'>
                        About
                    </li>
                    </Link>
                    <Link to='/cats'>
                    <li className='font-inter  hidden sm:inline text-slate-100 hover:underline'>
                        Cats
                    </li>
                    </Link>
                    <Link to='/how-to-pet'>
                    <li className='font-inter  hidden sm:inline text-slate-100 hover:underline'>
                        How to Pet
                    </li>
                    </Link>
                    <Link to='signin'>
                    <li className='font-inter  sm:inline text-slate-100 hover:underline'>
                        {''}
                        Sign In
                    </li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}
