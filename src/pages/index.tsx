import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import { useRef } from 'react'
import Banner from '../components/banner/Banner'
import Header from '../components/header/Header'
import MobileMenu from '../components/mobile-menu/MobileMenu'
import gsap from 'gsap'
import Link from 'next/Link'
import Cursor from '../components/cursor/Cursor'

const Home: NextPage = () => {

  return (
    <div className="container">
      <main className="main">
        <Cursor />
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
