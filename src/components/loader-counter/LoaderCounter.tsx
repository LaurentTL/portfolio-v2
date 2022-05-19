import React from 'react'
import styles from './LoaderCounter.module.scss'
import Counter from '../counter/Counter'

function LoaderCounter() {
    return (
        <div className={styles.loaderCounter}>
            <Counter />
        </div>
    )
}

export default LoaderCounter
