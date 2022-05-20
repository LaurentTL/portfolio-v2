import React from 'react'
import styles from './CounterSpanElement.module.scss'
import gsap from 'gsap'

function CounterSpanElement(props: any) {
    return (
        <span className={styles.counterSpanElement}>
            {props.num}
        </span>
    )
}

export default CounterSpanElement
