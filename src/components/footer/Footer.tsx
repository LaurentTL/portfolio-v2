import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'

function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href="/">
                <a className={styles.header__title}> Laurent Treuil</a>
            </Link>
            <div className={styles.links}>
                <Link href="https://twitter.com/LaurentTreuil">
                    <a>Twitter</a>
                </Link>
                <Link href="https://www.linkedin.com/in/laurent-treuil/">
                    <a>Linkedin</a>
                </Link>
                <Link href="https://github.com/LaurentTL">
                    <a>Github</a>
                </Link>
            </div>
            <div className={styles.insp}>
                <p>
                    Inspired mainly by
                    <Link href="https://www.richardekwonye.com/">
                        <a>Richard Ekwonye's</a>
                    </Link>
                    portfolio.
                </p>
            </div>

        </footer>
    )
}

export default Footer
