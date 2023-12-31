import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { PiCatDuotone, PiGenderIntersexBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export default function PostItem({ post }) {
    return (
        <div className='bg-white shadow-md hover:shadow-lg overflow-hidden rounded-sm w-full sm:w-[300px]'>
            <Link to={`/post/${post._id}`}>
                <div className='relative'>
                    <img
                        src={post.imageUrls[0]}
                        alt="post cover"
                        className=' h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
                    />
                </div>
                <div className='p-3 flex flex-col gap-2 w-full ]'>
                    <p className='text-lg font-semibold text-slate-1001 truncate'>{post.name}</p>
                    <div className='flex gap-1 items-center'>
                        <PiCatDuotone className='h-5 w-5' /> <p className='text-sm text-slate-1002 truncate'>: {post.catBreed}</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <p className='text-semibold'>Age:</p>
                        <p className='text-sm text-slate-1002 truncate'>{post.age}</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <PiGenderIntersexBold className='h-5 w-5' />
                        <p className='text-sm text-slate-1002 truncate' >: {post.sex}</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <FaLocationDot className='h-4 w-4' />
                        <p className='text-sm text-slate-1002 truncate' >: {post.location}</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <IoMdContact className='h-4 w-4' />
                        <p className='text-sm text-slate-1002 truncate' >: {post.contact}</p>
                    </div>
                    <p className='text-sm text-slate-1002 line-clamp-4'>{post.description}</p>
                </div>
            </Link>
        </div>
    );
}
