import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import { Footer } from './Footer'
import { Portfolio } from '../Portfolio'

interface IProps {
  children: React.ReactNode
}

export const Layout = (props: IProps) => {
  return (
    <Wrapper>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>{props.children}</Container>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #000;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: absolute;
  width: 100%;
`
const Container = styled.main`
  margin: 2rem 0rem;
`
