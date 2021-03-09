import { rates } from './_test_data'

export const numToLetter = num =>
  Math.abs(Number(num)) >= 1.0e9
    ? (Math.abs(Number(num)) / 1.0e9).toFixed(2) + 'B'
    : Math.abs(Number(num)) >= 1.0e6
    ? (Math.abs(Number(num)) / 1.0e6).toFixed(2) + 'M'
    : Math.abs(Number(num)) >= 1.0e3
    ? (Math.abs(Number(num)) / 1.0e3).toFixed(2) + 'K'
    : Math.abs(Number(num))

const precision = {
  'BTC/ETH': 8,
  'USDT/ETH': 8 // just an example
}

export const toUsd = (num, pair) => (num * rates[pair]).toFixed(2) ?? 0

export const getPrecise = (num, pair) => num.toFixed(precision[pair])

export const toAddress = str => [str.slice(0, 6), '...', str.slice(-4)]
