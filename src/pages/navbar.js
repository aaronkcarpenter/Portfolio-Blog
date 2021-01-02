import React from 'react';

import '../styling/navbar.css';

export default function Navbar() {
  return(
    <div className='nav-container'>
      <nav>
        <a>
          <h2>aaronkcarpenter.com</h2>
        </a>
        <ul className='navbar--link'>
          <li className='navbar--link-item'>Projects</li>
          <li className='navbar--link-item'>Blog</li>
          <li className='navbar--link-item'>Resumé</li>
          <li className='navbar--link-item'>Contact</li>
        </ul>
      </nav>
    </div>
  )
}