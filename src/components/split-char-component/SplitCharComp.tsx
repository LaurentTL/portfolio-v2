import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import SpanElement from '../span-element/SpanElement'

function SplitCharComp(props: any) {
    let children = props.children
    let text = children.props.children
    let textArr = Array.from(text).map((char, index) => {
        let obj = { rotation: "+=360" };
        return <SpanElement key={`${char}${index}`} char={char} animObject={obj} />
    })

    return (
        <div style={{ display: 'flex' }}>
            {
                textArr.map((span) => span)
            }
        </div>
    )
}

export default SplitCharComp
