import React, { useEffect } from 'react'
import { useRef } from 'react'
import SpanWordsComponent from '../../span-word-comp/SpanWordsComponent'
import styles from './Desc.module.scss'


function Desc() {

    let descRef = useRef(null)
    console.log(descRef.current)

    useEffect(() => {

    })

    return (
        <div className={styles.description} ref={descRef}>
            <SpanWordsComponent>
                Hello world! My name is Laurent Treuil and I'm so glad you are visiting my web portfolio.
            </SpanWordsComponent>
            <SpanWordsComponent>
                I am currently a web developer specialised in front-end technologies but with a fullstack scope. I use to work on different kind of projects, mostly on wordpress project such as you will see in the gallery next bellow.
            </SpanWordsComponent>
            <SpanWordsComponent>
                Passionnates about learning modern technologie i have decided to build this web application with the next.js react framework lauched by the Vercel company a few years ago.
            </SpanWordsComponent>
            <SpanWordsComponent>
                Curious and motivated, i spend a lot of time to test and build modern applications.
            </SpanWordsComponent>
        </div>
    )
}

export default Desc
