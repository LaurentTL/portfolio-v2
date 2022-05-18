import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import Banner from '../components/banner/Banner'
import Header from '../components/header/Header'
import MobileMenu from '../components/mobile-menu/MobileMenu'
import gsap from 'gsap'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Laurent Treuil</title>
        <meta name="description" content="Front End web developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Header />
        <Banner />
        {/* <MobileMenu /> */}
      </main>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100vh
        }
        .main {
          width: inherit;
          height: inherit;
        }
      `}</style>
    </div>
  )
}

export default Home
