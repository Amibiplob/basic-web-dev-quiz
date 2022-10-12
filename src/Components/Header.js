import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-around items-center flex-col md:flex-row my-10'>
            <h1 className='text-3xl'>
                This is a web development quiz site. You can join and show your skills.
            </h1>
            <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""  className='h-40 mt-10'/>
        </div>
    );
};

export default Header;