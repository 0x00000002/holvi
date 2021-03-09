import React from 'react'
import { Assets, FeaturedVaults } from './../vaults/'

export const PageContent = ({ onOpen }) => (
  <div className='page-content'>
    <div className='head-page-content'>
      <div className='title-page'>
        <div className='icon-box'>
          <i className='icon-safe'></i>
        </div>
        <div className='text-box'>
          <div className='title'>
            <p>Vaults</p>
          </div>
          <div className='way'>
            <ul className='list'>
              <li className='item'>
                <a href='#link'>HOLVI App</a>
              </li>
              <li className='item'>
                <a href='#link' className='acts'>
                  Vaults
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='btn-block'>
        <a href='#connectWallet' className='btn-tr' onClick={onOpen}>
          <span>Connect Wallet</span>
        </a>
        &nbsp;&nbsp;
        <a href='#link' className='btn'>
          <span>Buy HOLVI</span>
        </a>
      </div>
    </div>
    <div className='vaults-wrap'>
      <FeaturedVaults />
      <Assets />
    </div>
  </div>
)
