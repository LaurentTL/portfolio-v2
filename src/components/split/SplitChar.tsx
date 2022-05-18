import React, { ReactElement, useEffect } from 'react'
import Link from 'next/link'
import { text } from 'stream/consumers';
import Split from '../../utlis/Split';

interface Split {
    tag: string;
    className: string;
    text: string;
}

function SplitChar(props: Split): any {
    useEffect(() => {
        let split = Split(props.text)
        console.log(split)
    })
    if (props.tag == "a") {
        return (
            <Link href="/">
                <a className={props.className}>{props.text}</a>
            </Link>
        )
    } else if (props.tag == 'p') {
        return (
            <p className={props.className}>{props.text}</p>
        )
    } else if (props.tag == 'span') {
        return (
            <span className={props.className}>{props.text}</span>
        )
    } else if (props.tag == 'h1') {
        return
    }
}
export default SplitChar