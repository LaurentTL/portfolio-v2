import React from 'react'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';

function SpanWordElement(props) {
    useLayoutEffect(() => {
        gsap.fromTo(ref.current, props.from, props.to);
    });
    let ref = useRef(null);
    return (
        <span ref={ref}>{props.word}</span>
    )
}

export default SpanWordElement
