import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const navigate = useNavigate();
    const [sidebardata, setSidebardata] = useState({
        searchTrem: '',
        catBreed: '',
        sex: '',
        sort: 'created_at',
        order: 'desc',
    });
    console.log(sidebardata)
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search)
        const searchTermFromUrl = urlParams.get('searchTerm');
        const catBreedFromUrl = urlParams.get('catBreed');
        const sexFromUrl = urlParams.get('sex')
        const sortFromUrl = urlParams.get('sort')
        const orderFromUrl = urlParams.get('order')

        if (
            searchTermFromUrl ||
            catBreedFromUrl ||
            sexFromUrl ||
            sortFromUrl ||
            orderFromUrl
        ) {
            setSidebardata({
                searchTrem: searchTermFromUrl || '',
                catBreed: catBreedFromUrl || '',
                sex: sexFromUrl || '',
                sort: sortFromUrl || 'created_at',
                order: orderFromUrl || 'desc',
            });
        }
        const fetchPosts = async () => {
            setLoading(true)
            const searchQuery = urlParams.toString()
            const res = await fetch(`/backend/post/get?${searchQuery}`)
            const data = await res.json();
            setPosts(data);
            setLoading(false)
        }

        fetchPosts()
    }, [location.search])

    const handleChange = (e) => {
        if (e.target.id === 'searchTerm') {
            setSidebardata({
                ...sidebardata,
                searchTrem: e.target.value
            })
        }
        if (e.target.id === 'catBreed') {
            setSidebardata({
                ...sidebardata,
                catBreed: e.target.value
            })
        }
        if (e.target.id === 'sex') {

            setSidebardata({
                ...sidebardata,
                sex: e.target.value
            })
        }
        if (e.target.id === 'sort_order') {
            const sort = e.target.value.split('_')[0] || 'created_at';
            const order = e.target.value.split('_')[1] || 'desc';
            setSidebardata({ ...sidebardata, sort, order })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams()
        urlParams.append('searchTerm', sidebardata.searchTrem)
        urlParams.append('catBreed', sidebardata.catBreed)
        urlParams.append('sex', sidebardata.sex)
        urlParams.append('sort', sidebardata.sort)
        urlParams.append('order', sidebardata.order)
        const searchQuery = urlParams.toString()
        navigate(`/search?${searchQuery}`)
    }

    return (
        <div className='flex flex-col md:row'>
            <div className='p-7 border-b-2 md:border-r-2'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                    <div className='flex items-center gap-2 justify-center'>
                        <label
                            className='whitespace-nowrap font-semibold'>
                            Search Term:
                        </label>
                        <input
                            type='text'
                            id='searchTerm'
                            placeholder='Search...'
                            className='border-blue-1000 bg-slate-1000 border rounded-lg p-3 '
                            onChange={handleChange}
                            required
                            value={sidebardata.searchTrem}
                        />
                    </div>
                    <div className='gap-6 justify-center text-center flex flex-wrap'>
                        <label
                            className='whitespace-nowrap font-semibold m-3'>
                            Cat Breed:
                        </label>
                        <select
                            className=" border-blue-1000 bg-slate-1000 border p-3 ml-2 rounded-lg"
                            id="catBreed"
                            required
                            onChange={handleChange}
                            value={sidebardata.catBreed}
                        >
                            <>
                                <option value="">Select Cat Breed</option>
                                <option value="American shorthair">American Shorthair</option>
                                <option value="American curl">American Curl</option>
                                <option value="Balinese">Balinese</option>
                                <option value="Bengal">Bengal</option>
                                <option value="British shorthair">British Shorthair</option>
                                <option value="Chinchilla">Chinchilla</option>
                                <option value="Exotic shorthair">Exotic Shorthair</option>
                                <option value="Scottish fold">Scottish Fold</option>
                                <option value="Korat">Korat</option>
                                <option value="Khao manee">Khao Manee</option>
                                <option value="Maine coon">Maine Coon</option>
                                <option value="Munchkin">Munchkin</option>
                                <option value="Norwegian forest">Norwegian Forest</option>
                                <option value="Persian">Persian</option>
                                <option value="Ragdoll">Ragdoll</option>
                                <option value="Russian blue">Russian Blue</option>
                                <option value="Siamese">Siamese</option>
                                <option value="Snowshoe">Snowshoe</option>
                                <option value="Sphynx">Sphynx</option>
                            </>
                        </select>
                        <label
                            className='whitespace-nowrap font-semibold m-3'>
                            Sex:
                        </label>
                        <select
                            className="border-blue-1000 bg-slate-1000 border p-3 ml-3 rounded-lg"
                            id="sex"
                            required
                            onChange={handleChange}
                            value={sidebardata.sex}
                        >
                            <>
                                <option value="">Select Sex</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </>
                        </select>
                        <label
                            className='whitespace-nowrap font-semibold m-3'>
                            Sort:
                        </label>
                        <select
                            className="border-blue-1000 bg-slate-1000 border p-3 ml-3 rounded-lg"
                            id="sort_order"
                            onChange={handleChange}
                            value={`${sidebardata.sort}_${sidebardata.order}`}
                        >
                            <option value='age_asc'>Age low to high</option>
                            <option value='age_desc'>Age high to low</option>
                            <option value='createdAt_desc'>Lastest</option>
                            <option value='createdAt_asc'>Oldest</option>
                        </select>
                    </div>
                    <button
                        className='items-center w-24 bg-blue-1001 text-white border rounded-lg p-3 ml-2 uppercase hover:opacity-95 disabled:opacity-80'
                        id="sort_order">
                        Search
                    </button>
                </form>
            </div>
            <div className=''>
                <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>Posts</h1>
            </div>
        </div>
    )
}
