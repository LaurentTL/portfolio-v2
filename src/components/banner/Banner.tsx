import React from 'react'
import SplitCharComp from '../split-char-component/SplitCharComp'
import SplitChar from '../split/SplitChar'
import styles from './Banner.module.scss'
import gsap from 'gsap'

function Banner() {
    return (
        <div className={styles.banner}>
            <h1 className={styles.banner__title}>
                <SplitCharComp>
                    <span>Front-End</span>
                </SplitCharComp>
                <SplitCharComp>
                    <span>Developer</span>
                </SplitCharComp>
            </h1>
        </div>
    )
}

export default Banner
