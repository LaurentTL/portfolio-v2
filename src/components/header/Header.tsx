import React, { useEffect } from 'react'
import Menu from '../menu/Menu'
import styles from '../header/Header.module.scss'
import Link from 'next/link'
import SplitChar from '../split/SplitChar'

export default function Header() {
  return (
    <header className={styles.header}>
      <SplitChar tag={"a"} text={"Laurent Treuil"} className={styles.header__title} />
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
