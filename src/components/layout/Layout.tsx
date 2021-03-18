import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import { Footer } from './Footer'
import { Portfolio } from '../Portfolio'

export const Layout = () => {
  return (
    <div>
    <Head>
      <title>Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>
        Lauri Koivisto
      </h1>

      <p>
        <code>Portfolio 2021</code>
      </p>
      <Portfolio/>
    </main>

    <Footer/>
  </div>
  )
}