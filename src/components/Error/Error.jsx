import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    let error = useRouteError();
    console.log(error)
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h1 className='text-3xl'>stadus:{error.status}</h1>
            <h1 className='text-3xl'>statusText:{error.statusText}</h1>
        </div>
    );
};

export default Error;