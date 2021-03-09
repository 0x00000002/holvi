import React from 'react'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import metamaskLogo from './../../assets/img/metamask.png'
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'

const connect = async () => {
  const web3Modal = new Web3Modal()
  const provider = await web3Modal.connect()
  const web3 = new Web3(provider)
}

export const Metamask = ({ onClose }) => (
  <li className='item' onClick={() => connect() && onClose()}>
    <button className='wallet-btn' type='button'>
      <span className='icon ic-metamask'></span>
      <span className='name'>Metamask</span>
    </button>
  </li>
)
