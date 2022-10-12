import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ quizName }) => {
    //  console.log(quizName);
    return (
        <div className="navbar bg-base-100 md:w-4/5 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <NavLink to='home' title='Home'>Home</NavLink></li>
                        <li tabIndex={0}>
                            <Link className="justify-between">
                                Quiz
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                {
                                    quizName.map(data => (
                                        <li key={data.id}>
                                            <Link to={`../quiz/${data.id}`} className="bg-white mb-1">{data.name}</Link>
                                        </li>
                                    ))}
                            </ul>
                        </li>
                        <li> <NavLink to='blog' title='Blog'>Blog</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">MY Quiz</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="flex gap-6">
                    <li className='hover:bg-slate-300'>
                        <NavLink to='home' title='Home'>
                            {({ isActive }) => (<span className={isActive ? 'bg-blue-100 text-blue-600 round p-2' : 'p-2'}>Home</span>)}
                        </NavLink> </li>
                    <li className="dropdown dropdown-hover hover:bg-slate-300 px-3">
                        <label tabIndex={0} className=" p-2 rounded-lg">Quiz</label>
                        <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-40">
                            {
                                quizName.map(data => (
                                    <li key={data.id}>
                                        <Link to={`../quiz/${data.id}`} className=" hover:bg-slate-300">{data.name}</Link>
                                    </li>
                                ))}

                        </ul>
                    </li>
                    <li className='hover:bg-slate-300'>
                        <NavLink to='blog' title='Blog'>
                            {({ isActive }) => (<span className={isActive ? 'bg-blue-100 text-blue-600 round p-2' : 'p-2'}>Blog</span>)}
                        </NavLink> </li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;