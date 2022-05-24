import gsap from 'gsap'
import React, { useEffect } from 'react'
import styles from './SpanWordsComponent.module.scss'

function SpanWordsComponent(props: any) {

    let children = props.children

    useEffect(() => {
        var splitWords = new SplitText(children.current)
    })


    return (
        <div className={styles.spanWord}>

        </div>
    )
}

export default SpanWordsComponent
