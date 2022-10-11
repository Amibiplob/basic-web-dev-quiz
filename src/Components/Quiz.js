import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizOption = useLoaderData([]).data
    const { total, id, name, questions } = quizOption;
    // console.log(quizOption)
    // console.log(questions);
    let count = 1;
    return (
        <div className='w-4/5 mx-auto bg-slate-200 rounded-xl'>
            <h1 className='text-5xl text-center'>{name} Quiz</h1>
            <h1 className='text-4xl text-right'>total quiz  {total}</h1>
            {
                questions.map(data => (
                    <div key={data.id}>
                        <div className='bg-slate-500 text-xl p-3 mt-5 flex justify-between items-center rounded text-white'>
                            <h1><span className='font-bold'>Quiz {count++} :</span> {data.question}</h1>
                          <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 md:w-6 h-6 md:mr-6">
                                    <path stroke-linecap="round"
                                        stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                          </button>
                        </div>
                        <div className='bg-gray-300 grid grid-cols-1 lg:grid-cols-2'>
                            {data.options.map(data => (
                                <div className="form-control p-3">
                                    <label className="label cursor-pointer bg-slate-200 rounded-xl pl-2">
                                        <input type="radio" name="radio-6" className="radio checked:bg-blue-500" checked />
                                        <span className="label-text flex-1 ml-3">{data}</span>
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