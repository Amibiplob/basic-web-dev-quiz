import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
const Root = () => {
    const quiz = useLoaderData([])
    const quizName = quiz.data;
   // console.log(quiz.data)
    return (
        <div>
            <Navbar quizName={quizName}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;