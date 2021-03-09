import React from 'react'
import aLogo from './../../assets/img/audited-logo.png'

export const Footer = ({ data }) => (
  <footer className='footer'>
    <div className='container'>
      <div className='footer-block'>
        <div className='title-box'>
          <p>Audited by</p>
        </div>
        <div className='audited-box'>
          <ul className='list'>
            <li className='item'>
              <a href='#link'>
                <img src={aLogo} alt='img' />
              </a>
            </li>
            <li className='item'>
              <a href='#link'>
                <img src={aLogo} alt='img' />
              </a>
            </li>
            <li className='item'>
              <a href='#link'>
                <img src={aLogo} alt='img' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-block'>
        <div className='title-box'>
          <p>HOLVI Support</p>
        </div>
        <div className='support-list'>
          <ul className='list'>
            <li className='item'>
              <span className='icon'>Icon1</span>
            </li>
            <li className='item'>
              <span className='icon'>Icon2</span>
            </li>
            <li className='item'>
              <span className='icon'>Icon3</span>
            </li>
            <li className='item'>
              <span className='icon'>Icon4</span>
            </li>
            <li className='item'>
              <span className='icon'>Icon5</span>
            </li>
            <li className='item'>
              <span className='icon'>Icon1</span>
            </li>
            <li className='item'>
              <span className='icon'>Icon2</span>
            </li>
            <li className='item'>
              <span className='icon'>Icon3</span>
            </li>
            <li className='item'>
              <span className='icon'>Icon4</span>
            </li>
            <li className='item'>
              <span className='icon'>Icon5</span>
            </li>
            <li className='item'>
              <span className='icon'>Icon1</span>
            </li>
            <li className='item'>
              <span className='icon'>Icon2</span>
            </li>
            <li className='item'>
              <span className='icon'>Icon3</span>
            </li>
            <li className='item'>
              <span className='icon'>Icon4</span>
            </li>
            <li className='item'>
              <span className='icon'>Icon5</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='footer-block'>
        <div className='title-box'>
          <p>Gas fees saved</p>
        </div>
        <div className='number-box'>
          <span>24,620,788.38</span>
          <span>USD</span>
        </div>
      </div>
    </div>
  </footer>
)
