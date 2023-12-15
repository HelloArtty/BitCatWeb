import React from 'react'

export default function CreatePost() {
    return (
        <main className='p-3 max-w-4xl mx-auto'>
            <h1 className='text-3xl font-semibold text-center my-7'>Create a Post</h1>
            <form className='flex flex-col sm:flex-row gap-4'>
                
                <div className='flex flex-col gap-4 flex-1'>
                    <input type="text" placeholder="Title" className=" border-blue-1000 bg-slate-1000 border p-3 rounded-lg"
                    id='name' maxLength="50" minLength="10" required/>
                    <input type="text" placeholder="Cat Breed" className=" border-blue-1000 bg-slate-1000 border p-3 rounded-lg"
                    id='catBreed' required/>
                    <input type="number" placeholder="Age" className=" border-blue-1000 bg-slate-1000 border p-3 rounded-lg"
                    id='age' required/>
                    <textarea type="text" placeholder="Description" className=" border-blue-1000 bg-slate-1000 border p-3 rounded-lg"
                    id='description' required/>
                    <div className='flex gap-6 flex-wrap'>
                        <div className='flex gap-2'>
                            <input type="checkbox" id="male" className='w-5'/>
                            <span>Male</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id="female" className='w-5'/>
                            <span>Female</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-1 flex-col gap-4'>
                    <p className='font-semibold'>
                        Images:
                        <span className='font-normal text-gray-700 ml-2'>Add Image (max 6)</span>
                    </p>
                    <div className='flex gap-4'>
                        <input className="border p-3 border-gray-300 rounded w-full"
                            type="file" id="images" appcet="image/*" multiple/>
                        <button className='p-3 text-green-700 border border-green-600 rounded uppercase hover:shadow-lg disabled:opacity-90'>
                            Upload
                        </button>
                    </div>
                <button className='p-3 bg-blue-1001 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
                    Create Post
                </button>
                </div>
            </form>
        </main>
    )
}
