import React from 'react'
import SplitCharComp from '../split-char-component/SplitCharComp'
import SplitChar from '../split/SplitChar'
import styles from './Banner.module.scss'
import Image from 'next/image'
import gsap from 'gsap'

function Banner() {
    return (
        <div className={styles.banner}>
            <h2 className={styles.banner__title}>
                <SplitCharComp>
                    <span>Passionate</span>
                </SplitCharComp>
                <SplitCharComp>
                    <span>Front-End</span>
                </SplitCharComp>
                <SplitCharComp>
                    <span>Developper</span>
                </SplitCharComp>
            </h2>
        </div>
    )
}

export default Banner
