import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostItem from '../components/PostItem';




export default function Home() {
    const [orderPosts, setOrderPosts] = useState([]);
    console.log(orderPosts);
    // search?order=desc

    useEffect(() => {
        const fetchOrderPosts = async () => {
            try {
                const res = await fetch('/backend/post/get?order=desc&limit=4');
                const data = await res.json();
                setOrderPosts(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchOrderPosts();
    }, []);
    return (
        <div>
            <div className='bg-slate-1000'>
                <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
                    <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
                        BitCat is the place for cats
                        <br />
                        The place for cats
                    </h1>
                    <div className='text-gray-400 text-xs sm:text-sm'>
                        BitCat is a place where you can find all the information about cats.
                    </div>
                    <Link to="/cats"
                        className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'>
                        See all cats
                    </Link>
                </div>
            </div>
            <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
                {orderPosts && orderPosts.length > 0 && (
                    <div className=''>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-slate-600'>Lastest Cats</h2>
                            <Link className='text-sm text-blue-800 hover:underline' to={'/search?order=desc'}>Show more offers</Link>
                        </div>
                        <div className='flex gap-4'>
                            {orderPosts.map((post) => (
                                <PostItem post={post} key={post._id} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

