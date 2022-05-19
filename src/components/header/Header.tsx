import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Menu from '../menu/Menu'
import styles from '../header/Header.module.scss'
import Link from 'next/link'
import SplitChar from '../split/SplitChar'
import gsap from 'gsap'

export default function Header() {

  let el = useRef(null)

  useLayoutEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: -200
      },
      {
        y: 0,
        delay: 0.8
      }
    )
  })

  return (
    <header className={styles.header} ref={el}>
      <Link href="/">
        <a className={styles.header__title}> Laurent Treuil</a>
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
