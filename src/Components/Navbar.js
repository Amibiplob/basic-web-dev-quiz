import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 md:w-4/5 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <NavLink to='home' title='Home'>Home</NavLink></li>
                    </ul>
                </div>
                <NavLink className="btn btn-ghost normal-case text-xl">MY Quiz</NavLink>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li> <NavLink to='home' title='Home'>Home</NavLink></li>
                    <li> <NavLink to='quiz' title='quiz'>quiz</NavLink></li>
                </ul>
            </div>
           
        </div>
    );
};

export default Navbar;