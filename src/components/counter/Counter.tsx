import React from 'react'
import CounterSpanElement from '../Counter-span-element/CounterSpanElement'
import styles from './Counter.module.scss'

function Counter(props: any) {
    let children = props.children
    let numbers = [0, 36, 67, 100]
    return (
        <div className={styles.counter}>
            {
                numbers.map((num) => <CounterSpanElement key={num}>{num}</CounterSpanElement>)
            }
        </div>
    )
}

export default Counter
