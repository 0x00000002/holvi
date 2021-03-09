// test data examples to imitate blockchain

export const vaults = [
  {
    pair: 'BTC/ETH', // the same as id?
    vAddress: '0x00000000001234',
    pAddress: '0x12340000000000',
    fToken: 'fETH-1INCH',
    holviAPI: 0.25,
    deposits: 18200,
    reward: 1.7
  },
  {
    pair: 'USDT/ETH', // the same as id?
    vAddress: '0x00000000001234',
    pAddress: '0x12340000000000',
    fToken: 'fETH-1INCH',
    holviAPI: 1.25,
    deposits: 3218200,
    reward: 0.8
  }
]

// temporary examples
export const assets = [
  {
    name: 'Stablecoins',
    APY_min: 15.36,

    API_max: 65.55,
    deposits: 162531, // is it ok in thousands
    rewards: ['holvi', 'eth'], // what is it?
    vaults: ['BTC/ETH']
  },
  {
    name: 'ETH 2.0',
    APY_min: 15.36,
    API_max: 65.55,
    deposits: 162531, // is it ok in thousands
    rewards: ['holvi', 'eth'], // what is it?
    vaults: ['BTC/ETH', 'USDT/ETH']
  },
  {
    name: 'BTC',
    APY_min: 15.36,
    API_max: 65.55,
    deposits: 180531021, // is it ok in thousands
    rewards: ['holvi', 'eth'], // what is it?
    vaults: ['BTC/ETH']
  },
  {
    name: 'Holvi',
    APY_min: 15.36,
    API_max: 65.55,
    deposits: 162531, // is it ok in thousands
    rewards: ['holvi', 'eth'], // what is it?
    vaults: ['HOLVI/ETH']
  }
]

// pair: [ deposited, available, reward ]
export const balances = {
  'BTC/ETH': [0.09, 1.0005, 1230.0025],
  'USDT/ETH': [10.29003, 25.0005, 50.120009]
}

export const rates = {
  'BTC/ETH': 48950.012334,
  'USDT/ETH': 1547.012345,
  HOLVI: 3.14
}
