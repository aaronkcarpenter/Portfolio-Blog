import React from 'react';

import '../styling/navbar.css';
import '../styling/blog.css';

export default function Navbar() {
  return(
    <div className='nav-container'>
      <nav>
        <div className='headers-container'>
          <div className='title-header'>
            <h1>Aaron Carpenter</h1>
          <div className='subheader-home'>
            <p>Software Engineer | Business & Investing Enthusiast | Content Creator</p>
          </div>
          </div>
        </div>
        {/* <div className='logo'>
          <h2>aaronkcarpenter.com</h2>
        </div> */}
        <div className='links-container'>
          <ul className='navbar--link'>
            <li className='navbar--link-item'>
              <a  className='navbar-links' href='/'>Home</a>
            </li>
            <li className='navbar--link-item'>
              <a className='navbar-links' href='#projects'>Projects</a>
            </li>
            <li className='navbar--link-item'>
              <a className='navbar-links' href='/blog'>Blog</a>
            </li>
            <li className='navbar--link-item'>
              <a className='navbar-links' href='https://docs.google.com/document/d/16iFr5Lm5A0wd0E9YwMRcWvwwZPIf99BM/export?format=pdf&attachment=false' target='_blank' rel="noreferrer">Resumé</a>
            </li>
            <li className='navbar--link-item'>
              <a className='navbar-links' href='#social'>Social</a>
            </li>
            <li className='navbar--link-item'>
              <a className='navbar-links' href='mailto: aaronkcarpenter@gmail.com'>Email Me</a>
            </li>
          </ul>

        </div> 
      </nav>
    </div>
  )
}