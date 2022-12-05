import React from 'react';
import error from '../../Assets/error/error.svg';

const Error = () => {
    return (
        <div className='lg:px-52 bg-base-200'>
            <div className='flex flex-col items-center justify-center h-screen'>
                <img src={error} alt
                ='error' className='w-1/2' />
                <h1 className='text-4xl font-bold text-center text-primary'>404</h1>
                <h1 className='text-2xl font-bold text-center text-primary'>Page Not Found</h1>
            </div>
        </div>
    );
};

export default Error;