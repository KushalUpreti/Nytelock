import './TextContent.css';
import Canvas from '../Canvas/Canvas';
import { useEffect, useRef } from 'react';

export default function TextContent(props) {
    let { title, para1, para2, logoLink } = props.content;
    const divRef = useRef();

    useEffect(() => {
        console.log(divRef.current.classList[1]);
        if (divRef.current.classList[1] === "trigger-text-n-logo-anim") {
            divRef.current.classList.remove("trigger-text-n-logo-anim");
            divRef.current.classList.add("trigger-anim-initial");
        } else {
            divRef.current.classList.remove("trigger-anim-initial");
            divRef.current.classList.add("trigger-text-n-logo-anim");
        }
    }, [title])

    return <section className="text-n-logo-container" ref={divRef}>
        <Canvas totalParticles={50} />
        <div className="padded-textnlogo-container">
            <div className="flex-text-n-logo-container">
                <div className="logo-text-content">
                    <h2>{title}</h2>
                    <p>{para1}</p>
                    <br />
                    <p>{para2}</p>
                </div>
                <div className="logo-image-content">
                    <img alt="logo-type-images" src={logoLink} />
                </div>
            </div>
        </div>
    </section>
}