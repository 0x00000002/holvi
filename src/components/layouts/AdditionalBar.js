import React from 'react'

export const AdditionalBar = ({ data }) => (
  <div className='additional-bar'>
    <div className='block'>
      <div className='icon-box'>
        <i className='ic-museum'></i>
      </div>
      <div className='title-box'>
        <p>Deposits in system</p>
      </div>
      <div className='number-block'>
        <span className='spec-color-one'>834,793,466.28 USD</span>
      </div>
    </div>
    <div className='block'>
      <div className='icon-box'>
        <i className='ic-profits'></i>
      </div>
      <div className='title-box'>
        <p>Monthly profit</p>
      </div>
      <div className='number-block'>
        <span className='spec-color-two'>12,352,842.94 USD</span>
      </div>
    </div>
    <div className='block'>
      <div className='icon-box'>
        <i className='ic-bar-chart'></i>
      </div>
      <div className='list-box'>
        <ul className='list'>
          <li className='item'>
            <div className='title'>
              <span>HOLVI Price:</span>
            </div>
            <div className='number'>
              <span className='spec-color-one'>359.22 USD</span>
            </div>
          </li>
          <li className='item'>
            <div className='title'>
              <span>HOLVI Staking APY:</span>
            </div>
            <div className='number'>
              <span className='spec-color-two'>69.25%</span>
            </div>
          </li>
          <li className='item'>
            <div className='title'>
              <span>Market Cap:</span>
            </div>
            <div className='number'>
              <span>1.25 B</span>
            </div>
          </li>
          <li className='item'>
            <div className='title'>
              <span>HOLVI Staked:</span>
            </div>
            <div className='number'>
              <span>71%</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className='block'>
      <div className='icon-box'>
        <i className='ic-calendar'></i>
      </div>
      <div className='title-box'>
        <p>Next Emission Decrease In</p>
      </div>
      <div className='progress-rows'>
        <div className='progress-title'>
          <p>04 D : 19 H : 17 M</p>
        </div>
        <div className='progress-wrap'>
          <div className='progress'></div>
        </div>
      </div>
    </div>
    <div className='block-btn'>
      <a href='#link' className='btn'>
        <span>Buy HOLVI</span>
      </a>
    </div>
  </div>
)
