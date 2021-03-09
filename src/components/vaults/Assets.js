import { validate } from 'json-schema'
import React, { useState } from 'react'
import { numToLetter } from './../../helpers'
import { assets } from './../../_test_data'
import { Vaults, VaultList } from './Vaults'

export const Assets = () =>
  assets.map((asset, idx) => <Asset data={asset} key={idx} />)

const Asset = ({ data } = {}) => {
  const { name, APY_min, API_max, deposits, rewards, vaults } = data
  const [open, setOpen] = useState(false)
  const btnAccordion = open ? 'active' : ''
  const accordion = open ? 'open' : ''

  const handleClick = () => setOpen(!open)

  return (
    <div className={`accordion ${accordion}`}>
      <div className={`btn-accordion ${btnAccordion}`} onClick={handleClick}>
        <div className='block'>
          <div className='main-title'>
            <p>{name}</p>
          </div>
        </div>
        <div className='block'>
          <div className='title-box'>
            <p>APY:</p>
          </div>
          <div className='meaning-box'>
            <span className='spec-color-two'>
              {APY_min} - {API_max}
            </span>
          </div>
        </div>
        <div className='block'>
          <div className='title-box'>
            <p>Deposits:</p>
          </div>
          <div className='meaning-box'>
            <span>{numToLetter(deposits)}</span>
          </div>
        </div>
        <div className='block'>
          <div className='title-box'>
            <p>Rewards:</p>
          </div>
          <div className='payments-box'>
            <div className='icon-wrap'>
              <span className='icon ic-apy'></span>
              <span className='icon ic-eth'></span>
            </div>
          </div>
        </div>
      </div>
      <VaultList vaults={vaults} open={open} />
    </div>
  )
}
