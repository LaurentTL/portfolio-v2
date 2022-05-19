import React, { useRef, useEffect } from 'react'
import styles from './LoaderTitle.module.scss'
import gsap from 'gsap'

function LoaderTitle() {

    let ref = useRef(null)

    useEffect(() => {
        gsap.to(ref.current, {
            opacity: 0,
            delay: 2,
            duration: 0.6
        })
    })

    return (
        <div className={styles.loaderTitle} ref={ref}>
            <span>Laurent Treuil</span>
            <span>Portfolio ©2022</span>
        </div>
    )
}

export default LoaderTitle
