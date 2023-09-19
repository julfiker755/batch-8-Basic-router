import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data=useLoaderData()
    return (
        <div className='text-center m-auto space-y-2'>
            <h1 className='text-3xl'>User id:{data.id}</h1>
            <img className='m-auto rounded-lg' src={data.thumbnail} alt="" />
            <p>{data.description}</p>
            <p className='text-2xl font-semibold'>price:{data.price}</p>
            <p className='text-2xl font-semibold'>rating:{data.rating}</p>
        </div>
    );
};

export default Details;