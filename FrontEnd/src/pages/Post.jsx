import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function post() {
    const params = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        SwiperCore.use([Navigation]);
        const fetchPost = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/backend/post/get/${params.postId}`)
                const data = await res.json()
                if (data.success === false) {
                    setError(true);
                    setLoading(false);
                    return;
                }
                setPost(data);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchPost();
    }, [params.postId]);
    return (
        <main>
            {loading && <p className="text-center text-blue-1001 my-7 text-2xl" >Loading...</p>}
            {error && <p className="text-center text-red-1001 my-7 text-2xl" >Something Wrong!</p>}
            {post && !loading && !error &&
                <div>
                    <Swiper navigation spaceBetween={20} className="">
                        {post.imageUrls.map((url) => (
                            <SwiperSlide key={url}>
                                <div
                                    className="h-[400px] w-[400px] bg-center bg-no-repeat bg-cover rounded-[10px] mx-auto my-5 relative"
                                    style={{
                                        background: `url(${url}) center no-repeat`,
                                        backgroundSize: 'cover',
                                    }}
                                >
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            }
        </main >
    )
}
