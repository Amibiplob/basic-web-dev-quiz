import React from 'react';

const Header = () => {
    return (
        <div className='mb-10 h-52 w-11/12 mx-auto' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }} >
            <h1 className='text-3xl text-white flex justify-center items-center h-52'>
                This is a web development quiz site. You can join and show your skills.
            </h1>
           
        </div>
    );
};

export default Header;