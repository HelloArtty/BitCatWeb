import React from 'react';

export default function Search() {

    return (
        <div className='flex flex-col md:row'>
            <div className='p-7 border-b-2 md:border-r-2'>
                <form className='flex flex-col gap-8'>
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
                            id="sort_order">
                            <option>Age low to high</option>
                            <option>Age high to low</option>
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
