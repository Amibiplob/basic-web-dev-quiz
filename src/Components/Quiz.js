import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
const Quiz = () => {
    const quizOption = useLoaderData([]).data
    const { total, name, questions } = quizOption;
    // console.log(quizOption)
    // console.log(questions);
    let count = 1;
    const [Ans, setAns] = useState([])
    // console.log(Ans);
    const answer = (select) => {
        //   console.log(select);
        if (select === Ans) {
            toast.success('Your Answer is correct.', { autoClose: 500 })
        }
        else {
            toast.error('Your Answer is incorrect.', { autoClose: 500 })
        }
    }
    return (
        <div className='w-11/12 mx-auto mb-5 bg-slate-200 rounded-xl'>
            <div className='flex justify-between items-center w-11/12 mx-auto'>
                <h1 className='text-5xl text-center'>{name} Quiz</h1>
                <h1 className='text-4xl text-right'>Total Quiz : {total}</h1>
            </div>
            {
                questions.map(data => (
                    <div key={data.id}>
                        <div className='bg-slate-500 text-xl p-3 mt-5 flex justify-between items-center rounded text-white'>
                            <h1><span className='font-bold'>Quiz {count++} :</span> {data.question.slice(3, -4)}</h1>
                            <button onClick={() => toast.success(data.correctAnswer, { autoClose: 5000 })}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 md:w-6 h-6 md:mr-6">
                                    <path stroke-linecap="round"
                                        stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>
                        </div>
                        <div className='bg-gray-300 grid grid-cols-1 lg:grid-cols-2 items-center' onClick={() => setAns(data.correctAnswer)}>
                            {data.options.map(data => (
                                <div className="p-3" key={data}>
                                    <label className="label cursor-pointer bg-slate-200 rounded-xl pl-2  hover:bg-slate-600 btn">
                                        <button className="label-text flex-1 ml-3  hover:text-white" onClick={() => answer(data)}>{data}</button>
                                    </label>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Quiz;