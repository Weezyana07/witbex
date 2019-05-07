import React from 'react';

const Header = () => (
  <div className='container'>
    <div className='header'>
      <div>
        <img src="/img/Logo.png" style={{ width: '40px', height: '40px' }} />
      </div>
      <div>
        <ul>
          <li><a href='#about'>About</a> </li>
          <li><a href='#about'>How it works</a> </li>
          <li><a href='#Howitworks'>Platform</a> </li>
          <li><a href='#Whitepaper'>Whitepaper</a> </li>
        </ul>
      </div>
      <div>
        <button className="btn"><span className="icon"></span>Pre-order E-bag</button>
        <button className="btn"><span className="icon"></span>Download App</button>
      </div>
    </div>
  </div>

);

export default Header;

