import React from 'react'
import styles from './CounterSpanElement.module.scss'
import gsap from 'gsap'

function CounterSpanElement() {
    let numbers
    return (
        <span className={styles.counterSpanElement}>
            0
        </span>
    )
}

export default CounterSpanElement
