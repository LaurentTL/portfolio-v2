import React, { useEffect } from 'react'
import Menu from '../menu/Menu'
import styles from '../header/Header.module.scss'
import nextComponentType from 'next'
import Link from 'next/link'
import MobileMenu from '../mobile-menu/MobileMenu'
import Split from '../../utlis/split'

export default function Header() {
  useEffect(() => {
    const title = document.querySelector('#title')
    const split = Split(title)
    console.log(split)
  })
  return (
    <header className={styles.header}>
      <Link href="/">
        <a id="title" className={styles.header__title}>laurent treuil</a>
      </Link>
      <div className={styles.header__available}>
        <span>Currently available for</span>
        <span>permanent contract.</span>
      </div>
      <div className={styles.header__paris}>
        <span>Based near Paris</span>
        <span>France</span>
      </div>
      <Menu />
    </header>
  )
}
