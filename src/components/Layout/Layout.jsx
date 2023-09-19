import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';

const Layout = () => {
  const navigation = useNavigation();
  const location=useLocation()
   console.log(location)
    return (
        <div>
          <Header></Header>  
          <div className='max-w-7xl m-auto'>
            { 
            navigation.state === "loading" ? <p className='text-[red]'>Loading....</p> :<Outlet></Outlet>
            }
          
          </div>
        </div>
    );
};

export default Layout;