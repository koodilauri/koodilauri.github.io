import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Lauri Koivisto
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Portfolio 2021</code>
        </p>

        <div className={styles.grid}>
          
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3> &rarr;</h3>
            <p>Hello</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
