import React from 'react'

function Split(elm: string) {
    console.log(elm)
    elm.split('').forEach((letter) => {
        let span = document.createElement('span')
        span.innerHTML = letter
        console.log(span)
    })
}

export default Split
