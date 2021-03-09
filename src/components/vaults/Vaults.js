import { validate } from 'json-schema'
import React, { useState } from 'react'
import { numToLetter, getPrecise, toUsd, toAddress } from './../../helpers'
import { vaults as allVaults, balances } from './../../_test_data.js'
import { featuredVaults } from './../../config'
import * as R from 'ramda'

const reduceVaults = required => (acc, curr) =>
  required.includes(curr?.pair) ? [...acc, curr] : acc

const getPercent = (num, percent) => (num / 100) * percent

export const FeaturedVaults = () => (
  <div className='first-rows'>
    <div className='title-section'>
      <p>Featured Vaults</p>
      <sub>Click On Vault To Expand</sub>
    </div>
    <VaultList vaults={featuredVaults} open={true} />
  </div>
)

export const VaultList = ({ vaults = [], open = false } = {}) => {
  const list = R.reduce(reduceVaults(featuredVaults), [])(allVaults)
  const display = open ? 'block' : 'none'
  return (
    <div className='inner-accordion' style={{ display }}>
      <div className='special-table'>
        <div className='head-list'>
          <ul className='list'>
            <li className='item'>
              <span>Vault</span>
            </li>
            <li className='item'>
              <span>HOLVI APY</span>
            </li>
            <li className='item'>
              <span>Deposits, USD</span>
            </li>
            <li className='item'>
              <span>Your balance</span>
            </li>
          </ul>
        </div>
        <Vaults vaults={list} open={open} />
      </div>
    </div>
  )
}

const Vaults = ({ vaults = [], open = false } = {}) =>
  vaults.map((vault, idx) => <Vault vault={vault} open={open} key={idx} />)

const Vault = ({ vault } = {}) => {
  const { pair, holviAPY, deposits } = vault
  const [open, setOpen] = useState(false)

  const onClose = () => setOpen(false)

  return (
    <div className='links-rows'>
      <ul className='list'>
        <li className='item' data-title='Vault'>
          <div className='payments-box'>
            <div className='icon-wrap'>
              <span className='icon ic-btc'></span>
              <span className='icon ic-eth'></span>
            </div>
            <div className='name-wrap name-wrap-right'>
              <span>{pair}</span>
            </div>
          </div>
        </li>
        <li className='item' data-title='HOLVI APY'>
          <div className='payments-box'>
            <div className='name-wrap name-wrap-left'>
              <span className='spec-color-two'>0.25%</span>
            </div>
            <div className='icon-wrap'>
              <span className='icon ic-apy'></span>
              <span className='icon ic-eth'></span>
            </div>
          </div>
        </li>
        <li className='item' data-title='Deposits, USD'>
          <div className='num-box'>
            <span>{deposits}</span>
          </div>
        </li>
        <li className='item' data-title='Your balance'>
          <div className='num-box'>
            <span className='spec-color-one'>
              {getPrecise(balances[pair][0] + balances[pair][1], pair)}
            </span>
          </div>
        </li>
      </ul>
      <a href='#link' className='inner-link' onClick={() => setOpen(true)}>
        {' '}
      </a>
      <VaultDetails data={{ vault, balances, open, onClose }} />
    </div>
  )
}

