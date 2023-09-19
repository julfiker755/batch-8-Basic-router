import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({Product}) => {
    const navigate=useNavigate()
    const {id,thumbnail,description,title}=Product
    return (
        <div className='border rounded-md p-2'>
            <img className='rounded-md w-full h-[136px]' src={thumbnail} alt="" />
            <div>
                <h1 className='text-xl font-bold truncate'>{title}</h1>
                <p className='text-xs py-2'>{description.slice(0,70)}</p>
                <button onClick={()=>navigate(`/user/${id}`)} className='w-full h-8 bg-rose-900 text-white rounded-md'>Details</button>
            </div>
        </div>
    );
};

export default Card;