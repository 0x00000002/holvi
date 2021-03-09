import React from 'react'
import logo from './../../assets/img/logo.png'

export const Header = () => (
  <header className='header'>
    <div className='btn-box'>
      <a href='#link' className='menu'>
        {' '}
      </a>
    </div>
    <div className='logo-box'>
      <a href='index.html'>
        <img src={logo} alt='Holvi logo' />
      </a>
    </div>
    <div className='btn-box'>
      <a href='#link' className='additional-btn'>
        {' '}
      </a>
    </div>
  </header>
)
