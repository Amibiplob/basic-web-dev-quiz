import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className='bg-slate-400 py-6 pl-10 mt-10 rounded-xl'>
                <h1 className='text-5xl'>How Does the Context API Work?</h1>
                <p className='text-3xl pt-10'><span className='text-4xl font-bold'>Ans : </span>
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store.</p>
            </div>
            <div className='bg-slate-400 py-6 pl-10 mt-10 rounded-xl'>
                <h1 className='text-5xl'>What is the react router's purpose?</h1>
                <p className='text-3xl pt-10'><span className='text-4xl font-bold'>Ans : </span>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='bg-slate-400 py-6 pl-10 mt-10 rounded-xl'>
                <h1 className='text-5xl'>React useRef Hook</h1>
                <p className='text-3xl pt-10'><span className='text-4xl font-bold'>Ans : </span>
                    The useRef Hook allows you to persist values between renders.
                    It can be used to store a mutable value that does not cause a re-render when updated.
                    It can be used to access a DOM element directly</p>
            </div>

        </div>
    );
};

export default Blog;