import React, { useEffect, useRef } from 'react'
import LoaderTitle from '../loader-title/LoaderTitle'
import styles from './Loader.module.scss'
import gsap from 'gsap'
import LoaderCounter from '../loader-counter/LoaderCounter'

function Loader() {

    let ref = useRef(null)

    useEffect(() => {
        gsap.to
    })
    return (
        <div className={styles.loader} ref={ref}>
            <LoaderTitle />
            <LoaderCounter />
        </div>
    )
}

export default Loader
