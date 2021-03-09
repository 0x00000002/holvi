import React from 'react'
import logo from './../../assets/img/logo.png'

export const MainBar = ({ data }) => (
  <div className='main-bar'>
    <div className='logo-block'>
      <a href='index.html'>
        <img src={logo} alt='logo' />
      </a>
    </div>
    <nav className='nav'>
      <ul className='list'>
        <li className='item'>
          <a href='index.html' className='nav-link active'>
            <span className='icon'>
              <i className='icon-safe'></i>
            </span>
            <span className='name'>Vaults</span>
          </a>
        </li>
        <li className='item'>
          <a href='nft-rewards.html' className='nav-link'>
            <span className='icon'>
              <i className='icon-medal'></i>
            </span>
            <span className='name'>NFT Rewards</span>
          </a>
        </li>
        <li className='item'>
          <a href='documentation.html' className='nav-link'>
            <span className='icon'>
              <i className='icon-copy'></i>
            </span>
            <span className='name'>Documentation</span>
          </a>
        </li>
        <li className='item'>
          <a href='faq.html' className='nav-link'>
            <span className='icon'>
              <i className='icon-conversation'></i>
            </span>
            <span className='name'>FAQ</span>
          </a>
        </li>
      </ul>
    </nav>
    <div className='switcher-block'>
      <div className='label'>
        <i className='icon-moon'></i>
        <span>Nightmode</span>
      </div>
      <div className='switcher'>
        <input type='checkbox' id='theme-switch' defaultChecked />
        <label htmlFor='theme-switch'></label>
      </div>
    </div>
    <div className='social-block'>
      <div className='title-box'>
        <p>Stay Tuned</p>
      </div>
      <ul className='list'>
        <li className='item'>
          <a href='#link'>
            <i className='icon-github'></i>
            <span>Github</span>
          </a>
        </li>
        <li className='item'>
          <a href='#link'>
            <i className='icon-telegram'></i>
            <span>Telegram</span>
          </a>
        </li>
        <li className='item'>
          <a href='#link'>
            <i className='icon-medium'></i>
            <span>Medium</span>
          </a>
        </li>
        <li className='item'>
          <a href='#link'>
            <i className='icon-tw'></i>
            <span>Twitter</span>
          </a>
        </li>
        <li className='item'>
          <a href='#link'>
            <i className='icon-yt'></i>
            <span>Youtube</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
)
