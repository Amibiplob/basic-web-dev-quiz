import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from './Header';

const Home = () => {
    const quiz = useLoaderData([])
    const quizName = quiz.data ;
   // console.log(quiz.data)
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-11/12 mx-auto gap-7 my-10'>
                {
                    quizName.map(data => (
                        <div key={data.id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className='bg-slate-200 hover:bg-slate-400'><img src={data.logo} alt='' /></figure>
                            <div className="flex justify-between items-center w-11/12 mx-auto">
                                <div className="badge badge-outline p-3">{data.name} {data.total}</div>
                                <Link to={`../quiz/${data.id}`} className="btn btn-outline btn-info btn-sm m-2">Play Quiz</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;