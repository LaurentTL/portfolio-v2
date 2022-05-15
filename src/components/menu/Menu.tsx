import React from 'react'
import styles from './Menu.module.scss'

export default function Menu() {
    return (
        <div className={styles.wraper}>
            <nav className={styles.wraper__menu}>
                <a href="#" className="about">About</a>
                <a href="" className="works">Works</a>
                <a href="" className="contact">Contact</a>
            </nav>
        </div>
    )
}
