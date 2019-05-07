import React from 'react';
import Header from './Header';

const Home = () => (
  <div className='home_page'>
    <Header />
    <div className='container'>
      <div className='home_content'>
        <h3 className='evolve'>EVOLVING THE WAY WE</h3>
        <span className='ho'>Home</span>
        <h1 className='travel'>Travel & Explore</h1>
        <button className='button'>Login</button>
        <button className='button'>Sign Up</button>
      </div>
    </div>

  </div>


);

export default Home;
