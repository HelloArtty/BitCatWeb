import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { app } from '../firebase';


export default function Profile() {
    const fileRef = useRef(null)
    const { currentUser } = useSelector((state) => state.user);
    const [file, setFile] = useState(undefined)
    console.log(file)

    //firebase storage
    // allow read;
    // allow write: if
    // request.resource.size < 2 * 1024 &&
    // request.resource.contentType.matches('image/.*')

    useEffect(() => {
        if(file){
            handleFileUpload(file);
        }
    }, [file]);
    const handleFileUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred /
                snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
        )

    };

    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className='text-5xl font-semibold text-center my-7'>
                Profile
            </h1>
            <form className='flex flex-col gap-4'>
                <input
                    onChange={(e) => setFile(e.target.files[0])}
                    type='file'
                    ref={fileRef}
                    hidden accept='image/*'
                />
                <img onClick={() => fileRef.current.click()}
                    src={currentUser.avatar}
                    alt="profile"
                    className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
                />
                <input
                    type="text"
                    placeholder='username'
                    id='username'
                    className='border border-blue-1000 p-3 rounded-lg bg-slate-1000'
                />
                <input
                    type="email"
                    placeholder='email'
                    id='email'
                    className='border border-blue-1000 p-3 rounded-lg bg-slate-1000'
                />
                <input
                    type="password"
                    placeholder='password'
                    id='password'
                    className='border border-blue-1000 p-3 rounded-lg bg-slate-1000'
                />
                <button className='bg-blue-1001 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 '>
                    Update
                </button>
            </form>

            <div className="flex justify-between mt-5">
                <span className='text-white cursor-pointer p-2 bg-red-600 rounded-lg'>
                    Delete Account
                </span>
                <span className='text-white cursor-pointer p-2 bg-blue-600 rounded-lg'>
                    Sign Out
                </span>
            </div>
        </div>
    )
}
