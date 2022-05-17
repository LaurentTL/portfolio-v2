import Link from 'next/link'
import React from 'react'
import styles from './Menu.module.scss'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <div className={styles.menu__menuFullSize}>
                <Link href="/about">
                    <a className="about">about</a>
                </Link>
                <Link href="/works">
                    <a>works</a>
                </Link>
                <Link href="/contact">
                    <a>contact</a>
                </Link>
            </div>
            <div className={styles.menu__menuSmall}>
                Menu
            </div>
        </nav>
    )
}
