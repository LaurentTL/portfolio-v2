import React from 'react'
import styles from './Banner.module.scss'

function Banner() {
    return (
        <div className={styles.banner}>
            <h1 className={styles.banner__title}>
                <span>front-end</span>
                <span>developer</span>
            </h1>
        </div>
    )
}

export default Banner
