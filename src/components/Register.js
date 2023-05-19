import React, { useEffect, useState } from 'react'
import fb from '../assets/fb.png'
import google from '../assets/google.png'
import close from '../assets/close.png'
import authimg from '../assets/auth.jpg'
import { signInWithGoogle, signInWithFacebook} from '../Config';
const Register = () => {
    const [hidden, setHidden] = useState('flex');
    const [value, setValue] = useState('');
    const handleClick = () => {
        setHidden('hidden');
        // window.location.reload();
    }
    const handleFB = () => {
        signInWithFacebook();
        setHidden('hidden');
        
    }
    const handleG =async () => {
         signInWithGoogle();
        setHidden('hidden');
        if(!localStorage.getItem('user') == '')
        window.location.reload();
        
    }


    
    return (
        <div className={`z-50 ${hidden} gap-5 border flex justify-center items-end md:items-center shadow-lg fixed inset-0 bg-black bg-opacity-50 `}>
            <div className='relative w-full bg-white rounded-t-lg md:w-1/2 md:flex h-fit'>

            {/* left side */}
            <div className='flex flex-col md:w-[75%] px-5 md:ps-2'>
                <h1 className='my-3 text-lg font-semibold'>Create Account</h1>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <input className='w-1/2 px-2 py-3 bg-gray-100 border ps-3' type="text" name='firstname' placeholder='First Name' />
                        <input className='w-1/2 px-2 py-3 bg-gray-100 border ps-3' type="text" name='lastname' placeholder='Last Name' />
                    </div>
                    <input className='px-2 py-3 bg-gray-100 border ps-3' name='email' type="text" placeholder='Email' />
                    <input className='px-2 py-3 bg-gray-100 border ps-3' name='password' type="text" placeholder='Password' />
                    <input className='px-2 py-3 bg-gray-100 border ps-3' name='confirm' type="text" placeholder='Confirm Password' />
                    <button className='py-3 my-5 font-medium text-white bg-blue-500 rounded-3xl'>Create Account</button>
                    <button onClick={handleFB} className='flex justify-center gap-3 py-3 my-3 border'><img className='w-auto h-6 ' src={fb} />Sign up with Facebook</button>
                    <button onClick={handleG} className='flex justify-center gap-3 py-3 my-3 border'><img className='w-auto h-6 ' src={google} alt='' />Sign up with Google</button>
                </div>
            </div>
            <div className='flex-col items-end hidden px-3 md:flex justify-evenly'>
                <h1 className='flex mt-0 text-lg'>Already have an account?<a className='font-medium text-blue-500'>Sign In</a></h1>
                <img className='w-full h-[75%] ' src={authimg} />
                <p className='text-xs font-light text-gray-800'>By signing up,you agree to our Terms & conditions, Privacy policy</p>
            </div>
            <button onClick={handleClick}> <img className='absolute top-3 right-3 md:right-[-20px] md:top-[-20px] w-5 h-5 bg-gray-500 rounded-full' src={close}></img></button>
            </div>

        </div>

    )
}

export default Register;