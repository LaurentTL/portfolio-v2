import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import SpanElement from '../span-element/SpanElement'
import styles from './SplitCharComp.module.scss'

function SplitCharComp(props: any) {
    let children = props.children
    let text = children.props.children
    let textArr = Array.from(text).map((char, index) => {
        let from = {
            y: 180,
        }
        let to = {
            y: 0,
            delay: () => {
                return index * .1
            },
            ease: "power4out",
        }
        return <SpanElement key={`${char}${index}`} char={char} from={from} to={to} />
    })

    return (
        <div className={styles.reveal}>
            {
                textArr.map((span) => span)
            }
        </div>
    )
}

export default SplitCharComp
