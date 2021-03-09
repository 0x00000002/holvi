import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import { Metamask } from './index'

export const Wallets = ({ onClose, open = false }) => (
  <div
    id='ConnectWallet'
    className='modal connect-wallet-m'
    style={{ display: open ? 'block' : 'none' }}
  >
    <div className='scroll-wrap'>
      <div className='modal-body'>
        <div className='head-modal'>
          <div className='icon'>
            <i className='icon-wallet'></i>
          </div>
          <div className='title'>
            <p>Connect Wallet</p>
          </div>
          <a href='#link' className='cross closed-modal' onClick={onClose}></a>
        </div>
        <div className='content-modal'>
          <div className='wallets-list'>
            <ul className='list'>
              <Metamask onClose={onClose} />
              <li className='item'>
                <button className='wallet-btn' type='button'>
                  <span className='icon ic-trust'></span>
                  <span className='name'>TrustWallet</span>
                </button>
              </li>
              <li className='item'>
                <button className='wallet-btn' type='button'>
                  <span className='icon ic-math'></span>
                  <span className='name'>MathWallet</span>
                </button>
              </li>
              <li className='item'>
                <button className='wallet-btn' type='button'>
                  <span className='icon ic-token'></span>
                  <span className='name'>TokenPocket</span>
                </button>
              </li>
              <li className='item'>
                <button className='wallet-btn' type='button'>
                  <span className='icon ic-connect'></span>
                  <span className='name'>WalletConnect</span>
                </button>
              </li>
              <li className='item'>
                <button className='wallet-btn' type='button'>
                  <span className='icon ic-binance'></span>
                  <span className='name'>Binance Chain Wallet</span>
                </button>
              </li>
            </ul>
          </div>
          <div className='links-block'>
            <a href='#link' className='link'>
              <i className='icon-info'></i>
              <span>How To Connect Wallet?</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Metamask closer={onClose} />
  </div>
)
