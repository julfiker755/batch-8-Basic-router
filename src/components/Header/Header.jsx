import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul className='flex bg-rose-800 text-white py-2 justify-center space-x-4 font-bold'>
                <li><NavLink className={({ isActive}) => isActive ? 'text-[#34a83c]':""} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive}) => isActive ? 'text-[#34a83c]':""} to="/help">Help</NavLink></li>
                <li><NavLink className={({ isActive}) => isActive ? 'text-[#34a83c]':""} to="/contact">Contact</NavLink></li>
                <li><NavLink className={({ isActive}) => isActive ? 'text-[#34a83c]':""} to="/user">User</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;