export const VaultDetails = ({
  data: {
    vault: { pair, deposits, vAddress, pAddress, holviAPI, fToken } = {},
    balances,
    open = false,
    onClose
  }
}) => {
  const deposited = getPrecise(balances?.[pair]?.[0], pair)
  const available = getPrecise(balances?.[pair]?.[1], pair)
  const reward = getPrecise(balances?.[pair]?.[2], pair)
  const usdDeposited = toUsd(deposited, pair)
  const usdAvailable = toUsd(available, pair)
  const usdReward = toUsd(reward, 'HOLVI')
  const poolAddress = toAddress(pAddress)
  const vaultAddress = toAddress(vAddress)

  const [availableInput, setAvailableInput] = useState(0)
  const [availablePercent, setAvailablePercent] = useState(0)
  const handleAvailablePercent = percent => {
    setAvailablePercent(percent)
    setAvailableInput((percent * available) / 100)
  }
  const handleAvailableInput = event => {
    setAvailableInput(event?.target?.value)
  }

  const [depositedInput, setDepositedInput] = useState(0)
  const [depositedPercent, setDepositedPercent] = useState(0)
  const handleDepositedPercent = percent => {
    setDepositedPercent(percent)
    setDepositedInput((percent * deposited) / 100)
  }
  const handleDepositedInput = event => {
    setDepositedInput(event?.target?.value)
  }

  return (
    <div
      id='VaultsM'
      class='modal vaults-m'
      style={{ display: open ? 'block' : 'none' }}
    >
      <div class='scroll-wrap'>
        <div class='modal-body'>
          <VaultHead props={{ pair, deposits, onClose }} />

          <div class='content-modal'>
            <VaultAvailable
              props={{
                available,
                usdAvailable,
                availableInput,
                availablePercent,
                handleAvailablePercent,
                handleAvailableInput
              }}
            />
            <VaultDeposited
              props={{
                deposited,
                usdDeposited,
                depositedInput,
                depositedPercent,
                handleDepositedPercent,
                handleDepositedInput
              }}
            />
            <VaultReward props={{ reward, usdReward }} />
            <VaultInfo
              props={{ vaultAddress, poolAddress, fToken, holviAPI }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const VaultHead = ({ props: { pair, deposits, onClose } = {} }) => {
  return (
    <div class='head-modal'>
      <div class='payments-box'>
        <div class='icon-wrap'>
          <span class='icon ic-btc'></span>
          <span class='icon ic-eth'></span>
        </div>
      </div>
      <div class='title-wrap'>
        <strong>{pair}</strong>
        <span>{numToLetter(deposits)}</span>
      </div>
      <a href='#' onClick={onClose} class='cross closed-modal'></a>
    </div>
  )
}

const VaultInfo = ({
  props: { vaultAddress, poolAddress, fToken, holviAPI } = {}
}) => {
  return (
    <div class='details-rows'>
      <div class='title-block'>
        <i class='icon-info'></i>
        <p>Vault Details</p>
      </div>
      <div class='details-list'>
        <ul class='list'>
          <li class='item' style={{ paddingLeft: '0px' }}>
            <span class='name'>Vault&nbsp;address:</span>
            <a href='#' class='meaning link'>
              <span>{vaultAddress}</span>
              <i class='icon-link-ext'></i>
            </a>
          </li>
          <li class='item'>
            <span class='name'>Pool&nbsp;address:</span>
            <a href='#' class='meaning link'>
              <span>{poolAddress}</span>
              <i class='icon-link-ext'></i>
            </a>
          </li>
          <li class='item'>
            <span class='name'>fToken:</span>
            <span class='meaning'>{fToken}</span>
          </li>
          <li class='item'>
            <span class='name'>APY:</span>
            <span class='meaning meaning-green'>{holviAPI}%</span>
          </li>
        </ul>
      </div>

      <div class='chart-row'>
        <div id='ChartPie' class='chart-pie'></div>
      </div>
    </div>
  )
}

const VaultAvailable = ({
  props: {
    available,
    usdAvailable,
    availableInput,
    availablePercent,
    handleAvailablePercent,
    handleAvailableInput
  } = {}
}) => {
  const checked25 = availablePercent === 25 ? 'checked' : ''
  const checked50 = availablePercent === 50 ? 'checked' : ''
  const checked75 = availablePercent === 75 ? 'checked' : ''
  const checked100 = availablePercent === 100 ? 'checked' : ''

  return (
    <div class='form-rows'>
      <form action='#' class='balance-form'>
        <div class='title-row'>
          <p>Balance</p>
          <div class='num-wrap'>
            <span class='color-one'>{available}</span>
            <span class='color-one'> (${numToLetter(usdAvailable)})</span>
          </div>
        </div>
        <div class='form-wrap'>
          <div class='block'>
            <div class='input-group'>
              <input
                type='text'
                value={availableInput}
                onChange={handleAvailableInput}
              ></input>
            </div>
            <div class='radio-group'>
              <div class='radio-wrap'>
                <div class='radio-box'>
                  <input
                    id='balance-percent-one'
                    type='radio'
                    onClick={() => handleAvailablePercent(25)}
                    checked25
                    name='balance-percent'
                  />
                  <label for='balance-percent-one'>25%</label>
                </div>
                <div class='radio-box'>
                  <input
                    id='balance-percent-two'
                    type='radio'
                    onClick={() => handleAvailablePercent(50)}
                    checked50
                    name='balance-percent'
                  />
                  <label for='balance-percent-two'>50%</label>
                </div>
                <div class='radio-box'>
                  <input
                    id='balance-percent-three'
                    type='radio'
                    name='balance-percent'
                    onClick={() => handleAvailablePercent(75)}
                    checked75
                  />
                  <label for='balance-percent-three'>75%</label>
                </div>
                <div class='radio-box'>
                  <input
                    id='balance-percent-four'
                    type='radio'
                    onClick={() => handleAvailablePercent(100)}
                    checked100
                    name='balance-percent'
                  />
                  <label for='balance-percent-four'>max</label>
                </div>
              </div>
            </div>
          </div>
          <div class='block'>
            <button type='submit' class='btn-rew'>
              Deposit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

const VaultDeposited = ({
  props: {
    deposited,
    usdDeposited,
    depositedInput,
    depositedPercent,
    handleDepositedPercent,
    handleDepositedInput
  } = {}
}) => {
  const checked25 = depositedPercent === 25 ? 'checked' : ''
  const checked50 = depositedPercent === 50 ? 'checked' : ''
  const checked75 = depositedPercent === 75 ? 'checked' : ''
  const checked100 = depositedPercent === 100 ? 'checked' : ''

  return (
    <div class='form-rows'>
      <form action='#' class='deposit-form'>
        <div class='title-row'>
          <p>Deposited</p>
          <div class='num-wrap'>
            <span class='color-two'>{deposited}</span>
            <span class='color-two'>(${numToLetter(usdDeposited)})</span>
          </div>
        </div>
        <div class='form-wrap'>
          <div class='block'>
            <div class='input-group'>
              <input
                type='text'
                value={depositedInput}
                onChange={handleDepositedInput}
              ></input>
            </div>
            <div class='radio-group'>
              <div class='radio-wrap'>
                <div class='radio-box'>
                  <input
                    id='deposit-percent-one'
                    type='radio'
                    onClick={() => handleDepositedPercent(25)}
                    checked25
                    name='deposit-percent'
                  />
                  <label for='deposit-percent-one'>25%</label>
                </div>
                <div class='radio-box'>
                  <input
                    id='deposit-percent-two'
                    type='radio'
                    onClick={() => handleDepositedPercent(50)}
                    checked50
                    name='deposit-percent'
                  />
                  <label for='deposit-percent-two'>50%</label>
                </div>
                <div class='radio-box'>
                  <input
                    id='deposit-percent-three'
                    type='radio'
                    onClick={() => handleDepositedPercent(75)}
                    checked75
                    name='deposit-percent'
                  />
                  <label for='deposit-percent-three'>75%</label>
                </div>
                <div class='radio-box'>
                  <input
                    id='deposit-percent-four'
                    type='radio'
                    onClick={() => handleDepositedPercent(100)}
                    checked100
                    name='deposit-percent'
                  />
                  <label for='deposit-percent-four'>max</label>
                </div>
              </div>
            </div>
          </div>
          <div class='block'>
            <button type='submit' class='btn-green-rew'>
              Withdrawal
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

const VaultReward = ({ props: { reward, usdReward } = {} }) => {
  return (
    <div class='form-rows'>
      <form action='#' class='rewards-form'>
        <div class='form-wrap'>
          <div class='block desc-block'>
            <p>HOLVI Rewards</p>
            <div class='num-wrap'>
              <span class='color-one'>{reward}</span>
              <span class='color-one'>(${numToLetter(usdReward)})</span>
            </div>
          </div>
          <div class='block'>
            <button type='submit' class='btn-tr'>
              Harvest
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
