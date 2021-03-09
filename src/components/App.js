import React, { useEffect, useState } from 'react'
import './../assets/css/main.css'
import {
  Header,
  Footer,
  MainBar,
  AdditionalBar,
  PageContent
} from './layouts/index'
import { Wallets } from './wallets/index'

export const App = props => {
  const [open, setOpen] = useState(false)
  const openWalletsModal = () => setOpen(true)
  const closeWalletsModal = () => setOpen(false)

  useEffect(() => {})

  return (
    <>
      <Header />
      <div className='main-wrapper'>
        <MainBar />
        <PageContent onOpen={openWalletsModal} />
        <AdditionalBar />
      </div>
      <Footer />
      <div className='overlay'></div>
      <Wallets open={open} onClose={closeWalletsModal} />
    </>
  )
}

export default App
