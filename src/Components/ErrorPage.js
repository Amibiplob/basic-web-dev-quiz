import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>this is error page</h1>
            <h1>back to home <Link to='/' title='Home'>Home</Link></h1>
        </div>
    );
};

export default ErrorPage;