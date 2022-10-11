import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='grid grid-cols-1 place-content-center justify-items-center h-screen bg-red-200'>
            <h1 className='text-5xl text-red-500'>Opps! error page</h1>
            <h1 className='text-3xl mt-9'>Back to <Link to='/' title='Home' className='btn btn-success'>Home Page</Link></h1>
        </div>
    );
};

export default ErrorPage;