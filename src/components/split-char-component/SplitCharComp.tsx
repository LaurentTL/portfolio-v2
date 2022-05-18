import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import SpanElement from '../span-element/SpanElement'
import styles from './SplitCharComp.module.scss'

function SplitCharComp(props: any) {
    let children = props.children
    let text = children.props.children
    let textArr = Array.from(text).map((char, index) => {
        let from = {
            y: 200,
            stagger: 0.5
        }
        let to = {
            y: 0,
            duration: 1.5
        }
        let obj = {
            duration: 1,
            y: 200,
            stagger: 0.2
        };
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
