import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer.jsx";
import PostItem from '../components/PostItem';
import '../css/Home.css';



export default function Home() {
    const [orderPosts, setOrderPosts] = useState([]);
    console.log(orderPosts);
    // search?order=desc

    useEffect(() => {
        const fetchOrderPosts = async () => {
            try {
                const res = await fetch('/backend/post/get?order=desc&limit=3');
                const data = await res.json();
                setOrderPosts(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchOrderPosts();
    }, []);
    return (
        <div className=''>
            <div className='bg-cat3 bg-cover bg-center'>
                <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
                    <h1 className='text-slate-50 font-bold text-3xl lg:text-6xl'>
                        BitCat
                        <br />
                        I want to sleep.
                    </h1>
                    <div className='text-gray-200 text-xs sm:text-sm'>
                        BitCat is a place where you can find all the information about cats.
                    </div>
                    <Link to="/cats"
                        className='text-xs sm:text-sm text-blue-200 font-bold hover:underline'>
                        See all cats
                    </Link>
                </div>
            </div>
            <div className='bg-[rgb(255,255,255)]'>
                <div className="row-home ">
                    <div className="imgWrapper">
                        <img src="/src/assets/cat7.png" alt="" />
                    </div>
                    <div className="contentWrapper">
                        <div className="content-img">
                            <h2>
                                About Us
                            </h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia debitis deserunt, eum nobis ullam nesciunt adipisci dicta, magnam expedita exercitationem blanditiis vitae, corporis accusantium nihil repellendus laborum nostrum mollitia quidem!
                                Veritatis voluptatibus iusto et, culpa ab odio inventore consequuntur placeat natus, ipsa obcaecati quae sapiente consequatur temporibus illum? Deserunt unde provident omnis aliquam ea. Deleniti expedita beatae ab quasi nobis.</p>
                            <a href="/About">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[rgb(255,255,255)]'>
                <div className='max-w-6xl mx-auto p-2 flex flex-col gap-8 my-10'>
                    {orderPosts && orderPosts.length > 0 && (
                        <div className='justify-center flex flex-col mx-auto '>
                            <div className='my-3'>
                                <h2 className='text-3xl font-bold text-slate-600 mb-10'>Lastest Cats</h2>
                            </div>
                            <div className='flex flex-wrap gap-5'>
                                {orderPosts.map((post) => (
                                    <PostItem post={post} key={post._id} />
                                ))}
                            </div>
                            <div className='flex justify-center m-8'>
                                <a
                                    href='/cats' to={'/search?order=desc'}
                                    className='bg-blue-1000 text-center text-white rounded p-3 text-lg  w-[150px]  font-semibold '>
                                    View All
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div class='h-[700px] bg-slate-100 flex flex-col justify-center p-4'>
                <div class='mt-8'>
                    <h1 class='text-center text-5xl md:text-9xl font-bold'>
                        How To Pet
                    </h1>
                    <div class='flex justify-center'>
                        <p class='text-base md:text-xl m-5 w-full md:w-1/2 text-center'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis nulla similique sit mollitia, nihil harum vel quis et exercitationem eligendi quas! Incidunt ex illo consequatur quod voluptatem impedit eligendi culpa.
                        </p>
                    </div>
                    <div class='flex justify-center mt-4'>
                        <a href="/how-to-pet">
                            <button class='bg-blue-1000 text-white rounded p-3 w-[150px] text-base md:text-lg font-semibold'>
                                Read More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='h-[30px]'>
            </div>
            <Footer />
        </div>
    )
}

