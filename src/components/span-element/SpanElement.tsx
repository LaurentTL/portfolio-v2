import { useEffect, useRef } from "react";
import { gsap } from "gsap";

let SpanElement = (props) => {
    // wait until DOM has been rendered
    useEffect(() => {
        gsap.to(ref.current, props.animObject);
    });
    let ref = useRef(null);
    return <span ref={ref}>{props.char}</span>
}
export default SpanElement;