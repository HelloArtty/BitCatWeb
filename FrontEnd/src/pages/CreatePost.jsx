import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable
} from "firebase/storage";
import React, { useState } from 'react';
import { app } from '../firebase';

export default function CreatePost() {
    const [files, setFiles] = useState([])
    const [formData, setFormData] = useState({
        imageUrls: [],
    });
    const [imageUploadError, setImageUploadError] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    console.log(formData)

    const handleImageSubmit = (e) => {
        if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
            setUploading(true);
            setImageUploadError(false);
            const promises = [];
            for (let i = 0; i < files.length; i++) {
                promises.push(storeImage(files[i]));
            }
            Promise.all(promises).then((urls) => {
                setFormData({
                    ...formData, imageUrls: formData.imageUrls.concat(urls)
                });
                setImageUploadError(false);
                setUploading(false);
                
            }).catch((err) => {
                setImageUploadError('Image upload failed (2mb max per image)');
                setUploading(false);
            });
        } else {
            setImageUploadError('You can only upload 6 images per post');
            setUploading(false);
        }
    };

    const storeImage = async (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app)
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done`);
                },
                (error) => {
                    reject(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL);
                    });
                }
            );
        });
    };

    const handleRemoveImage = (index) => {
        setFormData({
            ...formData,
            imageUrls: formData.imageUrls.filter((_, i) => i !== index),
        });
    };

    return (
        <main className='p-3 max-w-4xl mx-auto'>
            <h1 className='text-3xl font-semibold text-center my-7'>Create a Post</h1>
            <form className='flex flex-col sm:flex-row gap-4'>
                <div className='flex flex-col gap-4 flex-1'>
                    <input
                        type="text"
                        placeholder="Title"
                        className=" border-blue-1000 bg-slate-1000 border p-3 rounded-lg"
                        id='name'
                        maxLength="50" minLength="10"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Cat Breed"
                        className=" border-blue-1000 bg-slate-1000 border p-3 rounded-lg"
                        id='catBreed'
                        required
                    />
                    <input
                        type="number"
                        placeholder="Age"
                        className=" border-blue-1000 bg-slate-1000 border p-3 rounded-lg"
                        id='age'
                        required
                    />
                    {/* <input
                        type="text"
                        placeholder="Sex"
                        className=" border-blue-1000 bg-slate-1000 border p-3 rounded-lg"
                        id='sex'
                        required
                    /> */}
                    <select
                        className="border-blue-1000 bg-slate-1000 border p-3 rounded-lg"
                        id="sex"
                        required
                        value={formData.sex}
                        onChange={(e) => setFormData({ ...formData, sex: e.target.value })}
                    >
                        <option value="">Select Sex</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                    <textarea
                        type="text"
                        placeholder="Description"
                        className=" border-blue-1000 bg-slate-1000 border p-3 rounded-lg"
                        id='description'
                        required />
                </div>
                <div className='flex flex-1 flex-col gap-4'>
                    <p className='font-semibold'>
                        Images:
                        <span className='font-normal text-gray-700 ml-2'>
                            Add Image (max 6)
                        </span>
                    </p>
                    <div className='flex gap-4'>
                        <input
                            onChange={(e) => setFiles(e.target.files)}
                            className="border p-3 border-gray-300 rounded w-full"
                            type='file'
                            id="images"
                            accept="image/*"
                            multiple
                        />
                        <button
                            type='button'
                            disabled={uploading}
                            onClick={handleImageSubmit}
                            className='p-3 text-green-700 border border-green-600 rounded uppercase hover:shadow-lg disabled:opacity-90'>
                            {uploading ? 'Uploading...' : 'Upload'}
                        </button>
                    </div>
                    <p className='text-red-700 text-sm'>
                        {imageUploadError && imageUploadError}
                    </p>
                    {formData.imageUrls.length > 0 &&
                        formData.imageUrls.map((url, index) => (
                            <div
                                key={url}
                                className='flex justify-between p-3 border items-center'
                            >
                                <img
                                    src={url}
                                    alt='listing image'
                                    className='w-20 h-20 object-contain rounded-lg'
                                />
                                <button
                                    type='button'
                                    onClick={() => handleRemoveImage(index)}
                                    className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    <button className='p-3 bg-blue-1001 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
                        Create Post
                    </button>
                </div>
            </form>
        </main>
    )
}
