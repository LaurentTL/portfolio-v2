import React from 'react'
import CounterSpanElement from '../Counter-span-element/CounterSpanElement'
import styles from './Counter.module.scss'

function Counter() {
    return (
        <div className={styles.counter}>
            <CounterSpanElement>
                100
            </CounterSpanElement>
            <CounterSpanElement>
                50
            </CounterSpanElement>
            <CounterSpanElement>
                0
            </CounterSpanElement>
        </div>
    )
}

export default Counter
