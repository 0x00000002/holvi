/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react'
import { Redirect } from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    component: Vault
  },
  {
    component: () => <Redirect to='/' />
  }
]

export default routes
