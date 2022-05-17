import React from 'react'
import styles from './Mobile-menu.module.scss'
import Link from 'next/link'

function MobileMenu() {
    return (
        <section className={styles.mobileMenu}>
            <nav className={styles.mobileMenu__nav}>
                <Link href="/">
                    <a>home</a>
                </Link>
                <Link href="/about">
                    <a>about</a>
                </Link>
                <Link href="/works">
                    <a>works</a>
                </Link>
                <Link href="/contact">
                    <a>contact</a>
                </Link>
            </nav>
            <div className={styles.mobileMenu__available}>
                <span>currently available for</span>
                <span>permanent contract</span>
            </div>
            <div className={styles.mobileMenu__paris}>
                <span>Based near Paris</span>
                <span>/La Garenne Colombes/</span>
                <span>france</span>
            </div>
        </section>
    )
}

export default MobileMenu
