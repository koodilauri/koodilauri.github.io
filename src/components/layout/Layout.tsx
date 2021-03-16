import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'

import { Footer } from './Footer'

export const Layout = () => {
  return (
    <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>
        Lauri Koivisto
      </h1>

      <p>
        <code>Portfolio 2021</code>
      </p>

      <div>
        <p>Hi, I’m Lauri Koivisto; a master’s student of CCIS from Aalto University with a bachelor’s degree in Automation and Systems Technology.</p>
      </div>
      <div>
        <h2>
          Education
        </h2>
        <p>
        Aalto university, Espoo, Otaniemi — Master of Science in Technology
        </p>
        <p>
        Aalto university, Espoo, Otaniemi — Bachelor of Science (Technology)
        </p>
        <p>
        Hyvinkää Senior High School, Hyvinkää — Graduate student
        </p>
      </div>
      <div>
        <h2>
          Projects
        </h2>
        <p>
          <Link href="https://github.com/koodilauri/speaker-verification" passHref>
              <b>Thesis project</b>
          </Link>
        </p>
        <p>
          <Link href="http://go.vaisala.com/keravaradar/" passHref>
              <b>Work project at Vaisala</b>
          </Link>
        </p>
        <p>
          <Link href="https://d386g19k2b21z4.cloudfront.net/" passHref>
              <b>Fansite for submitting speedruns for a videogame</b>
          </Link>
        </p>
      </div>
    </main>

    <Footer/>
  </div>
  )
}