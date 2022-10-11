import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizOption = useLoaderData([]).data
    const { total, id, name, questions } = quizOption;
    // console.log(quizOption)
    // console.log(questions);
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-5xl text-center'>quiz of {name}</h1>
            <h1 className='text-4xl text-center'>total quiz  {total}</h1>
            {
                questions.map(data => (
                    <div key={data.id}>
                        <h1 className='bg-slate-500'>{data.question}</h1>
                        <div className='bg-red-200 grid grid-cols-2 p-9'>
                            {data.options.map(data => (
                                <div className="form-control p-3">
                                    <label className="label cursor-pointer bg-green-400">
                                        <input type="radio" name="radio-6" className="radio checked:bg-blue-500" checked />
                                        <span className="label-text flex-1">{data}</span>
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