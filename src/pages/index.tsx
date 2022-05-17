import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import Banner from '../components/banner/Banner'
import Header from '../components/header/Header'
import MobileMenu from '../components/mobile-menu/MobileMenu'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Laurent Treuil</title>
        <meta name="description" content="Front End web developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Banner />
        <MobileMenu />
      </main>
    </div>
  )
}

export default Home
