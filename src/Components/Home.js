import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const quiz = useLoaderData([])
    const quizName = quiz.data ;
   // console.log(quiz.data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto gap-7'>
           {
            quizName.map(data =>(
                <div key={data.id} className="card w-96 bg-base-100 shadow-xl">
                    <figure className='bg-slate-200 hover:bg-slate-400'><img src={data.logo}/></figure>
                    <div className="flex justify-between items-center w-11/12 mx-auto">
                        <div className="badge badge-outline p-3">{data.name}</div>
                        <button className="btn btn-outline btn-info btn-sm m-2">Responsive</button>

                    </div>
                </div>
            ))
           }
        </div>
    );
};

export default Home;