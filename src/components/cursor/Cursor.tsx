import React, { useRef } from 'react'
import styles from './Cursor.module.scss'

function Cursor() {

    let cursorRef = useRef()

    let cursor = e => {
        console.log(cursorRef.current)
    }

    return (
        <div onMouseMove={cursor} className={styles.cursor} ref={cursorRef} />
    )
}

export default Cursor
