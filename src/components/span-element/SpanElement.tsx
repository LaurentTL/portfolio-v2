import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

let SpanElement = (props: any) => {
    // wait until DOM has been rendered
    useLayoutEffect(() => {
        gsap.fromTo(ref.current, props.from, props.to);
    });
    let ref = useRef(null);
    return <span ref={ref}>{props.char}</span>
}
export default SpanElement;