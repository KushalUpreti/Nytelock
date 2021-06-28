import { useState } from 'react';
import './AnimButton.css';

export default function AnimButton(props) {
    const [hovering, setHoveing] = useState(false);

    const hoverHandler = () => {
        setHoveing(prevState => {
            return !prevState;
        })
    }

    return <div className="container" onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
        <div className={hovering ? "expand expanding" : "expand contracting"}></div>

        <div className="link-container">
            <a href="https://www.example.com">
                <p>{props.text}</p>
                <div className="icon-holder">
                    <i className={props.icon}></i>
                </div>

            </a>
        </div>

    </div>
}