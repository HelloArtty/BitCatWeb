import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';

export default function OAuth() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGoogleClick = async () => {
        try {
            setLoading(true); // Set loading state to true when starting the authentication process

            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            // Send user data to backend for further processing
            const res = await fetch('backend/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });

            const data = await res.json();
            setLoading(false); // Set loading state to false after completing the authentication process
            setError(null); // Reset error state
            navigate('/'); // Navigate to the home page on successful login
        } catch (error) {
            console.error('Could not sign in with Google', error);
            setLoading(false); // Set loading state to false in case of an error
            setError('Could not sign in with Google. Please try again.'); // Set error state
        }
    };

    return (
        <button
            onClick={handleGoogleClick}
            type='button'
            className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-90'
            disabled={loading} // Disable the button while loading
        >
            {loading ? 'Logging in...' : 'Continue with Google'}
        </button>
    );
}
